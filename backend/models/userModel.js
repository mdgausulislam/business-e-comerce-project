const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    profilePic: String,
    role: String,
    resetToken: String,
    resetTokenExpiry: Date // Date when the reset token expires
}, {
    timestamps: true
})


const userModel = mongoose.model("user", userSchema)


module.exports = userModel