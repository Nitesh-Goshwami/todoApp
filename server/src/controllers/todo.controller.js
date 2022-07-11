
const express = require("express");
const router = express.Router();

//models
const Todo = require("../models/todo.model");

// exports.arr
// <----------------------------------CRUD Operation for Todo----------------------------------->


router.get("/", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.find().lean().exec();
        let res = results.filter(el => el.deletedstatus == "false" && el.completedstatus == "false");

        console.log("res", res);
        // return response.send(res);
        return response.send(res);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});
router.get("/all", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.find().lean().exec();

        // return response.send(res);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//for deleted task
router.get("/deleted", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.find().lean().exec();
        let res = results.filter(el => el.deletedstatus == "true" && el.completedstatus == "false");
        return response.send(res);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//for complted task
router.get("/completed", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.find().lean().exec();
        let res = results.filter(el => el.completedstatus == "true" && el.deletedstatus == "false");
        return response.send(res);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.post("/", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.create(request.body);
        return response.send(results);
    }
    catch (err) {
        console.log("im in error")
        response.status(401).send(err.message);
    }
});

router.patch("/:id", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.findByIdAndUpdate(request.params.id, request.body, { new: true });
        console.log("res", results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Credentials", "true");
        const results = await Todo.findByIdAndDelete(request.params.id);
        arr.push(results)
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});




//export
module.exports = router;