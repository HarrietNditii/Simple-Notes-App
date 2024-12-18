import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState("");

    const handleAddNote = () => {
        if (noteText.trim()) {
            addNote(noteText);
            setNoteText("");
        }
    };

    return (
        <div className="add-note">
      <textarea
          rows="4"
          placeholder="Type your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    );
};

export default AddNote;
