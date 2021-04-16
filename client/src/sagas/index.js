import { all, call } from 'redux-saga/effects';
import { watchConditions } from 'src/sagas/conditionsSaga';

export function* rootSaga() {
  yield all([
    call(watchConditions),
  ]);
}
