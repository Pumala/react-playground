import React from 'react';
import './Todos.scss';
import Todo from '../Todo/Todo';

const Todos = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <ul>
        {
            todos && todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))
        }
    </ul>
    );
};

export default Todos;