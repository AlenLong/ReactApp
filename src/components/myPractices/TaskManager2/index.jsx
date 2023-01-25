import { useReducer } from 'react'
import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm2 } from '../../../hook/useForm2'
import { CardItem } from './CardItem'
import { Form2 } from './Form2'


const generateId = () => Math.random().toString(36).substring(2,18)


const taskReducer = (state, action) => {  //{type, payload} type = tipo de accionm payload la info
switch (action.type) {
  case 'ADD':

    const newTask = {
      ...action.payload,
      id: generateId(),
      active: false,
      completed: false
    }

    /* console.log('PAYLOAD',newTask); */
    return [...state, newTask]

  default:
    break;
}


}

export const TaskManager2 = () => {
  const refForm = useRef(null)
  const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm2({}, refForm)

const [tasks, dispatch] = useReducer(taskReducer,[])   // dispatch({type,payload})

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({type:'ADD', payload:inputValues})
    
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
            tasks.map((taskMap) =>{
              return <CardItem key={taskMap.id} task={taskMap} />
            })
          }

        </Col>
      </Row>
    </Container>
  )
}
