const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

// NUNKUCK CONFIG
nunjucks.configure(path.resolve('src', 'views'), {
    autoescape: true,
    express: app,
    watch: true
})
app.set('view engine', 'njk')
app.get('/', (req, res) => {
    return res.render('home')
})
app.use(express.static(path.resolve('src', 'public')))

// MONGODB CONFIG
const uri = 'mongodb+srv://vuttr:MxaCMGWRKBi9bSC0@vuttr-bqyys.mongodb.net/vuttr?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,

}).catch(error => console.log(error))

app.listen(process.env.PORT || 3000)