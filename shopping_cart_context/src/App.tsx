import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StorePage';
import Navbar from './components/Navbar';
import ShoppingCartProvider from './context/ShoppingCartContext';
const App = () => {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/store" element={<StorePage />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    );
};

export default App;
