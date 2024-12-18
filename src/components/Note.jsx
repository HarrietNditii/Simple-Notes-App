import React from "react";

const Note = ({ id, text, deleteNote }) => {
    return (
        <div className="note">
            <p>{text}</p>
            <button onClick={() => deleteNote(id)}>Delete</button>
        </div>
    );
};

export default Note;