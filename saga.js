import { all } from 'redux-saga/effects';

import homeSagas from './redux/home/saga';

function* rootSaga() {
  yield all([
    ...homeSagas,
  ]);
}

export default rootSaga;
