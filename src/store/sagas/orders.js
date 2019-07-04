import { call, put, select } from "redux-saga/effects";
import { ToastActionsCreators } from "react-native-redux-toast";
import OrdersActions from "~/store/ducks/orders";
import api from "~/services/api";

export function* listOrders() {
  try {
    console.tron.log("Entrou aqui.");
    const { data } = yield call(api.get, "user/orders");
    console.tron.log(data);
    yield put(OrdersActions.ordersListSuccess(data));
  } catch (err) {
    ToastActionsCreators.displayError(`Erro ao buscar os pedidos. ${err}`);
  }
}
