import { Link } from 'react-router-dom';
import { IButton, MTypography } from '../../../ui-kit';
import arrow from './../../../assets/arrow.svg';
import { motion } from 'framer-motion';
import styles from './New.module.scss';
import glav from '../../../assets/glav.png';

const New = () => {
	const textAnimation = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	};

	const scrollDown = () => {
		window.scrollTo({
			top: 700,
			left: 0,
			behavior: 'smooth',
		});
	};
	return (
		<section className={styles.new}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.left}>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className={styles.action}
						>
							<MTypography custom={1} variants={textAnimation} variant='title'>
								Новые поступления в этом сезоне
							</MTypography>
							<motion.p custom={2} variants={textAnimation}>
								Утонченные сочетания и бархатные оттенки - вот то, что вы искали
								в этом сезоне. Время исследовать.
							</motion.p>
							<motion.div
								custom={3}
								variants={textAnimation}
								className={styles.buttons}
							>
								<button className={styles.arrow} onClick={scrollDown}>
									<img src={arrow} alt='go-down' />
								</button>
								<Link to={'/shop'}>
									<IButton>Открыть магазин</IButton>
								</Link>
							</motion.div>
						</motion.div>
					</div>

					<div className={styles.right}>
						<div
							className={styles.photo}
							style={{
								backgroundImage: `url(${glav})`,
							}}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default New;
