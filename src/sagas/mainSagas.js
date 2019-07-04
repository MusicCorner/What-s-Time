import { call, put, takeEvery } from 'redux-saga/effects';
import { MainApi } from '../api/MainApi';
import { fetchLocationsSuccess } from '../actions/locations/locationsActions';
import { LOCATION_ACTIONS } from '../constants/actions/location';
import { defaultErrorAction } from '../actions/common/defaultErrorAction';
import { fetchTimeSuccess } from '../actions/time/time';
import { TIME_ACTIONS } from '../constants/actions/time';

function* fetchLocations() {
	try {
		const locations = yield call(MainApi.fetchLocations);
		yield put(fetchLocationsSuccess(locations));
	} catch (error) {
		yield put(defaultErrorAction(error));
	}
}

function* fetchTime(action) {
	try {
		const time = yield call(MainApi.fetchTime, action.payload);
		yield put(fetchTimeSuccess(time));
	} catch (error) {
		yield put(defaultErrorAction(error));
	}
}

function* mainSagas() {
	yield takeEvery(LOCATION_ACTIONS.FETCH_LOCATIONS_REQUEST, fetchLocations);
	yield takeEvery(TIME_ACTIONS.FETCH_TIME_REQUEST, fetchTime);
}

export default mainSagas;
