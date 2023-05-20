import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products.json'
type CartItem = {
    id: number;
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
    products: Product[]
}
const initialState: IState = {
    cartItems: [],
    products: products
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},

});
const cartReducer = cartSlice.reducer;
export default cartReducer;