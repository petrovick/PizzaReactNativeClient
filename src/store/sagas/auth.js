import { call, put, select } from "redux-saga/effects";
import { ToastActionsCreators } from "react-native-redux-toast";
import AuthActions from "~/store/ducks/auth";
import api from "~/services/api";
import { AsyncStorage } from "react-native";
import { navigate } from "~/services/navigation";

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, "user/signin", {
      email,
      password
    });

    yield put(AuthActions.signInSuccess(data.token));
    navigate("Products");
  } catch (err) {
    yield put(ToastActionsCreators.displayError(`Erro ao fazer login. ${err}`));
  }
}

export function* signUp({ name, email, password }) {
  try {
    const { data } = yield call(api.post, "users", {
      name,
      email,
      password
    });
    navigate("Login");
  } catch (err) {
    yield put(ToastActionsCreators.displayError(`Erro ao fazer login. ${err}`));
  }
}
