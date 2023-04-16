import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import FormInputField from '../Components/contacts/FormInputField';
import { AuthContext } from '../context/Auth.Context';


const schema = yup.object({
  email: yup
  .string()
  .required("Email is required"),
  password: yup
  .string()
  .required("Please give a strong password"),
})

function Login() {


  const {userLogin} = useContext(AuthContext)

  const {register, handleSubmit, formState: {errors}, isSubmitting} = useForm({resolver: yupResolver(schema)})

  const onSubmit = (data)=>{
    userLogin({
      identifier: data.email,
      password: data.password,
    })
  }

  return (
    <>
          <h2 className="text-center mb-3">User Login</h2>
      
          <Form onSubmit={handleSubmit(onSubmit)}>


            <FormInputField
              name="email"
              label="Email"
              type="email"
              errors={errors}
              register={register}
              defaultValue="alaminkhanstd@gmail.com"
            />

            <FormInputField
              name="password"
              label="Password"
              type="password"
              errors={errors}
              register={register}
              defaultValue="Intelcore@i5"
            />

            <Button variant="primary" size="md" type="submit" disabled={isSubmitting ? 'disabled' : ''}>Sign In</Button>
          </Form>
    </>
  )
}

export default Login