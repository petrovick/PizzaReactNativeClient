import { call, put, select } from "redux-saga/effects";
import { ToastActions } from "react-native-redux-toast";
import ProductTypesActions from "~/store/ducks/productTypes";
import api from "~/services/api";

export function* listProductTypes({ id }) {
  try {
    console.tron.error(id);
    const { data } = yield call(api.get, `producttype/${id}`);
    yield put(ProductTypesActions.productTypesListSuccess(data));
  } catch (err) {
    yield put(
      ToastActions.DISPLAY_ERROR(`Erro ao buscar os produto types. ${err}`)
    );
  }
}
