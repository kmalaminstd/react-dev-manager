
import Contact from "./Contact"
import { useContext } from "react"
import { ContactContext } from "../../context/Contact.context"

function Contacts() {
  const {contacts} = useContext(ContactContext)
  return (
    <>
        <h2 className="text-center">All Contacts</h2>
        {
            contacts.map( contact =>
              <Contact key={contact.id} contact={contact}  />
            )
        }
    </>
  )
}

export default Contacts