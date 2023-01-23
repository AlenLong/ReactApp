/* import React, { useState } from 'react' */
import { useRef } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useForm2 } from '../../../hook/useForm2'
import { Form2 } from './Form2'

export const TaskManager2 = () => {
  const refForm = useRef(null)
const [inputValues, setInputValue, handleChangeInputValue, reset] = useForm2({}, refForm)
  const handleSubmit = (e) =>{
    e.preventDefault()
    reset()
  }


  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={4} className={'text-center'}>

          <Form2 
          onChange={handleChangeInputValue} 
          inputValues={inputValues} 
          onSubmit={handleSubmit}
          refForm={refForm}
          />
    
        </Col>
        <Col xs={12} lg={8} className={'text-center'}>
          
        </Col>
      </Row>
    </Container>
  )
}
