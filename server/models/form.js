const mongoose = require("mongoose")
const Joi = require("joi")
const formSchema = new mongoose.Schema({
    Q1: { type: String, required: true },
    Q2: { type: String, required: true },
    Q3: {type: String, required: true},
    Q4: {type: String, required: true},
    Q6: {type: String, required: true},
    Q7: {type: String, required: true},
    Q8: {type: String, required: true}
})
const Form = mongoose.model("Form", formSchema)
module.exports = Form