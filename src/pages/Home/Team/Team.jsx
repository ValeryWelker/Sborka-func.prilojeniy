import React from 'react';
import team from '../../../assets/team.png';

import { Link } from 'react-router-dom';
import { IButton, Typography } from '../../../ui-kit';

import styles from './Team.module.scss';

const Team = () => {
	return (
		<section className={styles.team}>
			<div className={styles.container}>
				<Typography variant='subtitle'>Команда Мечты</Typography>
				<div className={styles.feature}>
					<div className={styles.left}>
						<img src={team} alt='' />
					</div>
					<div className={styles.right}>
						<h3>Для каждой</h3>
						<p>
							Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
						</p>
						<p>
							Наша команда ищет эти мелочи и создает прекрасные вещи, которые
							выгодно подчеркивают достоинства каждой девушки.
						</p>
						<Link to={'/shop'}>
							<IButton variant='more'>Перейти в магазин</IButton>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
