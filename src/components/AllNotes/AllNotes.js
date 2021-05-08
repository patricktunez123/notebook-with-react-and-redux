import React from "react";
import SingleNote from "../SingleNote";
import "./_allNotes.scss";

const AllNotes = ({ notes, toggleNote }) => {
  return (
    <div className="note__container--all">
      <h5>All notes</h5>
      <SingleNote notes={notes} toggleNote={toggleNote} />
    </div>
  );
};

export default AllNotes;
