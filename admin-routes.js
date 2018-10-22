const { Router } = require('express')
const admin = require('./admin-controller')

const router = Router()

router
      .get('/rooms', admin.getAdminRooms)
      
      .get('/rooms/add', admin.getAddAdminRoom)
      
      .post('/rooms/add', admin.postAddAdminRooms)
      
      .get('/rooms/edit/:id', admin.getEditAdminRooms)
      
      .post('/rooms/edit/:id', admin.postEditAdminRooms)
      
      .get('/rooms/delete/:id', admin.getDeleteAdminRooms)

exports.router = router