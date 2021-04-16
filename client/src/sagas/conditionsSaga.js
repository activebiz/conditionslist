import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getConditionsSuccess,
  getConditionsFailed,
} from 'src/actions/conditionsActions';
import {
  getConditions,
} from 'src/services/conditionlistService';
import {
    GET_CONDITIONS,
} from 'src/constants/conditionConstants';

function* fetchConditions() {
  try {
    const data = yield call(() => getConditions());
    yield put(getConditionsSuccess(data));
  } catch (error) {
    yield put(getConditionsFailed());
  }
}

export function* watchConditions() {
  yield takeLatest(GET_CONDITIONS, fetchConditions);
}
