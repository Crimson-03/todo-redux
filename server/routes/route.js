const express = require('express')
const { addTodo, getAllTodos, toggleTodoDone, updataTodo, deleteTodo } = require('../controller/todo-controller')

const route = express.Router()

route.post('/todos', addTodo)
route.get('/todos', getAllTodos)
route.get('/todos/:id', toggleTodoDone)
route.put('/todos/:id', updataTodo)
route.delete('/todos/:id', deleteTodo)

module.exports = route