import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
	const { title } = props;

	return (
		<div className="header__container">
			<div className="title">
				{title}
			</div>
		</div>
	);
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
