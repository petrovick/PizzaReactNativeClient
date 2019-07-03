import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productSizesListRequest: ["id"],
  productSizesListSuccess: ["data"]
});

export const ProductSizesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: []
});

/* Reducers */
export const productSizesListRequestReducer = state => {
  return state.merge({ loading: true });
};
export const productSizesListSuccessReducer = (state, { data }) =>
  state.merge({ loading: false, data });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_SIZES_LIST_REQUEST]: productSizesListRequestReducer,
  [Types.PRODUCT_SIZES_LIST_SUCCESS]: productSizesListSuccessReducer
});
