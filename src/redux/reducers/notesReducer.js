import { notesActionTypes } from "../action-Types/actionTypes";

const initialState = {
  notes: [],
};

const notesReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case notesActionTypes.ADD_NOTE:
      return {
        ...prevState,
        notes: [...prevState.notes, payload],
      };

    case notesActionTypes.TOGGLE_NOTE:
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

    case notesActionTypes.GET_NOTES:
      return {
        ...prevState,
        notes: payload,
      };

    default:
      return prevState;
  }
};

export default notesReducer;
