import React, { useEffect, useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useForm } from  'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const scheme = yup.object({
    firstName: yup.string().required("First name is required")
    .min(3, 'Length Must be 3 or more'),
    lastName: yup.string().required("Last name is required")
    .min(3, 'Length Must be 3 or more'),
    email: yup.string().required("Email is required")
    .email("Enter a valid email address"),
    profession: yup.string().required("Please select your profession"),
    image: yup.string().required("Please give your profile url")
    .url("Enter a valid url"),
    bio: yup.string().required("Enter your bio")
    .min(50, 'Minimum length is 50')
    .max(300, 'Maxium length is 300')
})

function AddContact({addContact}) {

    const { register, handleSubmit, setValue, reset, formState: {errors, isSubmitting, isSubmitSuccessful} } = useForm({
        resolver: yupResolver(scheme)
    })

    const onSubmit = data => {
        addContact(data)
    }

    console.log(errors);

    const [birthYear, setBirthYear] = useState(new Date())

    useEffect(() =>{
        setValue('dateOfBirth', birthYear)
    }, [birthYear])

    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                firstName: '',
                lastName: '',
                email: '',
                profession: 'male',
                gender: '',
                image: '',
                bio: ''
            }
    ), setBirthYear(new Date())}
    }, [isSubmitSuccessful])
    


  return (
    <>
        <h2 className='text-center'>Add Contact</h2>

        <Form className='mt-5' onSubmit={handleSubmit(onSubmit)}>



            <Form.Group as={Row} className="mb-3">

                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='firstName'>First Name:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        isInvalid={errors?.firstName}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.firstName?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='lastName'>Last Name:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        isInvalid={errors?.lastName}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.lastName?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        type="email"
                        id="email"
                        {...register("email")}
                        isInvalid={errors?.email}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.email?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='dateOfBirth'>Date of Birth:</Form.Label>
                </Col>
                <Col sm={9}>
                    <DatePicker
                        selected={birthYear}
                        value={birthYear}
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        onChange={(date)=>setBirthYear(date)}
                        placeholder="Date of Birth"
                        htmlFor="dateOfBirth"
                        maxDate={new Date()}
                        placeholderText="Click here to enter date"
                        showYearDropdown
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='profession'>Profession:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Select {...register('profession', {required: 'Please select your profession'})} isInvalid={errors?.profession} defaultValue=''>
                        <option disabled value=''>Select a option</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value=" Web Designer"> Web Designer</option>
                        <option value=" Software Engineer"> Software Engineer</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.profession?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='profession'>Gender:</Form.Label>
                </Col>
                <Col xs='auto'>
                    <Form.Check
                        defaultChecked="true"
                        name="gender"
                        type="radio"
                        value="male" 
                        label="Male"
                        {...register("gender")}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Check
                        name="gender"
                        type="radio"
                        value="female"                      
                        label="Female"
                        {...register("gender")}
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
                        id="image"
                        {...register("image")}
                        isInvalid={errors?.image}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.image?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={3} className="d-flex align-items-center" >
                    <Form.Label htmlFor='bio'>Bio:</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                        as='textarea'
                        id="bio"
                        {...register("bio")}
                        isInvalid={errors?.bio}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors?.bio?.message}
                    </Form.Control.Feedback>  
                </Col>
            </Form.Group> 


            <Button siz="md" type="submit" variant="secondary" disabled={isSubmitting}>Add Contact</Button>
        </Form>

    </>
  )
}

export default AddContact