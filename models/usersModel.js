const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        unique: [true, "You have already registered!"]
    },
    bannerImage: {
        type: String,
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    }
})

const Users = mongoose.model('users', userSchema);

module.exports = Users;
