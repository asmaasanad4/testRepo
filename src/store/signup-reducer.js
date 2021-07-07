import { SIGNUP_FAILED, SIGNUP_SUCCESS, TRY_SIGNUP } from "./signup-actions";

const initialState = {
  loading: false,
  signedup: false,
  name: "",
  email: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_SIGNUP:
      return {
        ...state,
        loading: true,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signedup: true,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        signedup: false,
      };
    default:
      return state;
  }
};

export default reducer;
