import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productTypesListRequest: ["id"],
  productTypesListSuccess: ["data"]
});

export const ProductTypesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: []
});

/* Reducers */
export const productTypesListRequestReducer = state => {
  return state.merge({ loading: true });
};
export const productTypesListSuccessReducer = (state, { data }) =>
  state.merge({ loading: false, data });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_TYPES_LIST_REQUEST]: productTypesListRequestReducer,
  [Types.PRODUCT_TYPES_LIST_SUCCESS]: productTypesListSuccessReducer
});
