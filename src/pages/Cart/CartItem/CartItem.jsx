import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	removeItemFromCart,
	updateCount,
} from '../../../feature/reducers/Cart/cart.slice';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';

export const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const [cartCount, setCartCount] = useState(cartItem?.count);

	const handleChange = (e) => {
		setCartCount(e.target.value);
		const data = {
			...cartItem,
			count: e.target.value,
		};
		dispatch(updateCount(data));
	};

	return (
		<div className={styles.item}>
			<div className={styles.action}>
				<span
					onClick={() => dispatch(removeItemFromCart(cartItem))}
					className={styles.delete}
				>
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M1 1L13 13M13 1L1 13' stroke='black' />
					</svg>
				</span>

				<Link to={`/products/${cartItem.id}`}>
					<img src={cartItem?.image} alt={cartItem?.title} />
				</Link>
			</div>

			<h3>{cartItem?.title}</h3>

			<div className={styles.options}>
				<span
					className={styles.color}
					style={{ backgroundColor: `${cartItem?.color}` }}
				/>
				<span className={styles.size}>{cartItem?.size}</span>
			</div>

			<input type='number' value={cartCount} onChange={handleChange} />

			<h2>${cartItem?.price * cartItem?.count}</h2>
		</div>
	);
};
