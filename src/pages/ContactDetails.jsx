import { useEffect, useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Card, Button, ListGroup, } from 'react-bootstrap'
import { BsFillTrashFill} from 'react-icons/bs'
import {FaRegEdit} from 'react-icons/fa'
import { toast } from 'react-toastify'
import {format} from 'date-fns'
import { ContactContext } from '../context/Contact.context'

function ContactDetails() {
    const {contacts, deleteContact} = useContext(ContactContext)
    const [newCont, setNewCont] = useState({})
    const params = useParams()
    const {id} = params
    const navigate = useNavigate()


    const getCont = contacts.find( cont => cont.id === id)

    useEffect(()=> {
        if(id && contacts){
            setNewCont(getCont)
        }
    },[id])

    const { firstname, lastname, email, profession, gender, image, dateOfBirth, bio } = newCont
    
    const handleDelete = (id) =>{
        deleteContact(id)
        navigate('/contact')
        toast.success('Delete Successfully')
    }

  return (
    <Container className='mt-3'>

    {
        Object.keys(newCont).length === 0 ? 'No Contact Found' : (

            <Card className='mb-3'>
            <div className='d-flex'>
              <Card.Img variant="top" className="card-img" src={image} />
              <Card.Body>
                <Card.Title> Name: {firstname} {lastname}</Card.Title>
                <Card.Subtitle>Profession: {profession}</Card.Subtitle>
                <Card.Text className="mt-3">
                  {bio}
                </Card.Text>
              
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
                <ListGroup.Item>Date of Birth: { dateOfBirth instanceof Object? format( dateOfBirth, 'dd/LL/yyyy'): dateOfBirth }</ListGroup.Item>
              </ListGroup>
              
                <div className="card-btn mt-3">
                  <Card.Link>
                    <Button className="ms-3 warning" size="md" onClick={()=>handleDelete(id)} >
                      <BsFillTrashFill />
                    </Button>
                  </Card.Link>
                  <Card.Link as={Link} to={`/edit-contact/${id}`}>
                    <Button className="ms-3 warning" size="md" type="view">
                      <FaRegEdit />
                    </Button>
                  </Card.Link>             
                </div>
      
              </Card.Body>
            </div>
          </Card>

        )
    }

  
  </Container>
  )
}

export default ContactDetails