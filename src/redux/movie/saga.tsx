import { all, fork, put, select, takeEvery } from "redux-saga/effects";
import actions, { MovieActions } from "./actions";

function* saga_loadMovie() {}
function* listen() {
  yield takeEvery(actions.types.LOAD_MOVIE, saga_loadMovie);
}
export default function* mainSaga() {
  yield all([fork(listen)]);
}
