import {useContext} from 'react'
import ContactForm from '../Components/contacts/ContactForm'
import { ContactContext } from '../context/Contact.context'

function Addcontact(){
  const {addContact} = useContext(ContactContext)
  
  return (
    <>
      <ContactForm addContact={addContact} />
    </>
  )
}

export default Addcontact