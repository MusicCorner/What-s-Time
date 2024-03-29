import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = (props) => {
	const { title } = props;

	return (
		<div className={styles.headerContainer}>
			<div className={styles.title}>
				{title}
			</div>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
