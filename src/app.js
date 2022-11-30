const express = require('express')

const port = 9000
const db =require('./utils/database')
const userRoter = require('./users/users.router')
const app = express()
app.use(express.json())
    db.authenticate()
        .then( ()=>{console.log('Data autenticated')})
        .catch((err)=>{console.log(err)})
    db.sync()
        .then(()=>{console.log('Database synced')})
        .catch((err)=>{console.log(err)})


app.use(express.json())
app.get('/', (req, res) => { res.status(200).json({message: 'Ok!'})}) 
app.use('/api/v1', userRoter)

app.listen(port, () => { console.log(`Server started at port ${port}`)})
