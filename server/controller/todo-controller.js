const Todo = require('../model/todo');

const addTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save()

        return res.status(200).json(newTodo)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

const getAllTodos = async (req, res) => {
    try {

        const todos = await Todo.find({}).sort({ 'createAt': -1 })

        return res.status(200).json(todos)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

const toggleTodoDone = async (req, res) => {
    try {

        const todoRef = await Todo.findById(req.params.id)
        const todo = await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {done: !todoRef.done}
        )

        await todo.save()

        return res.status(200).json(todo)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

const updataTodo = async (req, res) => {
    try {

        await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {data: req.body.data}
        )

        const todo = await Todo.findById(req.params.id)

        return res.status(200).json(todo)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

const deleteTodo = async (req, res) => {
    try {

        const todo = await Todo.findByIdAndDelete(req.params.id)

        return res.status(200).json(todo)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    toggleTodoDone,
    updataTodo,
    deleteTodo
}