const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://manyasharma137:$$jammu123@cluster0.rqiujbv.mongodb.net/");

const todoSchema = mongoose.Schema({
    title : String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}