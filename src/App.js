import AllNotes from "./components/AllNotes";
import CreateNotes from "./components/CreateNotes";
import ImportantNotes from "./components/ImportantNotes";

function App() {
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
