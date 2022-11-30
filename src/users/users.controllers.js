   const Task = require('../models/users.models')
   const todoDB =[]
   let id = 1

const findAllUsers = async() => {
    const data = await Task.findAll()
    return data
}

const findUserById = async() => {
    const todo = await Task.findOne({
        where:{
            id: id
        }
    })
    return todo
}

const createUser = async(obj) => {
    const data = await Task.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password:obj.password,
        birthday:obj.birthday
    })
    return data
}

const updateUser = async(id, obj) => {
    const data = await Task.update({
        obj, 
        where:{
            id:id,
        }
    })
    return data[0]
  
}
const deleteUser = async() => {
    const data = await Task.destroy({
        where:{id:id}
    })
    return data 
}

module.exports= {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser

}

// id: 1,
// first_name: 'string',
// last_name: 'string',
// email: 'string',
// password: 'string',
// birthday: 'YYYY/MM/DD'

