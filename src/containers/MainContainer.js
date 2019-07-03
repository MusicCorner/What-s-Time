import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { defaultErrorAction } from '../actions/common/defaultErrorAction';
import ErrorModal from '../components/common/ErrorModal/ErrorModal';
import MainComponent from '../components/MainComponent';

class MainContainer extends React.Component {
	static propTypes = {
		error: PropTypes.object,
		toggleErrorModal: PropTypes.func.isRequired,
	}

	render() {
		const { error, toggleErrorModal } = this.props;

		return (
			<>
				<MainComponent />
				<ErrorModal
					error={error}
					toggleErrorModal={toggleErrorModal}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	error: state.common.error,
});

const mapDispatchToProps = (dispatch) => ({
	toggleErrorModal: () => {
		dispatch(defaultErrorAction(null));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
