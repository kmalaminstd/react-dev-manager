import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "react-datepicker/dist/react-datepicker.css";
import { ContactProvider } from './context/Contact.context';
import { AuthContextProvider } from './context/Auth.Context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </AuthContextProvider>
    </BrowserRouter>
 
  </React.StrictMode>,
)
