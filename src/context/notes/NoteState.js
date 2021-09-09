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

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
