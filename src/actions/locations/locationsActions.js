import { LOCATION_ACTIONS } from "../../constants/actions/location";

export const fetchLocationsRequest = () => ({
	type: LOCATION_ACTIONS.FETCH_LOCATIONS_REQUEST
});

export const fetchLocationsSuccess = (payload) => ({
	type: LOCATION_ACTIONS.FETCH_LOCATIONS_SUCCESS,
	payload,
});

export const changeLocationSelectAction = (payload) => ({
	type: LOCATION_ACTIONS.CHANGE_LOCATION_SELECT,
	payload,
});
