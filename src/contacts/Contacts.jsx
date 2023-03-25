
import Contact from './Contact'

function Contacts({contacts, deleteContact}) {
  return (
    <>
        {
            contacts.map( contact =>( 
                <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
            ))
        }
    </>
  )
}

export default Contacts