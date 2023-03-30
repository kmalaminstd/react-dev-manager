import React from 'react'
import ContactForm from '../Components/contacts/ContactForm'
import { useParams } from 'react-router-dom'

function Editcontact({ contacts, updateContact }) {
  const {id} = useParams()
  const targetContact = contacts.find( cont => cont.id === id )
  
  return (
    <>
        <ContactForm targetContact={targetContact} updateContact={updateContact} />
    </>
  )
}

export default Editcontact