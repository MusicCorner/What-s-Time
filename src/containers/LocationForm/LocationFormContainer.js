import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationForm from '../../components/LocationForm/LocationForm';
import { fetchLocationsRequest, changeLocationSelectAction } from '../../actions/locations/locationsActions';
import { fetchTimeRequest } from '../../actions/time/time';

class TimeFormContainer extends React.Component {
	static propTypes = {
		changeLocationSelect: PropTypes.func.isRequired,
		locations: PropTypes.object.isRequired,
		getLocations: PropTypes.func.isRequired,
	}
	
	render() {
		const { changeLocationSelect, locations, getLocations } = this.props;

		return (
			<LocationForm
				onChangeSelect={changeLocationSelect}
				locations={locations}
				getLocations={getLocations}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	locations: state.mainState.locations,
});

const mapDispatchToProps = (dispatch) => ({
	getLocations: () => {
		dispatch(fetchLocationsRequest());
	},
	changeLocationSelect: (value) => {
		dispatch(changeLocationSelectAction(value));
		dispatch(fetchTimeRequest(value))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeFormContainer);
