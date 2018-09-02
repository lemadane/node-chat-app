const { Router } = require('express')
const admin = require('./admin-controller')

const router = Router()

router.route('/rooms')
      .all((res, req, next) => next())

      .get('/', admin.getAdminRooms)
      
      .get('/add', admin.getAddAdminRoom)
      
      .post('/add', admin.postAddAdminRooms)
      
      .get('/edit/:id', admin.getEditAdminRooms)
      
      .post('/edit/:id', admin.postEditAdminRooms)
      
      .get('/delete/:id', admin.getDeleteAdminRooms)

exports.router = router