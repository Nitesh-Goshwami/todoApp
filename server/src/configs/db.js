const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://todoApp:todoApp@project2.g1ui4si.mongodb.net/?retryWrites=true&w=majority")
}