const userControlers = require('./users.controllers')
 
const getAllUsers = (req, res) => {
    userControlers.findAllUsers()
        .then( (data) =>{res.status(200).json(data)})
        .catch( (err) =>{res.status(400).json({message: err.message})})
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControlers.findUserById(id)
        .then( (data)=>{
            if (data) {
                res.status(200).json(data)
            }else{
                res.data(404).json({message:'Invalid ID'})
            }
        })
        .catch(err=>{ res.status(400).json({message: err.message})})
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthdaty}= req.body
    userControlers.updateUser({first_name, last_name, email, password, birthdaty})
        .then((data)=>{res.status(200).json(data)})
        .catch(err=>{res.status(400).json({message: req.body})})
}

const patchUser = (req, res) => {
    const id = res.params.id
    const {first_name, last_name, email, password, birthdaty}= req.body
    userControlers.updateUser(id,{first_name, last_name, email, password, birthdaty})
        .then((data)=>{
            if (data) {
                res.status(200).json({message:'User is succesfuly whith is' + id})
            }else{
                res.status(400).json({message: err.message})
            }
        })
        .catch(err=>{ res.status(400).json({message: err.message})})
}

const deleteUser = (req, res) => {
    const id = req.params.id
    userControlers.deleteUser(id)
        .then((data)=>{
            if (data) {
                res.status(204).json({message:'Delete Succesfuly'})
            }else{
                res.status(404).json({message:'Invalid id'})
            }
        })
        .catch((err)=>{res.status(400).json({message:err.message})})
}
module.exports={
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}

// id: 1,
// first_name: 'string',
// last_name: 'string',
// email: 'string',
// password: 'string',
// birthday: 'YYYY/MM/DD'


