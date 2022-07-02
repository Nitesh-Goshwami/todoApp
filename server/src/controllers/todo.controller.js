
const express = require("express");
const router = express.Router();

//models
const Todo = require("../models/todo.model");


// <----------------------------------CRUD Operation for Todo----------------------------------->

router.get("/", async (request, response) => {
    try {
        const results = await Todo.find().lean().exec();
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.get("/:id", async (request, response) => {
    try {
        const results = await Todo.findById(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});


router.post("/", async (request, response) => {
    try {
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
        const results = await Todo.findByIdAndUpdate(request.params.id, request.body, { new: true });
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const results = await Todo.findByIdAndDelete(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});




//export
module.exports = router;