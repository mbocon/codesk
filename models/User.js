const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
	email: String,
    password: String,
    gitHubUserName: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User
