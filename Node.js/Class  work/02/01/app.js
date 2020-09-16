//npm i hbs --save - install engine Handlebars
//npm i express-handlebars - for hbs layout

const config = require('./config')
const express = require('express')
const app = express()
const hbs = require('hbs')
const expressHbs = require('express-handlebars')
const homeRouter = require('./routes/home.routes')
const mongoose = require('mongoose')

app.set('view engine', 'hbs')
//регистрации layout`s
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}))
app.use(express.static(__dirname + '/public'))
//регистрации пути к частичным представлениям
hbs.registerPartials(__dirname + '/views/partials')


//регистрации маршрутов
app.use('/', homeRouter)

//подключение к БД
mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(3000)