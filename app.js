const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./admin-routes')

const { log } = require('console')

const start = (port = 3000) => {
    try {
        const app = express()
        app.set('views', './views')
        app.set('view engine', 'pug')
        app.use(express.static('public'))
        app.use(express.static('node_modules/bootstrap/dist'))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use((req, res, next) => {   // middleware
            log(`Incoming Request: ${req.url}`)
            next()
        })
        app.get('/', (request, response) => response.render('index-view', { title: 'Home' }))
        app.use('/admin', adminRoutes.router)
        app.listen(port, () => log(`Node Chat App listening on port ${port}!`))
    } catch (err) {
        log(err.message)
    }
}

start()