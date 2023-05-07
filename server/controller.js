let Userdb = require('../model/model')

// создание и сохранение пользователя 
exports.create = (req,res) => {
//валидация
if(!req.body) {
res.status(400).send({message:'Поля не могут быть пустые'})
return;
}

//ноывый пользователь
const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
})

//отображение всех пользователей
exports.find = (req,res) => {

}
// обновление пользователя
exports.update = (req,res) => {



}
//создание и сохранение пользователя
exports.delete = (req,res) => {

}
}

//сохранение пользователя
user
.save(user)
.then(data => {
    // res.send(data)
})
.catch(err => {
    res.status(500).send({
        message: err.message
    })
})

//отображение всех пользователей
exports.find = (req,res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

//обновления пользователя
exports.update = (req,res) => {
    if(!req.body) {
        return res
             .status(400)
             .send({message: 'Поле не может быть пустое'})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{userFindAndModify: false})
    .then (data => {
        if(!data){
            res.status(404).send({message: 'Не получается обновить данные'})
        } else {   
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

//удаление пользователя
exports.delete = (req,res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: 'Не получается удалить'})
        } else {
           res.send({
               message: 'Пользователь успешно удален'
           }) 
        }
    })
    .catch(err => {
        res.status(500).send({
            message:err.message
        })
    })
}