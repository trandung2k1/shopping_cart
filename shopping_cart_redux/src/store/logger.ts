import { Reducer, AnyAction } from '@reduxjs/toolkit';
import type { CombinedState } from '@reduxjs/toolkit';
import { IState } from './slices/cartSlice';
const logger = (reducer: Reducer<CombinedState<CombinedState<{ cart: IState; }>>, AnyAction>) => {
    return (prevState: CombinedState<CombinedState<{ cart: IState; }>> | undefined, action: AnyAction) => {
        console.group(action.type);
        console.log('Action type: ', action.type);
        console.log('PrevState: ', prevState);
        const newState = reducer(prevState, action);
        console.log('NewState: ', newState);
        console.groupEnd();
        return newState;
    };
};
export default logger;