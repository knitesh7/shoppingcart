import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShowDetails from './components/postdetails.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import {PostContextProvider} from './components/context/postcontext'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <PostContextProvider>
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<App />} />
                <Route path='/posts/:id' element={<ShowDetails />} />

            </Routes>
        </BrowserRouter>

    </PostContextProvider>
    
);

