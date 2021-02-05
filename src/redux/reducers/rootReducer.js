import { combineReducers } from "redux";
// import bootCampSlice from "../slices/bootCampSlice";
import bootCampReducer from "./bootCampReducer";
import coursesReducer from "./coursesReducer";
import { studentsReducer } from "./studentsReducer";
import tutorReducer from "./tutorReducer";

// ============== redux ===============================
const rootReducer = combineReducers({
  bootCamps: bootCampReducer,
  students: studentsReducer,
  courses: coursesReducer,
  tutors: tutorReducer,
});

// ====================== redux slice ===========================
// const rootReducer = combineReducers({
//   bootCamps: bootCampSlice.reducer,
//   students: studentsReducer,
// });

export default rootReducer;
