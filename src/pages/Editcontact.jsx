import {useContext} from 'react'
import ContactForm from '../Components/contacts/ContactForm'
import { useParams } from 'react-router-dom'
import { ContactContext } from '../context/Contact.context'

function Editcontact() {
  const {contacts, updateContact} = useContext(ContactContext)
  const {id} = useParams()
  const targetContact = contacts.find( cont => Number(cont.id) === Number(id) )
  // console.log(targetContact);
  return (
    <>
        <ContactForm targetContact={targetContact} updateContact={updateContact} />
    </>
  )
}

export default Editcontact