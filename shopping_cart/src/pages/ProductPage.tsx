import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import ProductItem from '../components/ProductItem';
import products from '../data/products.json';
const ProductPage = () => {
    return (
        <div className="m-2">
            <MDBContainer>
                <MDBRow className="mb-3">
                    {products.map((product) => {
                        return <ProductItem key={product.id} {...product} />;
                    })}
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default ProductPage;
