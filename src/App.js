import { useState } from "react";
import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import ImportantNotes from "./components/ImportantNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const toggleNote = (id) => {
    const newNotes = notes.slice();
    const index = newNotes.findIndex((note) => note.id === id);
    const note = newNotes[index];
    const newNote = {
      ...note,
      isImportant: !note.isImportant,
    };
    newNotes[index] = newNote;
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <CreateNotes />
      <hr />
      <ImportantNotes notes={notes} toggleNote={toggleNote} />
      <hr />
      <AllNotes toggleNote={toggleNote} />
    </div>
  );
}

export default App;
