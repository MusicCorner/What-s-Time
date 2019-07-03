import React from 'react';
import { APP_NAME } from '../constants/common/common';
import Header from './Header/Header';
import LocationFormContainer from '../containers/LocationForm/LocationFormContainer';
import TimeContainer from '../containers/Time/TimeContainer';
import './MainComponent.css';

const MainComponent = () => {
	return (
		<div className="main__container">
			<Header
				title={APP_NAME}
			/>
			<div className="content-main__container">
				<LocationFormContainer />
				<TimeContainer />
			</div>
		</div>
	)
}

export default MainComponent;
