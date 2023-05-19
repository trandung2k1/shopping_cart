import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const HomePage: React.FC = () => {
    const data = useShoppingCart();
    console.log(data);
    return <div>HomePage</div>;
};

export default HomePage;
