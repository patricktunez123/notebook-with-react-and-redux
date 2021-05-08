import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import notesReducer from "./reducers/notesReducer";

//we may need many middlewares that's why we need to use arry.
// here this thunk will help the action creator functions to run functions inside 'em
const middleware = [thunk];

const store = createStore(
  notesReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
