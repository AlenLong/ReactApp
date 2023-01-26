import { useEffect, useReducer } from 'react'
import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm2 } from '../../../hook/useForm2'
import { taskReducer } from '../../../reducers/taskReducer'
import { CardItem } from './CardItem'
import { Form2 } from './Form2'
import { TaskFilter } from './TaskFilter'
import { filterTask } from '../../../constants'



export const TaskManager2 = () => {
  const formTaskInitialState = {
    id: 'id',
    title: '',
    description: '',
    img: '',
    active: false,
    completed: false,
    date: ''
  }
  const refForm = useRef(null)
  const [inputValues, setInputValues, handleChangeInputValue, reset] = useForm2(formTaskInitialState, refForm)
  const [action, setAction] = useState('CREATE')
  const [statusFilter, setStatusFilter] = useState(filterTask.ALL)

  const taskStore = localStorage.getItem('tasks')
  const initialStateReducer = JSON.parse(taskStore) || []
  const [tasks, dispatch] = useReducer(taskReducer, initialStateReducer)   // dispatch({type,payload})

  const handleSubmit = (e) => {
    e.preventDefault()

    if (action === 'CREATE') {
      dispatch({ type: 'ADD', payload: inputValues })
    }

    if (action === 'UPDATE') {
      dispatch({ type: 'UPDATE', payload: inputValues })
    }

    reset()
    setAction('CREATE')
  }

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleUpdate = (id) => {
    console.log('Quiero actualizar la tarea' + id);
    const taskFound = tasks.find(task => task.id === id)
    setInputValues(taskFound)
    setAction('UPDATE')
  }

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id })
  }


  const handleTaskActive = (id) => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: id })
  }
  const handleTaskCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id })
  }

  const handleReset = () => {
    reset()
  }

  const handleStatusFilter = (status='') =>{
    setStatusFilter(status)
  }

  const filterTaskMethod = task => {

    switch (statusFilter) {
      case filterTask.PROCESS:
        return task.active === true;

      case filterTask.PENDING:
        return task.active === false;
      
      case filterTask.COMPLETED:
        return task.completed === true;
      default:
        return task
    }

  }




  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{span:6,offset:4}} className={'text-center mb-5'}>
          <TaskFilter onChangeFilter={handleStatusFilter}/>
        </Col>
        <Col xs={12} lg={3} className={'text-center mb-5'}>

          <Form2
            onChange={handleChangeInputValue}
            inputValues={inputValues}
            onSubmit={handleSubmit}
            refForm={refForm}
            action={action}
            onReset={handleReset}
          />

        </Col>
        <Col xs={12} lg={9} className={'d-flex flex-wrap align-items-start gap-2'}>
          {
            tasks.filter(filterTaskMethod).map((taskMap) => {
              return (
                <CardItem
                  key={taskMap.id}
                  task={taskMap}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onActive={handleTaskActive}
                  onCompleted={handleTaskCompleted} />
              )
            })
          }

        </Col>
      </Row>
    </Container>
  )
}
