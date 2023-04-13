import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "react-datepicker/dist/react-datepicker.css";
import { ContactProvider } from './context/Contact.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
 
  </React.StrictMode>,
)
