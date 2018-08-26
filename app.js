const express = require('express')
const app = express()
let rooms = require('./data/rooms.json')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const { log } = require('console')

app.set('views', './views')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(express.static('node_modules/bootstrap/dist'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => response.render('index', { title: 'Home' }))

app.get('/admin/rooms', (request, response) => {
    response.render('rooms', {
        title: 'Admin Rooms',
        rooms: rooms
    })
})

app.get('/admin/rooms/add', (request, response) => response.render('room-add'))

app.post('/admin/rooms/add', (request, response) => {

    const room = {
        name: request.body.name,
        id: uuid.v4()
    }

    rooms.push(room)

    response.redirect('/admin/rooms')
})

app.get('/admin/rooms/edit/:id', (request, response) => {

    const roomId = request.params.id

    const room = rooms.find(r => r.id === roomId)
    if (!room) {
        response.sendStatus(404)
        return
    }

    response.render('room-edit', { room })
})

app.post('/admin/rooms/edit/:id', (request, response) => {
    const roomId = request.params.id

    const room = rooms.find(r => r.id === roomId)
    if (!room) {
        response.sendStatus(404)
        return
    }

    room.name = request.body.name

    response.redirect('/admin/rooms')
})

app.get('/admin/rooms/delete/:id', (request, response) => {

    const roomId = request.params.id

    rooms = rooms.filter(r => r.id !== roomId)

    response.redirect('/admin/rooms')
})

const port = 3000
app.listen(port, () => log(`Node Chat App listening on port ${port}!`))