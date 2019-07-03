import { LOCATIONS_URL, TIME_URL } from "../constants/urls/urls";

export const MainApi = {
	fetchLocations: () => (
		fetch(LOCATIONS_URL).then(response => response.json())
			.then(data => data)
			.catch(e => e)
	),
	fetchTime: (location) => (
		fetch(TIME_URL(location)).then(response => response.json())
			.then(data => data)
			.catch(e => e)
	)
};
