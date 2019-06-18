import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],

  signUpRequest: ["name", "email", "password"],
  signUpSuccess: ["token"]
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  signedIn: false,
  token: null
});

/* Reducers */
export const signRequestReducer = state => {
  return state.merge({ loading: true });
};
export const signSuccessReducer = (state, { token }) =>
  state.merge({ loading: false, token });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signRequestReducer,
  [Types.SIGN_IN_SUCCESS]: signSuccessReducer,

  [Types.SIGN_UP_REQUEST]: signRequestReducer,
  [Types.SIGN_UP_SUCCESS]: signSuccessReducer
});
