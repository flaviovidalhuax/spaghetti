const { DataTypes } = require('sequelize');

const db = require('../utils/database');

//* {
//*     id: 5,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

const Tasks = db.define('usuarios', { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    frist_name: {
        type: DataTypes.STRING, //? es un varchar (tiene 255 de limitante)
        allowNull: false, //? Es un campo obligatorio
    },
    last_name: {
        type: DataTypes.STRING, //? es un varchar (tiene 255 de limitante)
        allowNull: false, //? Es un campo obligatorio
    },
    email: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false, 
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    birtday: {
        type: DataTypes.DATEONLY// YY/MOTH/DAY

    }
}, {
    timestamps: false
})

module.exports = Tasks

// id: 1,
// first_name: 'string',
// last_name: 'string',
// email: 'string',
// password: 'string',
// birthday: 'YYYY/MM/DD'



