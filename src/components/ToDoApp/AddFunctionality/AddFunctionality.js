import React from 'react';
import './AddFunctionality.scss';

const AddFunctionality = ({toBeCreatedTodo, addTodo, toBeCreatedTodoChangesHandler}) => {
    return (
        <div className="add-functionality">
            <input
                onChange={(e) => toBeCreatedTodoChangesHandler(e)}
                type="text"
                value={toBeCreatedTodo}
                minLength="3"
                maxLength="30"
            />
            <button
                onClick={(e) => addTodo(e)}
                disabled={toBeCreatedTodo.length < 3}
            >Add</button>
        </div>
    );
};

export default AddFunctionality;