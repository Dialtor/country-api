import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<h3>Where is the world?</h3>

			<div>
				<span></span>
				<p>Dark Mode</p>
			</div>
		</div>
	)
};

export default Header;
