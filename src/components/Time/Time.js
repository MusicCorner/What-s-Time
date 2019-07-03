import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Time.css';

export default class Time extends React.Component {
	static propTypes = {
		time: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
		this.props = props;
		const { time } = this.props;
		this.state = {
			dateTime: moment(time.datetime, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').toDate(),
		};
	}

	componentDidMount() {
		this.startTiming();
	}

	startTiming = () => {
		const { dateTime } = this.state;
		setInterval(() => {
			dateTime.setSeconds(dateTime.getSeconds() + 1);
			this.setState({
				dateTime,
			});
		}, 1000);
	}

	getParsedTimeObjectItem = (string) => {
		return `${string}`.length > 1 ? string : `0${string}`;
	}

	getTimeObject = () => {
		const { dateTime } = this.state;
		const timeObject = {
			year: dateTime.getFullYear(),
			monthNumber: (dateTime.getMonth() + 1),
			monthName: dateTime.toString().split(' ')[1],
			weekDayName: dateTime.toString().split(' ')[0],
			dayOfMonth: dateTime.getDate(),
			hours: dateTime.getHours(),
			minutes: dateTime.getMinutes(),
			seconds: dateTime.getSeconds(),
		};

		Object.keys(timeObject).forEach(key => {
			const item = timeObject[key];
			timeObject[key] = this.getParsedTimeObjectItem(item);
		});

		return timeObject;
	}

	render() {
		const {
			year, monthNumber, monthName, dayOfMonth,
			weekDayName, hours, minutes, seconds,
		} = this.getTimeObject();

		return (
			<div className="time__container">
				<div className="time-item date">
					{year} year {monthNumber} ({monthName}) {dayOfMonth} {weekDayName}
				</div>
				<div className="time-item time">
					{hours}:{minutes}:{seconds}
				</div>
			</div>
		);
	}
}
