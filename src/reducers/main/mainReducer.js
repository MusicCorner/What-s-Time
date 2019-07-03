import { LOCATION_ACTIONS } from "../../constants/actions/location";
import { TIME_ACTIONS } from "../../constants/actions/time";

const initialState = {
	time: {
		value: null,
		isPending: false,
	},
	locations: {
		current: null,
		items: [],
		isPending: false,
	}
}

const timeFormReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case LOCATION_ACTIONS.FETCH_LOCATIONS_REQUEST:
			return Object.assign({}, state, {
				locations: {
					...state.locations,
					isPending: true,
				}
			});

		case LOCATION_ACTIONS.FETCH_LOCATIONS_SUCCESS:
			return Object.assign({}, state, {
				locations: {
					...state.locations,
					isPending: false,
					items: payload,
				}
			});

		case LOCATION_ACTIONS.CHANGE_LOCATION_SELECT:
			return Object.assign({}, state, {
				locations: {
					...state.locations,
					current: payload,
				}
			});

		case TIME_ACTIONS.FETCH_TIME_REQUEST:
			return Object.assign({}, state, {
				time: {
					...state.time,
					isPending: true,
				}
			});

		case TIME_ACTIONS.FETCH_TIME_SUCCESS:
			return Object.assign({}, state, {
				time: {
					...state.time,
					isPending: false,
					value: payload,
				}
			});
	
		default:
			return state;
	}
};

export default timeFormReducer;
