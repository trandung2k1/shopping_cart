import {
    ADD_TO_CART,
    DECREASE_CART_QUANTITY,
    INCREASE_CART_QUANTITY,
    REMOVE_FROM_CART,
} from '../constants/types';
export type ProductPayload = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
export const addToCart = (payload: ProductPayload) => {
    return {
        type: ADD_TO_CART,
        payload,
    };
};
export const removeFormCart = (payload: number) => {
    return {
        type: REMOVE_FROM_CART,
        payload,
    };
};
export const increaseCartQuantity = (payload: number) => {
    return {
        type: INCREASE_CART_QUANTITY,
        payload,
    };
};
export const decreaseCartQuantity = (payload: number) => {
    return {
        type: DECREASE_CART_QUANTITY,
        payload,
    };
};
