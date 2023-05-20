import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {
    return (
        <MDBNavbar light bgColor="light">
            <MDBContainer>
                <Link to="/">Home</Link>
                <span>
                    <Link to="/product">Product</Link>
                </span>
                <div>
                    <Link to="/cart">
                        <i
                            className="fas fa-cart-arrow-down fa-2x"
                            style={{ position: 'relative', background: 'none' }}
                        >
                            <span
                                style={{
                                    color: 'white',
                                    position: 'absolute',
                                    top: '-4px',
                                    right: '-4px',
                                    background: 'rgb(255, 66, 79)',
                                    borderRadius: '8px',
                                    fontSize: '10px',
                                    textAlign: 'center',
                                    maxHeight: '16px',
                                    padding: '.5px 4px',
                                    lineHeight: '150%',
                                    display: 'inline-block',
                                    fontWeight: 'bold',
                                }}
                            >
                                2
                            </span>
                        </i>
                    </Link>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}
