import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
// Components
import Item from './ShoppingCartItem';





const ShoppingCart = props => {

	const cart = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const removeItem = id => {
		const result = cart.filter(item => {
			if(id !== item.id){
			return item;
			} else{
			return item.splice();
		}
		})
		return result;
	};

	return (
		<div className="shopping-cart">
		<CartContext.Provider>
			{cart.map(item => (
				<Item key={item.id} removeItem={removeItem} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
				
			</div>
			</CartContext.Provider>
		</div>
		
	);
};

export default ShoppingCart;
