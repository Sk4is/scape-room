import React, { useState, useEffect } from "react";

function ToDoForm({ onSubmit, edit }) {
    const [input, setInput] = useState(edit ? edit.value : "");

    useEffect(() => {
        if (edit) {
            setInput(edit.value);
        }
    }, [edit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit && edit.id) {
            onSubmit({ id: edit.id, text: input });
        } else {
            onSubmit({ id: Math.floor(Math.random() * 10000), text: input });
        }
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="toDo-form" onSubmit={handleSubmit}>
            {edit && edit.id ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        name="text"
                        className="toDo-input edit"
                        onChange={handleChange}
                    />
                    <button className="toDo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a to do"
                        value={input}
                        name="text"
                        className="toDo-input"
                        onChange={handleChange}
                    />
                    <button className="toDo-button">Add something to do</button>
                </>
            )}
        </form>
    );
}

export default ToDoForm;
