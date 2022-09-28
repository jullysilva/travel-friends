const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const roadMapRoutes = require('./routes/roadMapRoutes')

app.use('/roadmap', roadMapRoutes)


app.get('/', (req,res) => {

    res.json({message: '...'})
})

const DB_USER = 'admin'
const DB_PASSWORD = encodeURIComponent('admin')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.1nigmuz.mongodb.net/?retryWrites=true&w=majority`
)

.then(() => {
console.log('Conectado ao banco de dados')
app.listen(3000)
})

.catch((err) => console.log(err)) 
