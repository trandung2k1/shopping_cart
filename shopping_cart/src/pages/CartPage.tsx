import { formatCurrency } from '../utils/formatCurrency';
import CartItem from '../components/CartItem';
import { useShoppingCart } from '../context/ShoppingCartContext';
import React, { useEffect } from 'react';
import { Product } from '../reducers/ShoppingCartReducer';
const CartPage = () => {
    const { state } = useShoppingCart();
    const { cartItems } = state;
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    const totalPrice = React.useMemo(() => {
        const data = [...cartItems];
        return data.reduce((total: number, item: Product) => {
            return total + item.price * item.quantity;
        }, 0);
    }, [cartItems]);
    const totalQuantity = React.useMemo(() => {
        const data = [...cartItems];
        return data.reduce((total: number, item: Product) => {
            return total + item.quantity;
        }, 0);
    }, [cartItems]);
    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {cartItems.map((item) => {
                                        return <CartItem key={item.id} {...item} />;
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span>
                                                <strong>{formatCurrency(totalPrice)}</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg btn-block"
                                    >
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default CartPage;
