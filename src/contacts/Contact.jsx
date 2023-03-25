import {Button, Card, ListGroup} from 'react-bootstrap'
import {BsEye, BsFillTrashFill} from 'react-icons/bs'

function Contact({contact, deleteContact}) {
  const { id, firstName, lastName, email, profession, gender, image, dateOfBirth, bio} = contact
  console.log(contact);
  return (
    <>
        
      <Card className='mb-3'>
        <div className='d-flex'>
          <Card.Img variant="top" className="card-img" src={image} />
          <Card.Body>
            <Card.Title> Name: {firstName} {lastName}</Card.Title>
            <Card.Subtitle>Profession: {profession}</Card.Subtitle>
            <Card.Text>
              {bio}
            </Card.Text>
          
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Gender: {gender}</ListGroup.Item>
            <ListGroup.Item>Email: {email}</ListGroup.Item>
            <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
          </ListGroup>
          
            <div className="card-btn mt-3">
              <Card.Link>
                <Button className="ms-3 warning" size="md" onClick={()=>deleteContact(id)} >
                  <BsFillTrashFill />
                </Button>
              </Card.Link>
              <Card.Link>
                <Button className="ms-3 warning" size="md" type="view">
                  <BsEye />
                </Button>
              </Card.Link>             
            </div>

          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default Contact