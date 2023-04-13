
import { useState, useContext } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import Contacts from "./Components/contacts/Contacts"
import Header from './Components/layouts/Header'
import AddContact from "./pages/AddContact"
import Homepage from "./pages/Homepage"
import Contact from "./Components/contacts/Contact"
import Footer from './Components/layouts/Footer'
import Notfound from './pages/Notfound'
import Login from './pages/Login'
import Register from './pages/Register'
import Editcontact from "./pages/Editcontact"
import ContactDetails from "./pages/ContactDetails"



function App() {

  
  return(
    <>
      <BrowserRouter>

        <Header />

        <Container style={{width: '800px', margin: '0 auto'}} className='mt-5'>
          

        <Routes>
            <Route index element={<Homepage />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="add-contact" element={<AddContact />} />
            <Route path="edit-contact/:id" element={<Editcontact  />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
            <Route path="contact/:id" element={<ContactDetails c />} />
        </Routes>
          
          
        </Container>
        
      
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
