import { CLEAR_USER, SET_PHOTO_URL, SET_USER } from "./types";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}
export function setPhtoURL(photoURL) {
  return {
    type: SET_PHOTO_URL,
    payload: photoURL,
  };
}
