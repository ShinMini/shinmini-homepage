import { watchGetToast } from './event-saga';

import { all, fork } from 'redux-saga/effects';

const rootSaga = function* () {
  yield all([
    fork(watchGetToast),
    // Other forks
  ]);
};

export default rootSaga;
