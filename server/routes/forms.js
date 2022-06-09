const router = require("express").Router()
const Form = require("../models/form.js")
router.post('/', async (req, res) => {
    try {
        await new Form({ ...req.body}).save()
        res.status(201).send({ message: "Dodano dane" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

router.get('/fetchData', async (req, res) => {
    const forms = Form.Forms

    const data = await forms.find({}).exec((err, formsData) => {
        
        if(formsData){
            res.send(JSON.stringify(formsData));
        } else{
            res.send();
        }
    })
});
module.exports = router