const mongoose = require('mongoose')
require('dotenv').config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fxw5bm9.mongodb.net/todoApp?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI)

    mongoose.connection.on('connected',()=> {
        console.log('Database Connected Successfully');
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (err)=> {
        console.log('Error white connecting with the database', err.message);
    })
}

module.exports = Connection