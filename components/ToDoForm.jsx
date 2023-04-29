import React, { useState } from 'react';

export default function ToDoForm({ addToDo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addToDo({
            text: value,
            completed: false
        });
        setValue('');
    };

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={value}
                placeholder="Add Todo..."
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
            >
                Add
            </button>
        </form>
    );
}