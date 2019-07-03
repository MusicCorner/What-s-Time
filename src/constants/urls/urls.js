const MAIN_URL = 'http://worldtimeapi.org/api';
export const LOCATIONS_URL = `${MAIN_URL}/timezones`;
export const TIME_URL = (location) => `${MAIN_URL}/timezone/${location}`;
