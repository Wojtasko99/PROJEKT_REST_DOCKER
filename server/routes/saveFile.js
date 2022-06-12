const router = require("express").Router()
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const dbName = "projekt";
const client = new MongoClient('mongodb://mongodb:27017', { useUnifiedTopology: true });
const Form = require("../models/form.js")

router.post('/', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getAll(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('allData.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

router.post('/languages', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getLanguage(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('languages.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

router.post('/languages_age', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getAge(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('languages_age.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

router.post('/languages_degree', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getDegree(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('languages_degree.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

router.post('/languages_sex', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getSex(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('languages_sex.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

router.post('/languages_region_age', async (req, res) => {
    client.connect(function (err) {
        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getRegionAge(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync('languages_region_age.json', JSON.stringify(docs));
                console.log('Done writing to file.');
                res.status(201).send({ message: "Zapisano" })
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

const getAll = function (db, callback) {
    const query = {};
    db.collection("forms")
        .find(query)
        .toArray(function (err, result) {
            if (err) throw err;
            callback(result);
        });
};

const getLanguage = function (db, callback) {
    const aggr = [
        { $group: { _id: { Q3: '$Q3', Q8: '$Q8' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        {
            $group: {
                _id: { Q3: '$_id.Q3' }, Q8: { $first: '$_id.Q8' },
                count: { $first: '$count' }
            }
        },
        { $sort: { _id: 1 } }
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            callback(data)
        }
    })
};

const getAge = function (db, callback) {
    const aggr = [
        { $group: { _id: { Q2: '$Q2', Q8: '$Q8' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        {
            $group: {
                _id: { Q2: '$_id.Q2' }, Q8: { $first: '$_id.Q8' },
                count: { $first: '$count' }
            }
        },
        { $sort: { _id: 1 } }
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            callback(data)
        }
    })
};

const getDegree = function (db, callback) {
    const aggr = [
        { $group: { _id: { Q4: '$Q4', Q8: '$Q8' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        {
            $group: {
                _id: { Q4: '$_id.Q4' }, Q8: { $first: '$_id.Q8' },
                count: { $first: '$count' }
            }
        },
        { $sort: { _id: 1 } }
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            callback(data)
        }
    })
};

const getSex = function (db, callback) {
    const aggr = [
        { $group: { _id: { Q1: '$Q1', Q8: '$Q8' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        {
            $group: {
                _id: { Q1: '$_id.Q1' }, Q8: { $first: '$_id.Q8' },
                count: { $first: '$count' }
            }
        },
        { $sort: { _id: 1 } }
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            callback(data)
        }
    })
};

const getRegionAge = function (db, callback) {
    const aggr = [
        { $group: { _id: { Q3: '$Q3', Q2: '$Q2', Q8: '$Q8' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        {
            $group: {
                _id: { Q3: '$_id.Q3', Q2: '$_id.Q2' }, Q8: { $first: '$_id.Q8' },
                count: { $first: '$count' }
            }
        },
        { $sort: { _id: 1 } }
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            callback(data)
        }
    })
};
module.exports = router