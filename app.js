const express = require('express')
const app = express()
let rooms = require('./data/rooms.json')
const bodyParser = require('body-parser')
const adminRoutes = require('./admin-routes')

const { log } = require('console')

app.set('views', './views')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(express.static('node_modules/bootstrap/dist'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => response.render('index', { title: 'Home' }))

app.use('/admin', adminRoutes.routes)

const port = 3000
app.listen(port, () => log(`Node Chat App listening on port ${port}!`))