/* import React, { useState } from 'react' */
import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm2 } from '../../../hook/useForm2'
import { CardItem } from './CardItem'
import { Form2 } from './Form2'

export const TaskManager2 = () => {
  const refForm = useRef(null)
  const [inputValues, setInputValue, handleChangeInputValue, reset] = useForm2({}, refForm)
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTasks([...tasks, inputValues])
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
          {
            tasks.map((task) =>{
              
              return <CardItem />
            })
          }

        </Col>
      </Row>
    </Container>
  )
}
