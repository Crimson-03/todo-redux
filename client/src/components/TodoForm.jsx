import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { Form, Input } from 'semantic-ui-react'


const TodoForm = () => {

    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addNewTodo(text))

        setText("")
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <Input
                    type="text"
                    placeholder='Enter New Todo'
                    onChange={onInputChange}
                    value={text}
                    style={{
                        padding: '5px 0',
                    }}
                />
            </Form.Field>
        </Form>
    )
}

export default TodoForm