import { TIME_ACTIONS } from "../../constants/actions/time";

export const fetchTimeRequest = (payload) => ({
	type: TIME_ACTIONS.FETCH_TIME_REQUEST,
	payload,
});

export const fetchTimeSuccess = (payload) => ({
	type: TIME_ACTIONS.FETCH_TIME_SUCCESS,
	payload
});
