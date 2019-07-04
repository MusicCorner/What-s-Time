import React from 'react';
import PropTypes from 'prop-types';
import { SELECT_TIMEZONE } from '../../constants/common/common';
import LocationSelect from './LocationSelect/LocationSelect';
import styles from './LocationForm.css';
import Loader from '../common/Loader/Loader';

export default class TimeForm extends React.Component {
	static propTypes = {
		onChangeSelect: PropTypes.func.isRequired,
		getTimeByLocation: PropTypes.func.isRequired,
		locations: PropTypes.object.isRequired,
		getLocations: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			select: {
				isToggled: false,
			},
		};
	}

	componentDidMount() {
		const { getLocations } = this.props;
		getLocations();
	}

	toggleTimeZoneSelect = () => {
		const { select } = this.state;

		this.setState({
			...this.state,
			select: {
				...select,
				isToggled: !select.isToggled,
			},
		});
	}

	getTimeBySelectChange = (location) => {
		const { onChangeSelect, getTimeByLocation } = this.props;
		onChangeSelect(location);
		getTimeByLocation(location);
	}

	render() {
		const { locations } = this.props;
		const { select } = this.state;
		const isSelectToggled = select.isToggled;


		if (locations.isPending) {
			return (
				<Loader />
			);
		}

		return (
			<form className={styles.locationFormContainer}>
				<div className={styles.title} onClick={this.toggleTimeZoneSelect}>
					{SELECT_TIMEZONE}
				</div>
				{isSelectToggled && (
					<LocationSelect
						onChangeSelect={this.getTimeBySelectChange}
						locations={locations}
					/>
				)}
			</form>
		);
	}
}
