import ReactDOM from 'react-dom/client';
import {CartEnvironment} from './components/context/cartcontext'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartEnvironment><App /></CartEnvironment>);
