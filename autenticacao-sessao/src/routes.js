const express = require('express')
const dasboardController = require('./controllers/dasboardController')
const authController = require('./controllers/auth-controller')
const {authMiddleware, ensureUserAdmin} = require('./middlewares/auth-middleware')


const router = express.Router()

router.get('/dashboard', authMiddleware, dasboardController.dashboard)
router.get('/', authController.index)
router.get('/auth/logout', authMiddleware, authController.logout)
router.get('/dashboard/users', authMiddleware, ensureUserAdmin, dasboardController.users)

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

module.exports = router