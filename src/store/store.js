import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";
import signupReducer from "./signup-reducer";

const rootReducer = combineReducers({
  authReducer: reducer,
  signupReducer: signupReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default Store;
