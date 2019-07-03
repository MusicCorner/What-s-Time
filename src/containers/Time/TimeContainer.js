import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Time from '../../components/Time/Time';
import Loader from '../../components/common/Loader/Loader';

class TimeContainer extends React.Component {
	static propTypes = {
		time: PropTypes.object.isRequired
	}

	render() {
		const { time } = this.props;
		if (time.isPending) {
			return <Loader />
		}
		
		if (!time.value) {
			return null;
		}

		return (
			<Time
				time={time.value}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	time: state.mainState.time,
});

export default connect(mapStateToProps)(TimeContainer);