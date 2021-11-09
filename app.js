require('dotenv').config()

const express = require('express')
const cors = require('cors')



const app = express()
app.use(cors())
app.use(express.json())

const connectionToDB = require('./db/db.config')
const producRouter = require('./router/productRouter')

async function init() {


const db = await connectionToDB()

app.use('/',producRouter)

app.listen(process.env.PORT,()=>{

    console.log("conecato na porta "+process.env.PORT)
})


}


init()