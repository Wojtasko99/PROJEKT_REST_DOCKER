const router = require("express").Router()
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const dbName = "projekt";
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

router.post('/', async (req, res) => {
    client.connect(function (err) {

        const fileName = res.body.fileName;

        console.log('Connected successfully to server');

        const db = client.db(dbName);

        getDocuments(db, function (docs) {
            console.log('Closing connection.');
            client.close();

            try {
                fs.writeFileSync(fileName + '.json', JSON.stringify(docs));
                console.log('Done writing to file.');
            } catch (err) {
                console.log('Error writing to file', err);
            }
        });
    });
});

const getDocuments = function (db, callback) {
    const query = {};
    db.collection("forms")
        .find(query)
        .toArray(function (err, result) {
            if (err) throw err;
            callback(result);
        });
};
module.exports = router