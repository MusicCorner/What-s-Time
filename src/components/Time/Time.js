import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loader from '../common/Loader/Loader';
import styles from './Time.css';

export default class Time extends React.Component {
	static propTypes = {
		time: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			dateTime: null,
		};
	}

	componentDidUpdate(prevProps) {
		const { time } = this.props;
		if (prevProps.time.value !== time.value) {
			this.setState(() => ({
				dateTime: moment(time.value.datetime, 'YYYY-MM-DDTHH:mm:ss').toDate(),
			}), () => {
				if (this.timer) {
					clearInterval(this.timer);
				}
				this.startTiming();
			});
		}
	}

	startTiming = () => {
		const { dateTime } = this.state;
		this.timer = setInterval(() => {
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
		const { time } = this.props;
		const { dateTime } = this.state;
		if (!dateTime) {
			return null;
		}

		if (time.isPending) {
			return (
				<Loader />
			);
		}

		const {
			year, monthNumber, monthName, dayOfMonth,
			weekDayName, hours, minutes, seconds,
		} = this.getTimeObject();

		return (
			<div>
				<div className={`${styles.timeItem} ${styles.date}`}>
					{year} year {monthNumber} ({monthName}) {dayOfMonth} {weekDayName}
				</div>
				<div className={`${styles.timeItem} ${styles.time}`}>
					{hours}:{minutes}:{seconds}
				</div>
			</div>
		);
	}
}
