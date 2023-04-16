import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'

function FormInputField({name, label, placeholder, type="text", errors, defaultValue, register, ...rest}) {
  return (
    <>
        <Form.Group as={Row} className="mb-3">

            <Col sm={3} className="d-flex align-items-center" >
                <Form.Label htmlFor={name}>{label} :</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control 
                    type={type}
                    id={name}
                    {...register(name)}
                    isInvalid={errors?.name}
                    defaultValue={defaultValue}
                    {...rest}
                />
                <Form.Control.Feedback type="invalid" className="d-block">
                    {errors[name]?.message}
                </Form.Control.Feedback>  
            </Col>
        </Form.Group>
    </>
  )
}

export default FormInputField