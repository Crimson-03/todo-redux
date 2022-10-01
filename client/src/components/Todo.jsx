import React, { useState } from 'react'
import { Card, Form, Icon, Input } from 'semantic-ui-react'
import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.data)

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        setEditing(prevState => !prevState)

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <Card
            fluid
            color={todo.done ? 'green' : 'red'}
            style={{
                textDecoration: todo.done ? 'line-through' : ''
            }}
        >
            <Card.Content
                header={todo.data}
                onClick={() => dispatch(toggleTodo(todo._id))}
                style={{
                    cursor: 'pointer',
                    display: editing ? 'none' : ''
                }}
            />

            <Form
                style={{
                    display: editing ? 'inline' : 'none'
                }}
                onSubmit={onFormSubmit}
            >
                <Form.Field>
                    <Input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            border: 'none',
                            borderBottom: '1px solid black'
                        }}
                    />
                </Form.Field>
            </Form>

            <Card.Content extra>
                <Icon
                    name='trash'
                    onClick={() => dispatch(deleteTodo(todo._id))}
                    style={{ cursor: 'pointer' }}
                />
                <Icon
                    name='edit'
                    onClick={() => setEditing(prevState => !prevState)}
                    style={{ cursor: 'pointer' }}
                />
            </Card.Content>
        </Card>
    )
}

export default Todo