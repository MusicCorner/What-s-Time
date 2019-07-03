import React from 'react';
import PropTypes from 'prop-types';
import { SELECT_TIMEZONE } from '../../constants/common/common';
import LocationSelect from './LocationSelect/LocationSelect';
import './LocationForm.css';

export default class TimeForm extends React.Component {
	static propTypes = {
		onChangeSelect: PropTypes.func.isRequired,
		locations: PropTypes.object.isRequired,
		getLocations: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			select: {
				isToggled: false,
			}
		}
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
			}
		});
	}

	render() {
		const { onChangeSelect, locations } = this.props;
		const { select } = this.state;
		const isSelectToggled = select.isToggled;

		return (
			<form className="location-form__container">
				<div className="title" onClick={this.toggleTimeZoneSelect}>
					{SELECT_TIMEZONE}
				</div>
				{isSelectToggled && (
					<LocationSelect
						onChangeSelect={onChangeSelect}
						locations={locations}
					/>
				)}
			</form>
		)
	}
}
