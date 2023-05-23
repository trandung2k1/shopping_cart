import { ProductPayload } from '../actions/ShoppingCartActions';
import {
    ADD_TO_CART,
    DECREASE_CART_QUANTITY,
    INCREASE_CART_QUANTITY,
    REMOVE_FROM_CART,
} from '../constants/types';
import products from '../data/products.json';
export type Product = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
type CartItem = Product;
export type CartState = {
    cartItems: CartItem[] | [];
    products: Product[];
};
export const initialState: CartState = {
    cartItems: [],
    products: products,
};
export type IAction = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: ProductPayload | any;
};
const cartReducer = (state: CartState, action: IAction) => {
    switch (action.type) {
        case ADD_TO_CART: {
            if (state.cartItems.find((item) => item.id === action.payload.id) == undefined) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            } else {
                const newCartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity = item.quantity + 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    cartItems: newCartItems,
                };
            }
        }
        case REMOVE_FROM_CART: {
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cartItems: newCartItems,
            };
        }
        case INCREASE_CART_QUANTITY: {
            console.log(action.payload);
            if (state.cartItems.find((item) => item.id === action.payload) != undefined) {
                const newCartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity + 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    cartItems: newCartItems,
                };
            } else {
                return {
                    ...state,
                };
            }
        }
        case DECREASE_CART_QUANTITY: {
            const findProduct = state.cartItems.find((item) => item.id === action.payload);
            if (findProduct?.quantity === 1) {
                const newCartItems = state.cartItems.filter((item) => item.id !== action.payload);
                return {
                    ...state,
                    cartItems: newCartItems,
                };
            } else {
                const newCartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity - 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    cartItems: newCartItems,
                };
            }
        }
        default:
            return state;
    }
};

export default cartReducer;
