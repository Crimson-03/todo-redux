import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Divider } from 'semantic-ui-react'
import { getAllTodos } from '../redux/actions/index'
import Todo from './Todo'

const Todos = () => {

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])



    return (
        <Container>
            <Divider />
            <Card.Group>
                {
                    todos.map(todo => (
                        <Todo
                            todo={todo}
                            key={todo._id}
                        />
                    ))
                }
            </Card.Group>
        </Container>
    )
}

export default Todos
