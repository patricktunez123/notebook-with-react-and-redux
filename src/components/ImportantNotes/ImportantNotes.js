import React from "react";

const ImportantNotes = ({ notes, toggleNote }) => {
  return (
    <div className="importantNotes">
      <h5>Important notes</h5>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <div className="col-md-3 col-lg-3 col-sm-1">
              <div className="card">
                <div className="card-header">{note.date}</div>
                <div className="card-body">{note.note}</div>
                <button onClick={() => toggleNote(note.id)} className="btn">
                  {note.isImportant
                    ? "Remove from important"
                    : "Add to important"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImportantNotes;
