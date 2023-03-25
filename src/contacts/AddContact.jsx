import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

function AddContact({addContact}) {

    const initialUserData = {
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        dateOfBirth: new Date(),
        gender: 'male',
        image: '',
        bio: ''
    }

    const [userData, setUserData] = useState(initialUserData)


    const [userErrors, setUserErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        image: '',
        bio: ''
    })

    const [submit, setSubmit] = useState(false)

    const {firstName, lastName, email, profession, dateOfBirth, gender, bio, image} = userData

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            profession: '',
            image: '',
            bio: ''
        }

        if(firstName === ''){
            errors.firstName = 'Firstname is required'
        }
        if(lastName === ''){
            errors.lastName = 'Lastname is required'
        }
        if(email === ''){
            errors.email = 'Email is required'
        }
        if(profession === ''){
            errors.profession = 'Profession is required'
        }
        if(image === ''){
            errors.image = 'Image is required'
        }
        if(bio === ''){
            errors.bio = 'Bio is required'
        }
        
        setUserErrors(errors)

        if(Object.values(errors).some(err => err.length > 0)){
            return 
        }
        
        setSubmit(true)
        
        setTimeout(()=>{
            setSubmit(false)
        }, 3000)
        
        addContact(userData)
        
        setUserData(initialUserData)
    }

    const handleChange = (e) => {

        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })

    }

  return (
    <>
        <h2 className='text-center'>Add Contact</h2>

        <Form className='mt-5' onSubmit={handleSubmit} noValidate>

            {submit && 
                <p style={{color: '#fff', backgroundColor: 'greenyellow', padding: '5px', fontWeight: 'bold'}}>Form Submit Successfully!</p>            
            }

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='firstName'>First Name:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={firstName}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.firstName && userErrors.firstName}</p>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='lastName'>Last Name:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={lastName}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.lastName && userErrors.lastName}</p>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={email}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.email && userErrors.email}</p>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='dateOfBirth'>Date of Birth:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        onChange={handleChange}
                        value={dateOfBirth}
                    />  
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='profession'>Profession:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        name="profession"
                        id="profession"
                        onChange={handleChange}
                        value={profession}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.profession && userErrors.profession}</p>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='profession'>Gender:</Form.Label>
                </Col>
                <Col xs='auto'>
                    <Form.Check
                        name="gender"
                        type="radio"
                        value="male"
                        checked={gender === 'male'}   
                        label="Male"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Check
                        name="gender"
                        type="radio"
                        value="female"
                        checked={gender === 'female'}                       
                        label="Female"
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='image'>Image:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        name="image"
                        id="image"
                        onChange={handleChange}
                        value={image}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.image && userErrors.image}</p>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='bio'>Bio:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        as='textarea'
                        name="bio"
                        id="bio"
                        onChange={handleChange}
                        value={bio}
                    />  
                </Col>
            </Form.Group>
            <p className="text-center"style={{color: 'red'}}>{userErrors.bio && userErrors.bio}</p>

            <Button siz="md" type="submit" variant="secondary">Add Contact</Button>
        </Form>

    </>
  )
}

export default AddContact