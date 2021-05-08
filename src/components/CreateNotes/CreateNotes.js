import React, { useState } from "react";
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

export default CreateNotes;
