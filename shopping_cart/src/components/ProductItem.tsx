import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBCol,
} from 'mdb-react-ui-kit';
import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { addToCart } from '../actions/ShoppingCartActions';
type IProps = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
const ProductItem: React.FC<IProps> = ({ id, title, price, img, quantity }) => {
    const { dispatch } = useShoppingCart();
    return (
        <MDBCol size="md">
            <MDBCard>
                <MDBCardImage src={img} position="top" alt="..." />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{formatCurrency(price)}</MDBCardText>
                    <MDBBtn
                        onClick={() => dispatch(addToCart({ id, title, price, quantity, img }))}
                    >
                        Add to Cart
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ProductItem;
