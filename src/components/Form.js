import React, { useState, useContext } from "react";
import AlertContext from "../context/alertContext";
import { FirebaseContext } from "../context/FirebaseContext";
// import { ADD_NOTE } from "../context/FirebaseReducer";


export default () => {
  const { hide, show, alert } = useContext(AlertContext);
    const { addNote, getNotes, ...data } = useContext(FirebaseContext);

  const [value, setValue] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addNote({ value, create: Date.now() });
      // getNotes();
      console.log(value);
      show('primary');
      setValue("");
    } else {
      show("warning");
    }
  };
  return (
    <form onSubmit={Submit}>
      <div className="form-group">
        <label for="exampleFormControlInput1">Note:</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ввведите текст:"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
