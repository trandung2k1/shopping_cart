import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ShoppingCartProvider from './context/ShoppingCartContext.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
