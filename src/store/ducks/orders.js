import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  ordersListRequest: null,
  ordersListSuccess: ["data"]
});

export const OrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: []
});

/* Reducers */
export const ordersListRequestReducer = state => {
  return state.merge({ loading: true });
};

export const ordersListSuccessReducer = (state, { data }) =>
  state.merge({ loading: false, data });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ORDERS_LIST_REQUEST]: ordersListRequestReducer,
  [Types.ORDERS_LIST_SUCCESS]: ordersListSuccessReducer
});
