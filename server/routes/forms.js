const router = require("express").Router()
const { json } = require("express");
const Form = require("../models/form.js")
router.post('/', async (req, res) => {
    try {
        await new Form({ ...req.body }).save()
        res.status(201).send({ message: "Dodano dane" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

router.route('/fetchData').get((req, res) => {
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
    
    // Form.Forms.find((error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         res.json(data)
    //     }
    // })

})
module.exports = router