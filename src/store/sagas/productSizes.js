import { call, put, select } from "redux-saga/effects";
import { ToastActions } from "react-native-redux-toast";
import ProductSizesActions from "~/store/ducks/productSizes";
import api from "~/services/api";

export function* listProductSizes({ id }) {
  try {
    const { data } = yield call(api.get, `productsize/${id}`);
    yield put(ProductSizesActions.productSizesListSuccess(data));
  } catch (err) {
    yield put(
      ToastActions.DISPLAY_ERROR(
        `Erro ao buscar os tamanhos dos produtos. ${err}`
      )
    );
  }
}
