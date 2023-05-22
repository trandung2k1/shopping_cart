import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import products from '../../data/products.json';

export type Product = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
type CartItem = Product;
export type IState = {
    cartItems: CartItem[] | [];
    products: Product[];
};
const initialState: IState = {
    cartItems: [],
    products: products,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const findProduct = state.cartItems.find((item) => item.id === action.payload.id);
            if (findProduct != undefined) {
                const data = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity = item.quantity + 1;
                        return item;
                    } else {
                        return item;
                    }
                });
                state.cartItems = data;
            } else {
                state.cartItems = [...state.cartItems, action.payload];
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increaseCartQuantity: (state, action: PayloadAction<number>) => {
            const findProduct = state.cartItems.find((item) => item.id === action.payload);
            if (findProduct !== undefined) {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity + 1;
                        return item;
                    } else {
                        return item;
                    }
                });
            }
        },
        decreaseCartQuantity: (state, action: PayloadAction<number>) => {
            const findProduct = state.cartItems.find((item) => item.id === action.payload);
            if (findProduct?.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            } else {
                state.cartItems = state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity - 1;
                        return item;
                    } else {
                        return item;
                    }
                });
            }
        },
    },
});
export const { addToCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
