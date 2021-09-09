import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23155",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23154",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23153",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23152",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23151",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
    {
      user: "613735b8d81901092ebf3eb4",
      title: "My Title",
      description: "Wake up early",
      tag: "personal",
      _id: "6139b73218973a5272f23150",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note");
    const note = {
      user: "613735b8d81901092ebf3eb4",
      title: title,
      description: description,
      tag: tag,
      _id: "6139b73218973a5272f23160",
      date: "2021-09-09T07:26:42.258Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {};

  // Edit a note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
