import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDo({ toDos, removeToDo, updateToDo, setEdit }) {
    return toDos.map((toDo) => (
        <div key={toDo.id} className="toDo-row">
            <p>{toDo.text}</p>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeToDo(toDo.id)}
                    className="delete-icon"
                />
                <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} />
            </div>
        </div>
    ));
}

export default ToDo;
