const router = require("express").Router()
const { json } = require("express");
const Form = require("../models/form.js")

//Pobieranie danych z bazy
router.route('/postData/data').post((req, res) => {
    try {
        new Form.Forms({ ...req.body }).save()
        res.status(201).send({ message: "Dodano dane" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});
//Pobieranie danych z bazy
router.route('/fetchData/language').get((req, res) => {
    const aggr = [ 
        {$group:{_id:{Q3:'$Q3', Q8:'$Q8'}, count:{$sum:1}}}, 
        {$sort:{count: -1}},
        {$group:{_id:{Q3: '$_id.Q3'}, Q8:{$first:'$_id.Q8'}, 
        count:{$first:'$count'}}},
        {$sort:{_id: 1}}
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//Pobieranie danych z bazy
router.route('/fetchData/language_age').get((req, res) => {
    const aggr = [ 
        {$group:{_id:{Q2:'$Q2', Q8:'$Q8'}, count:{$sum:1}}}, 
        {$sort:{count: -1}},
        {$group:{_id:{Q2: '$_id.Q2'}, Q8:{$first:'$_id.Q8'}, 
        count:{$first:'$count'}}},
        {$sort:{_id: 1}}
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//Pobieranie danych z bazy
router.route('/fetchData/language_degree').get((req, res) => {
    const aggr = [ 
        {$group:{_id:{Q4:'$Q4', Q8:'$Q8'}, count:{$sum:1}}}, 
        {$sort:{count: -1}},
        {$group:{_id:{Q4: '$_id.Q4'}, Q8:{$first:'$_id.Q8'}, 
        count:{$first:'$count'}}},
        {$sort:{_id: 1}}
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//Pobieranie danych z bazy
router.route('/fetchData/language_sex').get((req, res) => {
    const aggr = [ 
        {$group:{_id:{Q1:'$Q1', Q8:'$Q8'}, count:{$sum:1}}}, 
        {$sort:{count: -1}},
        {$group:{_id:{Q1: '$_id.Q1'}, Q8:{$first:'$_id.Q8'}, 
        count:{$first:'$count'}}},
        {$sort:{_id: 1}}
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/fetchData/language_regions-age').get((req, res) => {
    const aggr = [ 
        {$group:{_id:{Q3:'$Q3',Q2: '$Q2', Q8:'$Q8'}, count:{$sum:1}}}, 
        {$sort:{count: -1}},
        {$group:{_id:{Q3:'$_id.Q3',Q2:'$_id.Q2'}, Q8:{$first:'$_id.Q8'}, 
        count:{$first:'$count'}}},
        {$sort:{_id: 1}}
    ]

    Form.Forms.aggregate(aggr).exec((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
module.exports = router