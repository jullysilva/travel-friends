//Config Inicial
const express = require('express')
const app = express()

//ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
//rota Inicial / endpoint
app.get('/', (req,res) => {
    

    //mostrar req

    res.json({message: '...'})
})

//entregar porta
app.listen(3000)