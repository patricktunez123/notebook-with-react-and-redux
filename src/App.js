import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import ImportantNotes from "./components/ImportantNotes";
import { getNotes } from "./redux/actions/notes.actions";

function App() {
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
      <hr />
      <AllNotes />
    </div>
  );
}

export default App;
