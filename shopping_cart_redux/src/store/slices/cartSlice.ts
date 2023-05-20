import { createSlice } from '@reduxjs/toolkit';
type CartItem = {
    id: number;
    quantity: number;
};
export type IState = {
    cartItems: CartItem[] | [];
}
const initialState: IState = {
    cartItems: []
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},

});
const cartReducer = cartSlice.reducer;
export default cartReducer;