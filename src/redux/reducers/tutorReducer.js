import {
  ADDNEWTUTOR,
  DELETETUTOR,
  GETTUTORS,
  SETERROR,
  SETLOADING,
} from "../constants/tutorConstants";

const initialState = {
  tutorItems: [],
  isLoading: false,
  error: "",
};
const tutorReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ADDNEWTUTOR:
      return { ...state, tutorItems: [...state.tutorItems, payload] };
    case GETTUTORS:
      return { ...state, tutorItems: [...payload] };
    case SETLOADING:
      return { ...state, isLoading: !state.isLoading };
    case SETERROR:
      return { ...state, error: payload };
    case DELETETUTOR:
      return {
        ...state,
        tutorItems: [
          ...state.tutorItems.filter((tutor) => tutor.id !== payload),
        ],
      };

    default:
      return state;
  }
};

export default tutorReducer;
