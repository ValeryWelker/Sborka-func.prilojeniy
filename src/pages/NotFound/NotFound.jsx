import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IButton } from '../../ui-kit';
import styles from './NotFound.module.scss';

const NotFound = () => {
	const location = useLocation();
	return (
		<section className={styles.notfound}>
			<h1>Страница по адресу {location.pathname} не найдена</h1>
			<Link to='/'>
				<IButton variant='more'>На главную</IButton>
			</Link>
		</section>
	);
};

export default NotFound;
