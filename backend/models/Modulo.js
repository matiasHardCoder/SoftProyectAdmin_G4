const Sequelize = require('sequelize')

const db = require("../database/db.js")
//Sequelize utiliza las tablas con nombre en plural en este senido debe terminar en 's'
module.exports = db.sequelize.define(
    'subjects',
    {
        id:{
            type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },
        nombre:{
            type: Sequelize.TEXT
        },
        degree:{
            type: Sequelize.TEXT
        },
        disponible:{
            type: Sequelize.INTEGER
        }



    },
    {
        timestamps:false
    }
 );