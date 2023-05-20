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
type IProps = {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
};
const ProductItem: React.FC<IProps> = ({ title, price, img }) => {
    return (
        <MDBCol size="md">
            <MDBCard>
                <MDBCardImage src={img} position="top" alt="..." />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{formatCurrency(price)}</MDBCardText>
                    <MDBBtn>Add to Cart</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ProductItem;
