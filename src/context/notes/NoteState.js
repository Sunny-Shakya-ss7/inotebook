import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNzM1YjhkODE5MDEwOTJlYmYzZWI0In0sImlhdCI6MTYzMTA4ODk0OH0.aWo8bxC_ItgclRx-iw6bNliR1yclZsC5k9a0DLyWVX8",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNzM1YjhkODE5MDEwOTJlYmYzZWI0In0sImlhdCI6MTYzMTA4ODk0OH0.aWo8bxC_ItgclRx-iw6bNliR1yclZsC5k9a0DLyWVX8",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

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
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNzM1YjhkODE5MDEwOTJlYmYzZWI0In0sImlhdCI6MTYzMTA4ODk0OH0.aWo8bxC_ItgclRx-iw6bNliR1yclZsC5k9a0DLyWVX8",
      },
    });

    const json = await response.json();
    console.log(json);

    console.log("Deleting the note with id: " + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNote);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNzM1YjhkODE5MDEwOTJlYmYzZWI0In0sImlhdCI6MTYzMTA4ODk0OH0.aWo8bxC_ItgclRx-iw6bNliR1yclZsC5k9a0DLyWVX8",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    // Login to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
