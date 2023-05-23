import { ReactNode, createContext, useContext, useReducer } from 'react';
import cartReducer, { CartState, IAction, initialState } from '../reducers/ShoppingCartReducer';
interface IProps {
    children: ReactNode;
}
interface ShoppingCartContext {
    state: CartState;
    dispatch: React.Dispatch<IAction>;
}
const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};
const ShoppingCartProvider: React.FC<IProps> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
