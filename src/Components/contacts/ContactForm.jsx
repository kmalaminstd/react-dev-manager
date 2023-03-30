import { useEffect, useState, useRef } from 'react'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useForm } from  'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ToastContainer, toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const scheme = yup.object({
    firstname: yup.string().required("First name is required")
    .min(3, 'Length Must be 3 or more'),
    lastname: yup.string().required("Last name is required")
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

function ContactForm({addContact, targetContact, updateContact}) {

    const { register, handleSubmit, setValue, reset, formState: {errors, isSubmitting, isSubmitSuccessful} } = useForm({
        resolver: yupResolver(scheme)
    })

    const navigate = useNavigate()
    const nodeRef = useRef(null)

    const onSubmit = data => {

        if(targetContact?.id){
            toast.success('Contact Updated Successfully!')
            updateContact(data, targetContact.id)
        }else{
            addContact(data)
            toast.success('Form Submitted Successfully!') 
        }
        navigate('/contact')
        
    }

    const [birthYear, setBirthYear] = useState(new Date())

    useEffect(() =>{
        setValue('dateOfBirth', birthYear)
    }, [birthYear])

    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                firstname: '',
                lastname: '',
                email: '',
                profession: 'male',
                gender: '',
                image: '',
                bio: ''
            }
    ), setBirthYear(new Date())}
    }, [isSubmitSuccessful])
    
    const defaultValues = {
        firstname: targetContact?.firstname || 'K.M.',
        lastname: targetContact?.lastname || 'AL-AMIN',
        email: targetContact?.email || 'alaminkhanst@gmail.com',
        profession: targetContact?.profession || 'Web Designer',
        gender: targetContact?.gender || 'male',
        image: targetContact?.image || 'https://www.alfclark.dev/img/logo.40fd948a.png',
        dateOfBirth: targetContact?.dateOfBirth || birthYear,
        bio: targetContact?.bio || 'All About me is here and I am a web designer'
    }

    
    const { firstname, lastname, email, profession, gender, image, dateOfBirth, bio} = defaultValues
    

  return (
    <>

        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
        />

        <Container className="mt-3">
            <h2 className='text-center'>{targetContact?.id ? 'Edit Contact' : 'Add Contact'}</h2>

            <Form className='mt-5' onSubmit={handleSubmit(onSubmit)}>



                <Form.Group as={Row} className="mb-3">

                    <Col sm={3} className="d-flex align-items-center" >
                        <Form.Label htmlFor='firstname'>First Name:</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control 
                            type="text"
                            id="firstname"
                            {...register("firstname")}
                            isInvalid={errors?.firstname}
                            defaultValue={firstname}
                        />
                        <Form.Control.Feedback type="invalid" className="d-block">
                            {errors?.firstname?.message}
                        </Form.Control.Feedback>  
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                    <Col sm={3} className="d-flex align-items-center" >
                        <Form.Label htmlFor='lastname'>Last Name:</Form.Label>
                    </Col>
                    <Col sm={9}>
                        <Form.Control 
                            type="text"
                            id="lastname"
                            {...register("lastname")}
                            isInvalid={errors?.lastname}
                            defaultValue={lastname}
                        />
                        <Form.Control.Feedback type="invalid" className="d-block">
                            {errors?.lastname?.message}
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
                            defaultValue={email}
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
                            ref={nodeRef}
                            selected={birthYear}
                            value={dateOfBirth}
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
                        <Form.Select {...register('profession', {required: 'Please select your profession'})} isInvalid={errors?.profession} defaultValue={profession}>
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
                            defaultChecked={gender === 'male'}
                            name="gender"
                            type="radio"
                            value='male'
                            label="Male"
                            {...register("gender")}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            defaultChecked={gender === 'female'}
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
                            defaultValue={image}
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
                            defaultValue={bio}
                        />
                        <Form.Control.Feedback type="invalid" className="d-block">
                            {errors?.bio?.message}
                        </Form.Control.Feedback>  
                    </Col>
                </Form.Group> 


                <Button siz="md" type="submit" variant="secondary" disabled={isSubmitting}>{targetContact?.id ? 'Edit Contact' : 'Add Contact'}</Button>
            </Form>
        </Container>

    </>
  )
}

export default ContactForm