import React, { useState } from "react";
import { connect } from "react-redux";
import { createNote } from "../../redux/actions/notes.actions";
import "./_createNotes.scss";

const CreateNotes = ({ createNote }) => {
  const [note, setNote] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 10000000),
      note,
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };

    // store.dispatch({ type: "ADD_NOTE", payload: data });
    createNote(data);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <textarea
        name=""
        cols="3"
        className="form-control"
        onChange={(event) => setNote(event.target.value)}
      />
      <button className="btn">Add note</button>
    </form>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createNote: (data) =>
//       dispatch({
//         type: "ADD_NOTE",
//         payload: data,
//       }),
//   };
// };

// now let's move this function to a separate file
// const createNote = (data) => (dispatch) =>
//   dispatch({ type: "ADD_NOTE", payload: data });

// if we do not want to read any data from store we pass only null. (here we only need to update store)
export default connect(null, { createNote })(CreateNotes);
