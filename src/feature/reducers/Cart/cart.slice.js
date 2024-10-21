import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartData = JSON.parse(localStorage.getItem('cart'));

const initialState = {
	cart: cartData ? cartData : [],
	totalAmount: 0,
	totalQuantity: 0,
	coupon: null,
};

const cartSlice = createSlice({
	name: '@@cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const idx = state.cart.findIndex(
				(elem) =>
					elem.id === action.payload.id &&
					elem.size === action.payload.size &&
					elem.color === action.payload.color
			);

			if (idx >= 0) {
				state.cart = state.cart.map((elem) => {
					if (
						elem.id === action.payload.id &&
						elem.size === action.payload.size &&
						elem.color === action.payload.color
					) {
						return { ...elem, count: +elem.count + +action.payload.count };
					} else {
						return elem;
					}
				});
			} else {
				state.cart = [...state.cart, { ...action.payload, key: nanoid() }];
				toast.success('Товар добавлен в корзину');
			}
			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		getTotal: (state) => {
			let { total, quantity } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { count, price } = cartItem;
					const itemTotalPrice = price * +count;

					cartTotal.total += +itemTotalPrice;
					cartTotal.quantity += +count;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.totalQuantity = quantity;
			state.totalAmount = total;
		},
		removeItemFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(item) =>
					item.key !== action.payload.key ||
					item.size !== action.payload.size ||
					item.color !== action.payload.color
			);
			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		clearCart: (state) => {
			localStorage.removeItem('cart');
			state.cart = [];
			state.totalAmount = 0;
			state.totalQuantity = 0;
		},
		updateCount: (state, action) => {
			state.cart = state.cart.map((elem) => {
				if (
					elem.id === action.payload.id &&
					elem.color === action.payload.color &&
					elem.size === action.payload.size
				) {
					return { ...elem, count: action.payload.count };
				} else {
					return elem;
				}
			});
			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
	},
});

export const {
	addToCart,
	getTotal,
	clearCart,
	removeItemFromCart,
	updateCount,
	updateAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
