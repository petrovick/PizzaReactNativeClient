import { call, put, select } from "redux-saga/effects";
import { ToastActionsCreators } from "react-native-redux-toast";
import ProductsActions from "~/store/ducks/products";
import api from "~/services/api";
import { navigate } from "~/services/navigation";

export function* commitCheckoutOrder({ checkout }) {
  try {
    const { data } = yield call(api.post, "order", checkout);
    ToastActionsCreators.displayError(`Pedido gerado com sucesso.`);
    navigate("Orders");
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(`Erro ao buscar os produtos. ${err}`)
    );
  }
}
