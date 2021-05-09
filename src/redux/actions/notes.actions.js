import { db } from "../../config/firebase.config";
import { notesActionTypes } from "../action-Types/actionTypes";

export const createNote = (data) => async (dispatch) => {
  try {
    await db.collection("notes").doc(data.id.toString()).set(data);
    dispatch({
      type: notesActionTypes.ADD_NOTE,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const toggleNote = (id) => async (dispatch) => {
  try {
    const snapshot = db.collection("notes").doc(id.toString());
    const data = (await snapshot.get()).data();
    await snapshot.update({
      isImportant: !data.isImportant,
    });

    dispatch({
      type: notesActionTypes.TOGGLE_NOTE,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    const snapshot = await db.collection("notes").get();
    const notes = snapshot.docs.map((doc) => doc.data());
    dispatch({
      type: notesActionTypes.GET_NOTES,
      payload: notes,
    });
  } catch (error) {
    console.log(error.message);
  }
};
