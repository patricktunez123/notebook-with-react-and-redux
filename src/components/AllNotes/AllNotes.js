import React from "react";
import SingleNote from "../SingleNote";
import "./_allNotes.scss";

const AllNotes = () => {
  return (
    <div className="note__container--all">
      <h5>All notes</h5>
      <SingleNote />
    </div>
  );
};

export default AllNotes;
