const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

const uri = 'mongodb+srv://vuttr:MxaCMGWRKBi9bSC0@vuttr-bqyys.mongodb.net/vuttr?retryWrites=true&w=majority'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,

}).catch(error => console.log(error))

app.listen(process.env.PORT || 3000)