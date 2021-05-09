import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote } from "../../redux/actions/notes.actions";

const ImportantNotes = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleNote());
  }, [dispatch]);

  return (
    <div className="importantNotes">
      <h5>Important notes</h5>
      <div className="row">
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <div key={note.id} className="col-md-3 col-lg-3 col-sm-1">
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

// const mapStateToProps = (state) => ({
//   notes: state.notesReducer.notes,
// });
// export default connect(mapStateToProps, { toggleNote })(ImportantNotes);

export default ImportantNotes;
