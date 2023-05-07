const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodypaser = require('body-parser')
const connectDB = require('./server/connection')
const app = express()
const path = require('path')
const { dirname } = require('path')
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))

connectDB()

//подключение assets
app.use('/css', express.static('assets/css'));
app.use('/img', express.static('assets/img'));
app.use('/js', express.static('assets/js'));

app.use('/', require('./server/router'))
// подключение ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))

app.use(bodypaser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('index')
})
//добавление пользователя
app.get('/add-user',(req, res)=> {
    res.render('add__user')
})
//обновление пользователя
app.get('/update-user', (req,res)=> {
    res.render('update')
})
app.listen(PORT, () => {
    console.log('сервер запущен на' + PORT+ 'порту')
})

