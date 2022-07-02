const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
{
    versionKey :false,
    timestamps :true,
});

module.exports = mongoose.model("user", userSchema)
