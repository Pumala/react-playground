import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import './ToDoList.scss';
import Todos from '../Todos/Todos';
import AddFunctionality from '../AddFunctionality/AddFunctionality';

const ToDoList = () => {

    const title = 'To Do App';

    const initialTodoState = [
        {
            id: uuid(),
            name: 'walk the dog',
            editMode: false,
            editedName: 'walk the dog'
        }
    ];

    const [toBeCreatedTodo, setToBeCreatedTodo ] = useState("");

    const [todos, setTodos] = useState(initialTodoState);

    const toBeCreatedTodoChangesHandler = (e) => {
        e.persist();

        const currentNewTodo = e.target.value;

        setToBeCreatedTodo(currentNewTodo);
    }

    const addTodo = (e) => {

        e.persist();

        setTodos(currentTodos => {
            const todos = [
                ...currentTodos, {
                    id: uuid(),
                    name: toBeCreatedTodo,
                    editMode: false,
                    editedName: toBeCreatedTodo
                }
            ];
            return todos;
        });
        
        // clear field
        setToBeCreatedTodo('');

    };

    const updateTodo = (updatedTodo) => {

        setTodos(todos => {
            const updatedTodos = todos.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return {
                        ...todo,
                        updatedTodo
                    }
                } else {
                    return todo;
                }
            });
            return updatedTodos;
        });
    };

    const deleteTodo = (id) => {

        setTodos(todos => {
            const updatedTodos = todos.filter(todo => {
                if (todo.id !== id) {
                    return todo;
                };
            });
            return updatedTodos;
        });
    };

    return (
        <section className="to-do-list-app">
            <div className="content">
            <h1>{title}</h1>
            <AddFunctionality 
                toBeCreatedTodo={toBeCreatedTodo}
                addTodo={addTodo}
                toBeCreatedTodoChangesHandler={toBeCreatedTodoChangesHandler}
            />
            <Todos 
                todos={todos}
                updateTodo={updateTodo}    
                deleteTodo={deleteTodo}
            />        
            </div>    
        </section>
    )
};

export default ToDoList;