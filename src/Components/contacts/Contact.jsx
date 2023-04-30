import {Button, Card, ListGroup, Container} from 'react-bootstrap'
import {BsEye, BsFillTrashFill} from 'react-icons/bs'
import {format} from 'date-fns'
import { toast , ToastContainer} from 'react-toastify'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContactContext } from '../../context/Contact.context'

function Contact({contact}) {

  const {deleteContact} = useContext(ContactContext)

  const { id, firstname, lastname, email, profession, gender, image, dateOfBirth, bio} = contact
  // console.log(contact);

  const handleDelete = (id)=> {
    deleteContact(id)
  }



  return (
    <>


      <Container className='mt-3'>


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
                <Card.Link as={Link} to={`/contact/${id}`}>
                  <Button className="ms-3 warning" size="md" type="view">
                    <BsEye />
                  </Button>
                </Card.Link>             
              </div>

            </Card.Body>
          </div>
        </Card>  
      </Container>        

    </>
  )
}

export default Contact