const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completedstatus: { type: String, required: false, default: "false" },
    deletedstatus : {type: String, required: false, default: "false" }
},
    {
        versionKey: false,
        timestamps: true,
    });

module.exports = mongoose.model("todo", todoSchema)
