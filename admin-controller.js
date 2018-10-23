const uuid = require('uuid')
let rooms = require('./data/rooms.json')

exports.getAdminRooms = (request, response) => {
    response.render('rooms-view', {
        title: 'Admin Rooms',
        rooms: rooms
    })
}

, exports.getAddAdminRoom = (request, response) => response.render('rooms-add-view')

, exports.postAddAdminRooms = (request, response) => {
        const room = {
            name: request.body.name,
            id: uuid.v4()
        }
        rooms.push(room)
        response.redirect('/admin/rooms')
    }


, exports.getEditAdminRooms = (request, response) => {
        // const roomId = request.params.id
        // const room = rooms.find(r => r.id === roomId)
        // if (!room) {
        //     response.sendStatus(404)
        //     return
        // }
        const room = response.locals.room
        response.render('rooms-edit-view', { room })
    }

, exports.postEditAdminRooms = (request, response) => {
        // const roomId = request.params.id
        // const room = rooms.find(r => r.id === roomId)
        // if (!room) {
        //     response.sendStatus(404)
        //     return
        // }
        const room = response.locals.room   
        room.name = request.body.name
        response.redirect('/admin/rooms')
    }

, exports.findRoomByIdMW  = (request, response, next) => {
    const roomId = request.params.id
        const room = rooms.find(r => r.id === roomId)
        if (!room) {
            response.sendStatus(404)
            return
        }
        response.locals.room = room
        next()
}


, exports.getDeleteAdminRooms = (request, response) => {
        const roomId = request.params.id
        rooms = rooms.filter(r => r.id !== roomId)
        response.redirect('/admin/rooms')
    }