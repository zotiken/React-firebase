import React, { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

export default () => {
  var now = new Date();

  const { removeNote, ...state } = useContext(FirebaseContext);
  let notes;
  if (!state.notes) {
    notes = [{ id: Date.now(), text: "hello", create: Date.now() }];
  } else {
    notes = state.notes;
  }
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li
          className="list-group-item d-inline-flex justify-content-between"
          key={note.id}
        >
          <span>note: {note.text}</span>

          <span>create: {note.create}</span>
          <button
            type="button btn-sm"
            className="btn btn-danger"
            style={{ color: "#fff" }}
            onClick={()=> removeNote(note.id)}
          >
            &#10006;
          </button>
        </li>
      ))}
    </ul>
  );
};
