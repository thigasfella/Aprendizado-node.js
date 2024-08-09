const users = require("../models/users")

module.exports = {
    dashboard: (req, res) => {
        req.session.autheticated
        req.session.currentUser

        res.render('dashboard', {user: req.session.currentUser})
    },

    users: (req, res) =>{
        res.render('users', {users})
    }
}