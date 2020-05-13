import React, { useReducer, useEffect } from "react";
import { FirebaseContext } from "./FirebaseContext";
import axios from "axios";
import {
  fireBaseReducer,
  ADD_NOTE,
  REMOVE_NOTE,
  GET_NOTES,
} from "./FirebaseReducer";

export default ({ children }) => {
  let initState = {
    notes: [],
  };

  const [state, dispath] = useReducer(fireBaseReducer, initState);
  console.log(state);
  // const notes = [
  //   { id: Date.now(), text: "hello", create: Date.now() },
  //   { id: Date.now(), text: "hello", create: Date.now() },
  // ];
  useEffect(() => {
    if (state.notes.length < 1) {
      getNotes();
    }
  });

  const addNote = async (text) => {
    const response = await axios.post(
      "https://react-firebase-45a71.firebaseio.com/data/notes.json",
      { ...text }
    );
    console.log(text, response.data.name);
    dispath({ type: ADD_NOTE, payload:{...text,id:response.data.name}});
  };

  const removeNote = async (id) => {
    const response = await axios.delete(
      `https://react-firebase-45a71.firebaseio.com/data/notes/${id}.json`,
    );

    // console.log(text, response.data.name);
    dispath({
      type: REMOVE_NOTE,
      payload: id
    });
  };

  const getNotes = async () => {
    const response = await axios.get(
      "https://react-firebase-45a71.firebaseio.com/data.json"
    );
    if (response.data && response.data.notes) {
          console.log(Object.keys(response.data.notes));
          const payload = Object.keys(response.data.notes).map((note) => ({
            ...response.data.notes[note],
            id: note,
          }));
          console.log(payload);
          dispath({ type: GET_NOTES, payload });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{ ...state, addNote, getNotes, removeNote }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
