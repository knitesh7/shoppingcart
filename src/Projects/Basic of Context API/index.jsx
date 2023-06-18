import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CounterEnvironment} from './components/context/countercontext.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CounterEnvironment><App /></CounterEnvironment>);
