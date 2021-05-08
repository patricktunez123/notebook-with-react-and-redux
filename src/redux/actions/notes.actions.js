import { notesActionTypes } from "../action-Types/actionTypes";

export const createNote = (data) => async (dispatch) =>
  dispatch({
    type: notesActionTypes.ADD_NOTE,
    payload: data,
  });

export const toggleNote = (id) => async (dispatch) =>
  dispatch({
    type: notesActionTypes.TOGGLE_NOTE,
    payload: id,
  });
