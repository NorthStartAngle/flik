import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Signin from './components/signin/signin';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup/signup';

import { BrowserRouter as Router, Route,Routes, Link ,useNavigate,useParams} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
