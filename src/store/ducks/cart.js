import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addToCart: ["data"],
  sumToTotal: ["total"],
  removeFromCart: ["data"],

  commitCheckoutOrderRequest: ["checkout"],
  commitCheckoutOrderSuccess: null
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
  total: 0
});

/* Reducers */
export const addToCartReducer = (state, { data }) => {
  {
    const dataProducts = state.data;

    return state.merge({
      ...state,
      data: [...state.data, data]
    });
  }
};
export const sumToTotalReducer = (state, { total }) => {
  {
    return state.merge({ total });
  }
};
export const removeFromCartReducer = (state, { data }) => {
  {
    var stateMerged = state.merge({
      data: state.data.filter(element => element.id !== data.id),
      total: state.total - data.price
    });
    return stateMerged;
  }
};
/*export const commitCheckoutOrderRequestReducer = (state, { total }) => {
  {
    return state.merge({ total });
  }
};*/

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: addToCartReducer,
  [Types.SUM_TO_TOTAL]: sumToTotalReducer,
  [Types.REMOVE_FROM_CART]: removeFromCartReducer

  //[Types.COMMIT_CHECKOUT_ORDER_REQUEST]: commitCheckoutOrderRequestReducer
});
