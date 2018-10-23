const { Router } = require('express')
const admin = require('./admin-controller')

const router = Router()

router.get('/rooms', admin.getAdminRooms)
      .get('/rooms/add', admin.getAddAdminRoom)
      .post('/rooms/add', admin.postAddAdminRooms)
      .get('/rooms/delete/:id', admin.getDeleteAdminRooms)

router.route('/rooms/edit/:id')
      .all(admin.findRoomByIdMW)
      .get(admin.getEditAdminRooms)
      .post(admin.postEditAdminRooms)

exports.router = router