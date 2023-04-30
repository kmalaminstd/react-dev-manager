
import Contact from "./Contact"
import { useContext } from "react"
import { ContactContext } from "../../context/Contact.context"
import Loader from "../Loader/Loader"

function Contacts() {
  const {contacts, loaded} = useContext(ContactContext)
  return (
    <>
        <h2 className="text-center">All Contacts</h2>
        {  loaded ?
            contacts.map( contact =>
              <Contact key={contact.id+1} contact={contact}  />
            ) : (
              <Loader />
            )
        }
    </>
  )
}

export default Contacts