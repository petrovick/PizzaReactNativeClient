import { call, put, select } from "redux-saga/effects";
import { ToastActions } from "react-native-redux-toast";
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
    yield put(ToastActions.DISPLAY_ERROR(`Erro ao fazer login. ${err}`));
  }
}

export function* signUp({ name, email, password }) {
  try {
    yield put(AuthActions.signInSuccess("CUSTOMTOKENPET"));
    navigate("SignUp");
  } catch (err) {
    yield put(ToastActions.DISPLAY_ERROR(`Erro ao fazer login. ${err}`));
  }
}
