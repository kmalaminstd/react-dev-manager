import React from 'react'
import ContactForm from '../Components/contacts/ContactForm'

function Addcontact({addContact}){
  return (
    <>
      <ContactForm addContact={addContact} />
    </>
  )
}

export default Addcontact