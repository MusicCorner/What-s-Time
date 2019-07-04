import React from 'react';
import { APP_NAME } from '../../constants/common/common';
import Header from '../Header/Header';
import LocationFormContainer from '../../containers/LocationForm/LocationFormContainer';
import TimeContainer from '../../containers/Time/TimeContainer';
import styles from './MainComponent.css';

const MainComponent = () => {
	return (
		<div className={styles.mainContainer}>
			<Header
				title={APP_NAME}
			/>
			<div className={styles.contentMainContainer}>
				<LocationFormContainer />
				<TimeContainer />
			</div>
		</div>
	);
};

export default MainComponent;
