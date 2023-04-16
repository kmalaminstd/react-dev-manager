import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import FormInputField from '../Components/contacts/FormInputField';
import { AuthContext } from '../context/Auth.Context';

const schema = yup.object({
  username: yup
  .string()
  .required("Username is required")
  .min(5, "Max value must be 5 letters"),
  email: yup
  .string()
  .lowercase()
  .email("Must be a valid email")
  .required("Email is required"),
  password: yup
  .string()
  .required("Please give a strong password")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&^(){}])[A-Za-z\d@$!%*?&]{6,}$/, "Password with 6 characters containing at least one lowercase letter, one uppercase letter, one number, and one special character"),
  confirmPassword: yup
  .string()
  .oneOf([yup.ref('password')], "Confirm password doesn't match")
  .required("Confirm Password is required")
})


function Register() {

  const {userRegister} = useContext(AuthContext)

  const {register, handleSubmit, formState: {errors}, isSubmitting} = useForm({resolver: yupResolver(schema)})

  const onSubmit = (data)=>{
    userRegister({
      username: data.username,
      email: data.email,
      password: data.password,
    })
  }

  const defaultThings = {
    username: 'alaminstd',
    email: 'alaminkhanstd@gmail.com',
    password: 'Intelcore@i5'
  }

  const {username, email, password} = defaultThings


  return (
    <>



      <h2 className="text-center mb-3">Register User</h2>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputField 
          name="username"
          label="Username"
          type="text" 
          errors={errors}
          register={register}
          defaultValue={username}
        />

        <FormInputField
          name="email"
          label="Email"
          type="email"
          errors={errors}
          register={register}
          defaultValue={email}
        />

        <FormInputField
          name="password"
          label="Password"
          type="password"
          errors={errors}
          register={register}
          defaultValue={password}
        />

        <FormInputField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          errors={errors}
          register={register}
          defaultValue={password}
        />

        <Button variant="primary" size="md" type="submit" disabled={isSubmitting ? 'disabled' : ''}>Sign Up</Button>
      </Form>

    </>
  )
}

export default Register