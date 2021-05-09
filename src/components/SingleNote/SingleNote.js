import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote } from "../../redux/actions/notes.actions";

const SingleNote = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const loading = useSelector((state) => state.notesReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleNote);
  }, [dispatch]);

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

//let's now use hooks

// const mapStateToProps = (state) => ({
//   notes: state.notesReducer.notes,
//   loading: state.notesReducer.loading,
// });

// export default connect(mapStateToProps, { toggleNote })(SingleNote);

export default SingleNote;
