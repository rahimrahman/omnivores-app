import { takeLatest, put } from "redux-saga/effects";

function* fetchRemoteCounter(){
  try {
    const response = yield delayedResponse();
    yield put({ type: "remoteCounterResponse", response })
  } catch(e) {
    console.log(e);
  }
}

const delayedResponse = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve({
      counter: 10
    }), 2000);
  })
}

export function* watchFetchData() {
  yield takeLatest("remoteCounterRequest", fetchRemoteCounter)
}
