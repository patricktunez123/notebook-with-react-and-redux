import React from "react";
import { connect } from "react-redux";
import { toggleNote } from "../../redux/actions/notes.actions";

const SingleNote = ({ notes, toggleNote, loading }) => {
  return (
    <div className="row">
      {notes.map((note) => (
        <div key={note.id} className="col-md-3 col-lg-3 col-sm-1 col-xs-1">
          <div className="card mb-3">
            <div className="card-header">{note.date}</div>
            <div className="card-body">{note.note}</div>
            {loading ? (
              <button className="btn">Loading...</button>
            ) : (
              <button onClick={() => toggleNote(note.id)} className="btn">
                {note.isImportant
                  ? "Remove from important"
                  : "Add to important"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
  loading: state.notesReducer.loading,
});

export default connect(mapStateToProps, { toggleNote })(SingleNote);
