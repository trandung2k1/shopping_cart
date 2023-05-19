import { ReactNode, createContext, useContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';
interface IProps {
    children: ReactNode;
}
type CartItem = {
    id: number;
    quantity: number;
};
type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
};
const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

const ShoppingCartProvider: React.FC<IProps> = ({ children }) => {
    // const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const cartQuantity = cartItems.reduce((quantity, item) => {
        return quantity + item.quantity;
    }, 0);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id: number) {
        setCartItems((currItems: CartItem[]) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id: number) {
        setCartItems((currItems: CartItem[]) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(id: number) {
        setCartItems((currItems: CartItem[]) => {
            return currItems.filter((item) => item.id !== id);
        });
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                openCart,
                closeCart,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
