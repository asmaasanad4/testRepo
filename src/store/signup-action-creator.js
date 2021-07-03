import { SIGNUP_FAILED, SIGNUP_SUCCESS, TRY_SIGNUP } from "./signup-actions";

export const trySignup = (name, email, password) => {
  return {
    type: TRY_SIGNUP,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signupfaild = () => {
  return {
    type: SIGNUP_FAILED,
  };
};
