import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, addNote, deleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note key={note.id} id={note.id} text={note.text} deleteNote={deleteNote} />
            ))}
            <AddNote addNote={addNote} />
        </div>
    );
};

export default NotesList;