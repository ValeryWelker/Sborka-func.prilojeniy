import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Cart } from '../../assets/navbar/cart.svg';
import { ReactComponent as Profile } from '../../assets/navbar/profile.svg';
import { ReactComponent as Logout } from '../../assets/navbar/logout.svg';
import { ReactComponent as Menu } from '../../assets/navbar/menu2.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../feature/reducers/Cart/cart.slice';
import { UserAuth } from '../../context/AuthContext';

import styles from './Navbar.module.scss';

const Navbar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { totalQuantity, cart } = useSelector((state) => state.cart);
	const { user, logOut } = UserAuth();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	const handleSignOut = async () => {
		await logOut();
	};

	const handleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Link to='/'>
					<h2>Интернет-магазин одежды </h2>
				</Link>

				<button onClick={handleMenu} className={styles.menuButton}>
					<Menu />
				</button>

				<nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						Главная
					</NavLink>
					<NavLink
						to='/shop'
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						Магазин
					</NavLink>

					<Link to='/cart' className={styles.cart}>
						<Cart />
						<span>{totalQuantity}</span>
					</Link>

					{user?.email ? (
						<>
							<Link to='/profile/settings'>
								<Profile />
							</Link>
							<Logout onClick={handleSignOut} />
						</>
					) : (
						<>
							<NavLink
								to='/signup'
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								Регистрация
							</NavLink>
							<NavLink
								to='/login'
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								Войти
							</NavLink>
						</>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
