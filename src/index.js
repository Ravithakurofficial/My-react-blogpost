import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Make the fetch request to track the email as soon as the app is loaded
const email = "thakurravikumar400@gmail.com";  // Replace with the actual email

fetch(`https://74fc-146-196-33-230.ngrok-free.app/track?email=${encodeURIComponent(email)}`, {
    method: 'GET',
    headers: {
        'ngrok-skip-browser-warning': 'true', // Skip ngrok's browser warning
    }
})
.then(response => {
    if (response.ok) {
        console.log('Tracking request successful');
    } else {
        console.error('Tracking request failed');
    }
})
.catch(error => {
    console.error('Error during the request:', error);
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
