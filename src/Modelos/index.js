//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize(`postgres://postgres:pps@gmail.com:5432/departamentos`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db