import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CartItem } from './CartItem/CartItem';
import { IButton, FormField, Typography } from '../../ui-kit';
import { clearCart } from '../../feature/reducers/Cart/cart.slice';
import { fetchTickets } from '../../feature/reducers/Tickets/tickets.actions';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAmount } from '../../utils/data/ticket';

import styles from './Cart.module.scss';

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cart, totalAmount } = useSelector((state) => state.cart);
	const { realTicket, isError } = useSelector((state) => state.tickets);
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		if (!data.ticket) {
			toast.warn('Введите купон', { position: 'bottom-left', autoClose: 2000 });
		} else {
			dispatch(fetchTickets(data.ticket));
		}
	};
	const currentAmount = getAmount(realTicket, totalAmount);

	return (
		<div className={styles.cart}>
			<div className={styles.container}>
				<Typography variant='title'>Корзина</Typography>

				{cart.length > 0 ? (
					<>
						<IButton
							variant='more'
							onClick={() => dispatch(clearCart())}
							className={styles.clear}
						>
							Очистить корзину
						</IButton>
						<section className={styles.content}>
							{cart.map((cartItem) => (
								<CartItem key={cartItem.key} cartItem={cartItem} />
							))}

							<div className={styles.extra}>
								<form
									className={styles.coupon}
									onSubmit={handleSubmit(onSubmit)}
								>
									<FormField
										className={styles.input}
										name='ticket'
										register={register}
										type='text'
										placeholder='Введите купон'
									/>
									{isError && (
										<p className={`${styles.alert} ${styles.warning}`}>
											{isError}
										</p>
									)}
									{realTicket && (
										<p className={`${styles.alert} ${styles.good}`}>
											Применена скидка {realTicket.size}%
										</p>
									)}

									<IButton variant='primary' type='sumbit'>
										Применить купон
									</IButton>
								</form>
							</div>

							<div className={styles.total}>
								<p>Подытог: ${totalAmount}</p>
								<div className={styles.action}>
									<IButton variant='primary'>Итого:$ {currentAmount}</IButton>
									<IButton
										variant='secondary'
										onClick={() => navigate('/order')}
									>
										Оформить заказ
									</IButton>
								</div>
							</div>
						</section>
					</>
				) : (
					<h1>Корзина пуста</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
