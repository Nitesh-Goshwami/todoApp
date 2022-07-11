const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://todoApp:todoApp@project2.g1ui4si.mongodb.net/?retryWrites=true&w=majority")
    // return mongoose.connect("mongodb+srv://TodoApp:TodoApp@cluster0.xhito6w.mongodb.net/?retryWrites=true&w=majority")
}

//mongodb+srv://TodoApp:TodoApp@cluster0.xhito6w.mongodb.net/?retryWrites=true&w=majority