import {Navbar, Nav, Container, Button, Form} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.Context'

function Header() {

  const {userLogOut, user} = useContext(AuthContext)

  return (
    <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand">Dev Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {
                user &&( 
                <>
                  <Nav.Link as={NavLink} to="/contact">Contacts</Nav.Link>
                  <Nav.Link as={NavLink} to="/add-contact">Add Contacts</Nav.Link>
                  <Nav.Link onClick={userLogOut} > Log Out </Nav.Link>
                </> )
              }

              {  
                !user &&(
                                <>
                                  <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                </>)
              }

   
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      
     
    </>
  )
}

export default Header