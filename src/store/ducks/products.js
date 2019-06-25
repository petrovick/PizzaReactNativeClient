import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productsListRequest: null,
  productsListSuccess: ["data"]
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: []
});

/* Reducers */
export const productsListRequestReducer = state => {
  return state.merge({ loading: true });
};
export const productsListSuccessReducer = (state, { data }) =>
  state.merge({ loading: false, data: data.products });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_LIST_REQUEST]: productsListRequestReducer,
  [Types.PRODUCTS_LIST_SUCCESS]: productsListSuccessReducer
});
