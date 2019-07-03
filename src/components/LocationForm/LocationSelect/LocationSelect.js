import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class TimeZoneSelect extends React.Component {
	static propTypes = {
		onChangeSelect: PropTypes.func.isRequired,
		locations: PropTypes.object.isRequired,
	}

	getOptions = () => {
		const { locations } = this.props;
		const { items } = locations;
		return items.map(item => (
			{ value: item, label: item }
		));
	}

	getOptionByValue = () => {
		const { locations } = this.props;
		const { current } = locations;
		return current && { current, label: current };
	}

	onChange = (option) => {
		const { onChangeSelect } = this.props;
		onChangeSelect(option.value);
	}

	render() {
		return (
			<Select
				options={this.getOptions()}
				value={this.getOptionByValue()}
				onChange={this.onChange}
			/>
		);
	}
}
