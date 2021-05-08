const initialState = {
  notes: [
    { note: "this is the note one", id: 1, date: 20 / 20 / 20 },
    { note: "this is the note two", id: 2, date: 20 / 20 / 20 },
  ],
};

const notesReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NOTE":
      return {
        ...prevState,
        notes: [...prevState.notes, payload],
      };
    case "TOGGLE_NOTE":
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex((note) => note.id === payload);
      const note = newNotes[index];
      const newNote = {
        ...note,
        isImportant: !note.isImportant,
      };
      newNotes[index] = newNote;
      return {
        ...prevState,
        notes: newNotes,
      };
    default:
      return prevState;
  }
};

export default notesReducer;
