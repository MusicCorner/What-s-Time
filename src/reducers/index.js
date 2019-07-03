import { combineReducers } from 'redux';
import commonReducer from './common/common';
import mainReducer from './main/mainReducer';

const reducers = combineReducers({
	common: commonReducer,
	mainState: mainReducer,
});

export default reducers;
