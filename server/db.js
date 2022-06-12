const mongoose = require("mongoose")
//Połączenie się z bazą
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        //mongoose.connect('mongodb://mongodb:27017/projekt')
        mongoose.connect('mongodb://localhost:27017/projekt')
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    }
}
