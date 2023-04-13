import {useContext} from 'react'
import ContactForm from '../Components/contacts/ContactForm'
import { useParams } from 'react-router-dom'
import { ContactContext } from '../context/Contact.context'

function Editcontact() {
  const {contacts, updateContact} = useContext(ContactContext)
  const {id} = useParams()
  const targetContact = contacts.find( cont => cont.id === id )
  
  return (
    <>
        <ContactForm targetContact={targetContact} updateContact={updateContact} />
    </>
  )
}

export default Editcontact