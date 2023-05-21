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
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';
type IProps = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
const ProductItem: React.FC<IProps> = ({ id, title, price, img, quantity }) => {
    const dispatch = useAppDispatch();
    return (
        <MDBCol size="md">
            <MDBCard>
                <MDBCardImage src={img} position="top" alt="..." />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{formatCurrency(price)}</MDBCardText>
                    <MDBBtn
                        onClick={() => dispatch(addToCart({ id, title, price, img, quantity }))}
                    >
                        Add to Cart
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ProductItem;
