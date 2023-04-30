
import { useState, useContext } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import Contacts from "../Components/contacts/Contacts"
import Header from '../Components/layouts/Header'
import AddContact from "../pages/AddContact"
import Homepage from "../pages/Homepage"
import Contact from "../Components/contacts/Contact"
import Footer from '../Components/layouts/Footer'
import Notfound from '../pages/Notfound'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Editcontact from "../pages/Editcontact"
import ContactDetails from "../pages/ContactDetails"
import {ToastContainer} from "react-toastify"
import Dashboard from "../pages/Dashboard"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

function App() {
  return(
    <>

        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
        />


        <Header />

        <Container style={{width: '800px', margin: '0 auto'}} className='mt-5'>
          

        <Routes>
            <Route index element={<Homepage />} />
            <Route path="contact" element={
              <PrivateRoute>  
                <Contacts/>
              </PrivateRoute>
            } />
            <Route path="add-contact" element={
              <PrivateRoute>
                <AddContact />
              </PrivateRoute>
            } />
            <Route path="edit-contact/:id" element={
              <PrivateRoute>
                <Editcontact />
              </PrivateRoute>
            } />
            <Route path="login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="register" element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
            <Route path="*" element={<Notfound />} />
            <Route path="contact/:id" element={
              <PrivateRoute>
                <ContactDetails />
              </PrivateRoute>
            } />
            <Route path="dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
        </Routes>
          
          
        </Container>
        

      <Footer />
    </>
  )
}

export default App
