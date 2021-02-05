import { ADDNEWCOURSE, GETCOURSES } from "../constants/coursesConstants";

const initialState = {
  coursesItems: [],
};

const coursesReducer = (
  state = { ...initialState },
  { type, payload = {} }
) => {
  switch (type) {
    case ADDNEWCOURSE:
      return {
        ...state,
        coursesItems: [...state.coursesItems, payload],
      };

    case GETCOURSES:
      return {
        ...state,
        coursesItems: payload,
      };

    default:
      return state;
  }
};

export default coursesReducer;
