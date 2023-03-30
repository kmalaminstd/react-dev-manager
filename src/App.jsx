
import { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import Contacts from "./Components/contacts/Contacts"
import Header from './Components/layouts/Header'
import AddContact from "./Components/contacts/ContactForm"
import Homepage from "./pages/Homepage"
import Contact from "./Components/contacts/Contact"
import Footer from './Components/layouts/Footer'
import Notfound from './pages/Notfound'
import Login from './pages/Login'
import Register from './pages/Register'
import Editcontact from "./pages/Editcontact"
import ContactDetails from "./pages/ContactDetails"


const inititalData = [
  {
    id: '1',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/81-512.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '2',
    firstname: 'Mike',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://mrholmes.dev/img/profile.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '3',
    firstname: 'Steve',
    lastname: 'Smith',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://www.alfclark.dev/img/logo.40fd948a.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '4',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '5',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://www.kalashsharma.com/web/boy.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '6',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/theseg-profile_image-837ceadc6679666a-300x300.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: '7',
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'male',
    image: 'https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/81-512.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
]

function App() {

  const [contacts, setContacts] = useState(inititalData)

  const deleteContact = (id) => {
    const updateInitialData = contacts.filter(cont => cont.id !== id)
    setContacts(updateInitialData)
  }

  const addContact = (data) => {
    const contactToAdd ={
      id: contacts.length+1 ,
      ...data
    }
    setContacts([ contactToAdd, ...contacts])
    
  }

  const updateContact = (upContact, id) => {
    const contactUpdated = contacts.map( cont => {
      if(cont.id === id){
        return{ 
          id,
          ...upContact
        }
      }else{
        return cont
      }
    })

    setContacts(contactUpdated)

  }

  

  return(
    <>
      <BrowserRouter>

        <Header />

        <Container style={{width: '800px', margin: '0 auto'}} className='mt-5'>
          

        <Routes>
            <Route index element={<Homepage />} />
            <Route path="contact" element={<Contacts contacts={contacts} deleteContact={deleteContact} />} />
            <Route path="add-contact" element={<AddContact addContact={addContact} />} />
            <Route path="edit-contact/:id" element={<Editcontact contacts={contacts} updateContact={updateContact} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
            <Route path="contact/:id" element={<ContactDetails contacts={contacts} deleteContact={deleteContact} />} />
        </Routes>
          
          
        </Container>
        
      
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
