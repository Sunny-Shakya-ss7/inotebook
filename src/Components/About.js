import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

export const About = () => {
  const a = useContext(noteContext);

  useEffect(() => {
    a.update();
  });

  return (
    <div>
      This is about {a.state.name} and he is in {a.state.class}
    </div>
  );
};
