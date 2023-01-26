import { useEffect, useReducer } from 'react'
import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm2 } from '../../../hook/useForm2'
import { CardItem } from './CardItem'
import { Form2 } from './Form2'


const generateId = () => Math.random().toString(36).substring(2,18)


const taskReducer = (state, action) => {  //{type, payload} type = tipo de accionm payload la info


switch (action.type) {

  case 'ADD':

    const inputValues = action.payload
    const newTask = {
      ...inputValues,
      id: generateId(),
      active: false,
      completed: false,
      date: new Date().toLocaleString()
    }

    /* console.log('PAYLOAD',newTask); */
      return [...state, newTask]

    case 'UPDATE':
      const taskToUpdate = action.payload
      const tasksUpdated = state.map((task) =>{
        if(task.id === taskToUpdate.id){
          return{
            ...task,
            ...taskToUpdate
          }
        }
        return task
      })
      return tasksUpdated


      case 'DELETE':
        const idTaskToDelete = action.payload
        const restTask = state.filter(task => task.id !== idTaskToDelete)
      return restTask

      case 'TOGGLE_ACTIVE' :
        const  taskTpActive = action.payload
        const tasksUpdatedActive = state.map(task =>{
          if(task.id === action.payload){
            return {
              ...task,
              active: !task.active
            }
          }
          return task
        })
        return tasksUpdatedActive

  default:
    return state
}


}

export const TaskManager2 = () => {
  const formTaskInitialState = {
    id:'id',
    title:'',
    description:'',
    img:'',
    active:false,
    completed:false,
    date:''
  }
  const refForm = useRef(null)
  const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm2(formTaskInitialState, refForm)
  const [action, setAction] = useState('CREATE')
  const [tasks, dispatch] = useReducer(taskReducer,[])   // dispatch({type,payload})

  const handleSubmit = (e) => {
    e.preventDefault()

    if(action === 'CREATE'){
      dispatch({type:'ADD', payload:inputValues})
    }

    if(action === 'UPDATE'){
      dispatch({type:'UPDATE', payload:inputValues})
    }

    reset()
    setAction('CREATE')
  }

  useEffect(() => {
     console.log(tasks);
  }, [tasks])

  const handleUpdate = (id) => {
    console.log('Quiero actualizar la tarea' + id);
    const taskFound = tasks.find(task => task.id ===id)
    setInputValues(taskFound)
    setAction('UPDATE')
  }

  const handleDelete = (id) =>{
    dispatch({type:"DELETE", payload:id})
  }
 

const handleTaskActive = (id) => {
  dispatch({type:"TOGGLE_ACTIVE", payload:id})
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
            action={action}
          />

        </Col>
        <Col xs={12} lg={8} className={'text-center'}>
          {
            tasks.map((taskMap) =>{
              return (
                <CardItem 
                key={taskMap.id} 
                task={taskMap} 
                onUpdate={handleUpdate} 
                onDelete={handleDelete}
                onActive={handleTaskActive}/>
              )
            })
          }

        </Col>
      </Row>
    </Container>
  )
}
