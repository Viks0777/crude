const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

const services = require('./render')
//главная страница
route.get('/',services.homeRoutes )


//добавление пользователя
route.get('/add-user',(req, res)=> {
    res.render('add__user')
})
//обновление пользователя
route.get('/update-user', (req,res)=> {
    res.render('update')
})
// api

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users:id', controller.update)
route.delete('/api/users:id', controller.create)

module.exports = route