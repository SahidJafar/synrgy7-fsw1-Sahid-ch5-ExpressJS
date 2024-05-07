const express = require('express')
const app = express()
const {PORT = 8000} = process.env

const Router = require('./routes/index')


app.get('/', (req,res) => {
    res.json({message: 'Hello World'})
})

// // String Params
// // app.get('/:id', (req,res) => {
// //     res.json({message: 'It has ID'})
// // })

// // Middleware
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// // Query Params
// app.get("/:id", (req,res) =>{
//    const { id } = req.params

//    res.json({message: `It has ID: ${id}`})
// })

// app.get('/sample', (req,res) => {
//     const {id,name} = req.query
//     res.json({message: `it has ID: ${id} & ${name}`})
// })

// // Raw Json POST
// app.post('/sample', (req,res) =>{
//     const payload = req.body
//     res.json({message: `Created!`, data:payload})
// })

/* 
People
*/
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Atur mesin tampilan EJS
app.set('view engine', 'ejs');
app.use(Router)

app.listen(PORT, ()=>{
    console.log(`Express nyala di http://localhost:${PORT}`);
})


