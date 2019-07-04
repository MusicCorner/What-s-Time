import { connect } from 'react-redux';
import LocationForm from '../../components/LocationForm/LocationForm';
import { fetchLocationsRequest, changeLocationSelectAction } from '../../actions/locations/locationsActions';
import { fetchTimeRequest } from '../../actions/time/time';

const mapStateToProps = (state) => ({
	locations: state.mainState.locations,
});

const mapDispatchToProps = {
	getLocations: () => fetchLocationsRequest,
	onChangeSelect: (value) => changeLocationSelectAction(value),
	getTimeByLocation: (location) => fetchTimeRequest(location),
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
