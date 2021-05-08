export const createNote = (data) => (dispatch) =>
  dispatch({ type: "ADD_NOTE", payload: data });
