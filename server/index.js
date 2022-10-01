const express = require('express')
const Connection = require('./database/db')
const cors = require('cors')
const Routes = require('./routes/route')


const app = express()

app.use(cors())

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use('/', Routes)

const PORT = 8000

Connection()

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`))