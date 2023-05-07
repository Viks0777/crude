const mongoose = require('mongoose')
const path = require('path')

const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGOurl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Соедениение с БД успешно прошло')
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}


module.exports = connectDB