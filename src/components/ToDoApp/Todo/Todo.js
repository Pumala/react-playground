import React, { useState } from 'react';
import './Todo.scss';

const Todo = ({todo, updateTodo, deleteTodo}) => {

    const [updatedTodo, setUpdatedTodo] = useState(todo);

    const setEditModeHandler = () => {
        setUpdatedTodo({
            ...updatedTodo,
            isEditMode: true
        });
    }

    const onTodoChangeHandler = (e) => {
        e.persist();

        const editedTodo = e.target.value;

        setUpdatedTodo({
            ...updatedTodo,
            editedName: editedTodo
        });
    }

    const saveUpdatedTodo = (e) => {

        e.persist();

        updateTodo(updatedTodo);

        setUpdatedTodo({
            ...updatedTodo,
            name: updatedTodo.editedName,
            editedName: updatedTodo.editedName,
            isEditMode: false
        });

    };

    const cancelEditMode = (e) => {
        setUpdatedTodo({
            ...updatedTodo,
            editedName: updatedTodo.name, 
            isEditMode: false
        });
    };

    return (
        <li className="todoItem">
            {
                
                !updatedTodo.isEditMode && 
                <p
                    onClick={() => setEditModeHandler()}
                >{updatedTodo.name}</p>
            }
            {
                updatedTodo.isEditMode && 
                    <input 
                        value={updatedTodo.editedName}
                        type="text"
                        onChange={(e) => onTodoChangeHandler(e)}
                    />
            }
            
            <div className="button-wrapper">
                {
                    updatedTodo.isEditMode &&
                    <button
                        className="save todo-button"
                        onClick={(e) => saveUpdatedTodo(e)}
                        disabled={updatedTodo.editedName.length < 3}
                    >Save</button>
                }
                {
                    updatedTodo.isEditMode && <button
                        className="cancel todo-button"
                        onClick={(e) => cancelEditMode(e)}
                    >Cancel</button>
                }
                <button
                    className="delete todo-button"
                    onClick={(e) => deleteTodo(updatedTodo.id)}
                >Delete</button>
            </div>
        </li>
    );
};

export default Todo;