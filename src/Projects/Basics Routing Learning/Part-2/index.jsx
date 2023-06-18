import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function About() {
    return (
        <div>
            <h2>About Page</h2>
        </div>
    )
}
function ShowUserData() {
    const userParams = useParams()
    return (
        <div>
            <h2>{(isNaN(Number(userParams.userdata))) ?`Your username is ${userParams.userdata}`  :`Your UserId is ${userParams.userdata}` }</h2>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            
            <Route path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:userdata' element={<ShowUserData />} />

        </Routes>
    </BrowserRouter>
);

