
import { useState } from "react"
import { Container } from "react-bootstrap"
import Contacts from "./contacts/Contacts"
import Header from './layouts/Header'
import AddContact from "./contacts/AddContact"

const inititalData = [
  {
    id: 1,
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/81-512.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 2,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://mrholmes.dev/img/profile.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 3,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://www.alfclark.dev/img/logo.40fd948a.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 4,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 5,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://www.kalashsharma.com/web/boy.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 6,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/theseg-profile_image-837ceadc6679666a-300x300.png',
    dateOfBirth: '10/11/2000',
    bio: 'All about me'
  },
  {
    id: 7,
    firstname: 'john',
    lastname: 'doe',
    email: 'johndoe@gmail.com',
    profession: 'Web Developer',
    gender: 'Male',
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

  return(
    <>
      <Header />

      
      
      <Container style={{width: '800px', margin: '0 auto'}} className='mt-5'>

        <AddContact addContact={addContact} />

        <h2 className="text-center">All Contacts</h2>
        <Contacts contacts={contacts} deleteContact={deleteContact} />
      </Container>
      
    </>
  )
}

export default App
