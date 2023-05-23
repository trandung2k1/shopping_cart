import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import {
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFormCart,
} from '../actions/ShoppingCartActions';
type IProps = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
const CartItem = ({ id, title, price, img, quantity }: IProps) => {
    const { dispatch } = useShoppingCart();
    return (
        <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div
                    className="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                >
                    <img src={img} className="w-100" alt="Blue Jeans Jacket" />
                </div>
            </div>

            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p>
                    <strong>{title}</strong>&nbsp;&nbsp;
                    <span className="text-muted" style={{ fontSize: '.85rem' }}>
                        &times;{quantity}
                    </span>
                </p>

                <button
                    type="button"
                    className="btn btn-primary btn-sm me-1 mb-2"
                    data-mdb-toggle="tooltip"
                    title="Remove item"
                    onClick={() => dispatch(removeFormCart(id))}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                    <button
                        type="button"
                        className="btn btn-primary px-3 me-2"
                        onClick={() => dispatch(decreaseCartQuantity(id))}
                    >
                        <i className="fas fa-minus"></i>
                    </button>
                    <div className="form-outline">
                        <span style={{ fontWeight: 'bold' }}>{quantity}</span>
                    </div>
                    <button
                        className="btn btn-primary px-3 ms-2"
                        type="button"
                        onClick={() => dispatch(increaseCartQuantity(id))}
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

                <p className="text-start text-md-center">
                    <strong>{formatCurrency(price)}</strong>
                </p>
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default CartItem;
