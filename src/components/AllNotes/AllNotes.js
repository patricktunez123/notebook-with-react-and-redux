import React from "react";
import SingleNote from "../SingleNote";
import "./_allNotes.scss";

const AllNotes = ({ toggleNote }) => {
  return (
    <div className="note__container--all">
      <h5>All notes</h5>
      <SingleNote toggleNote={toggleNote} />
    </div>
  );
};

export default AllNotes;
