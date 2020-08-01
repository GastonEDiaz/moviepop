import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReduce";

const inititalState = {};

const store = (() => {
  return createStore(
    rootReducer,
    inititalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      )
  );
})();

export default store;
