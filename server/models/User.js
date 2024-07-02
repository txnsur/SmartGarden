const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String,
    name: {
        firstName: String,
        lastName: String
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    }
})

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel