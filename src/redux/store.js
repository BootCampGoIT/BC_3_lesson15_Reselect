// ========================== redux ===============================
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
// import { v4 as uuidv4 } from "uuid";
// import { ADDNEWTUTOR } from "./constants/tutorConstants";

// const setIdMiddleWare = (store) => (next) => (action) => {
//   if (action.needId) {
//     action.payload = { ...action.payload, id: uuidv4() };
//   }
//   next({ type: action.type, payload: action.payload });
// };

// const localStorageMiddleWare = (store) => (next) => (action) => {
//   const tutors = store.getState().tutors.tutorItems;
//   switch (action.type) {
//     case ADDNEWTUTOR:
//       localStorage.setItem(
//         "tutors",
//         JSON.stringify([...tutors, { ...action.payload }])
//       );
//       break;

//     default:
//       return next(action);
//   }
//   next(action);
// };

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.log(action);
//   console.groupEnd();
//   next(action);

// };

const middleWares = [
  thunk,
  //   setIdMiddleWare,
  //   localStorageMiddleWare,
  //   loggerMiddleware,
];

const enhancer = applyMiddleware(...middleWares);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

// // ======================== redux toolkit ==============================
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/rootReducer";

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
