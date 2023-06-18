import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function About() {
    return (
        <div>
            <h2>About Page</h2>
        </div>
    )
}
function Settings() {
    return (
        <div>
            <h2>Settings Page</h2>
        </div>
    )
}
function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='account'>
                <Route path='profile' element={<Profile />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Routes>
    </BrowserRouter>
);