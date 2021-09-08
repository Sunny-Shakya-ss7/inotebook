import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Sunny",
    class: "5",
  };

  const [state, setstate] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "Harry",
        class: "10",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
