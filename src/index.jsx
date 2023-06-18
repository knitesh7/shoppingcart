import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/cart/cart.jsx';
import Product from './components/productpage/product';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/product/:productId' element={<Product/>}/>
            </Routes>
            
        </BrowserRouter>
    </Provider>
);

