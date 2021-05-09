import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import ImportantNotes from "./components/ImportantNotes";
import { getNotes } from "./redux/actions/notes.actions";

function App({ loading }) {
  // store.dispatch(getNotes());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className="container">
      <CreateNotes />
      <hr />
      <ImportantNotes />
      {loading && (
        <div className="text-center">
          <div
            className="spinner-grow text-primary spinner-border-sm "
            role="status"
          />
        </div>
      )}
      <hr />
      <AllNotes />
      {loading && (
        <div className="text-center">
          <div
            className="spinner-border text-primary spinner-border-sm"
            role="status"
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.notesReducer.loading,
});
export default connect(mapStateToProps)(App);
