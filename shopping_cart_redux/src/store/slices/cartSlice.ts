import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import products from '../../data/products.json'
type CartItem = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
type Product = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}
export type IState = {
    cartItems: CartItem[] | [];
    products: Product[];
    totalQuantity: number;
    totalPrice: number;
    cartLength: number;
}
const initialState: IState = {
    cartItems: [],
    products: products,
    totalQuantity: 0,
    totalPrice: 0,
    cartLength: 0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const findProduct = state.cartItems.find(item => item.id === action.payload.id)
            if (findProduct) {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item
                    }
                })
            } else {
                state.cartItems = [...state.cartItems, action.payload];
            }

        },
        getTotalQuantity: (state) => {
            const carts = [...state.cartItems]
            const totalQuantity = carts.reduce((total: number, item: Product): number => total + item.quantity, 0)
            state.totalQuantity = totalQuantity
        },
        getLengthCartItem: (state) => {
            state.cartLength = state.cartItems.length
        },
        getTotalPrice: (state) => {
            const carts = [...state.cartItems]
            const totalPrice = carts.reduce((previousValue: number, currentValue: Product): number => {
                return previousValue + currentValue.quantity * currentValue.price;
            }, 0);
            state.totalPrice = totalPrice
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        increaseCartQuantity: (state, action: PayloadAction<Product>) => {
            const findProduct = state.cartItems.find(item => item.id === action.payload.id)
            if (findProduct == undefined) {
                state.cartItems = [...state.cartItems, action.payload];
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item
                    }
                })
            }
        },
        decreaseCartQuantity: (state, action: PayloadAction<number>) => {
            const findProduct = state.cartItems.find(item => item.id === action.payload)
            if (findProduct?.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item
                    }
                })
            }
        },
        increaseCartQuantityByNumber: (state, action) => {
            const findProduct = state.cartItems.find(item => item.id === action.payload.id)
            if (findProduct) {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: action.payload.quantity };
                    } else {
                        return item
                    }
                })
            }
        }
    },

});
export const { addToCart, getTotalQuantity, getTotalPrice, getLengthCartItem, removeFromCart, increaseCartQuantity, decreaseCartQuantity, increaseCartQuantityByNumber } = cartSlice.actions
const cartReducer = cartSlice.reducer;
export default cartReducer;