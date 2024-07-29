import { TokenResponseModel } from "../features/auth/models/TokenResponseModel";
import { login, logout } from "../features/auth/state/slice/token";
import store from "../state/store/stores";




export function getPersistedToken(): TokenResponseModel | undefined {
  // If using Redux Persist:
  // const persistedState = await persistedStore.getState();
  // const token = persistedState?.auth?.token;

  // If not using Redux Persist:
  const state = store.getState(); // Assuming your store provides a way to access state
  return state?.token;
}

export function getExpirationTimeFromToken(token: string) {
  const payloadBase64Url = token.split('.')[1]; // Extract payload
  const payloadJson = atob(payloadBase64Url); // Decode payload
  const payloadObject = JSON.parse(payloadJson); // Parse payload
  return payloadObject.exp; // Access expiration time claim (exp)
}

export function isUserLoggedin(): boolean {
  const token = getPersistedToken();
  let isUserLogin = false;
  if (token) {
    let date = getExpirationTimeFromToken(token.token);
    isUserLogin = new Date(date * 1000) >= new Date();
  }
  return isUserLogin;
}

export function setLoginState(model: TokenResponseModel) {
  store.dispatch(login(model));
}

export function setLogout() {
  store.dispatch(logout(""))
  window.location.href = "/";
}