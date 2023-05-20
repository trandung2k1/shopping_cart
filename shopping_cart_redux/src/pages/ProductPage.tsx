import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import ProductItem from '../components/ProductItem';
import { useAppSelector } from '../store/hooks';
const ProductPage = () => {
    const { products } = useAppSelector((state) => state.cart);
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
