import { connect } from 'react-redux';
import Time from '../../components/Time/Time';

const mapStateToProps = (state) => ({
	time: state.mainState.time,
});

export default connect(mapStateToProps)(Time);
