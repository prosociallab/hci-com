// Import express
const express = require('express')

// Import twitter-controller
const twitterRoutes = require('./../controllers/twitter-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all users
// In server.js, data route is specified as '/twitter'
// this means that '/all' translates to '/twitter/all'
router.get('/all', twitterRoutes.usersAll)

// Export router
module.exports = router