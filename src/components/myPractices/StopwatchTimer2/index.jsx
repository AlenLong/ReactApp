import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'

const oneOrTwoNum = (num) => num > 9 ? num : `0${num}`

export const StopwatchTimer2 = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [velocity, setVelocity] = useState(0)
  const [velocityName, setVelocityName] = useState('')

  const [stateIntervalSeconds, setIntervalSeconds] = useState(null)
  const [stateIntervalMinutes, setIntervalMinutes] = useState(null)
  const [stateIntervalHours, setIntervalHours] = useState(null)


  const handleStart = () => {

    
    const intervalHours = setInterval(() => {
      setHours((hrs) => {
        return hrs + 1
      })
    }, velocity ? (60000 * 60) / velocity : (60000 * 60));
    
    const intervalMinutes = setInterval(() => {
      setMinutes((min) => {
        if (min === 59) {
          return 0
        }
        return min + 1
      })
    },velocity ? 60000 / velocity : 60000) ;
    
    const intervalSeconds = setInterval(() => {
      setSeconds((sec) => {
        if (sec === 59) {
          return 0
        }
        return sec + 1
      })
    }, velocity ? 1000 / velocity : 1000);






    setIntervalSeconds(intervalSeconds)
    setIntervalMinutes(intervalMinutes)
    setIntervalHours(intervalHours)

  }

  const handleStop = () => {
    if (stateIntervalSeconds && stateIntervalMinutes && stateIntervalHours) {
      clearInterval(stateIntervalSeconds)
      clearInterval(stateIntervalMinutes)
      clearInterval(stateIntervalHours)
    }
    setIntervalSeconds(null)
    setIntervalMinutes(null)
    setIntervalHours(null)
  }

  const handleReset = () => {
    handleStop();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  const handleVelocity = (vel, velText) =>{
    setVelocity(vel)
    setVelocityName(velText)
    handleStop()
    /* handleStart() */
  }


  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className={'text-center'}>

          <ButtonGroup aria-label="Basic example" className='d-block my-2'>

            <Button variant="outline-success"
              disabled={stateIntervalSeconds &&
                stateIntervalMinutes &&
                stateIntervalHours}
              onClick={handleStart}>Comenzar
            </Button>
            <Button variant="outline-danger" onClick={handleStop}>Detener</Button>
            <Button variant="outline-secondary" onClick={handleReset}>Reiniciar</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">

            <Button variant="outline-info" className={velocityName ==='min' && 'active'} onClick={()=>handleVelocity(0,'min')}>min</Button>
            <Button variant="outline-info" className={velocityName ==='x2' && 'active'} onClick={()=>handleVelocity(2, 'x2')}>x2</Button>
            <Button variant="outline-info" className={velocityName ==='x4' && 'active'} onClick={()=>handleVelocity(4, 'x4')}>x4</Button>
            <Button variant="outline-info" className={velocityName ==='x6' && 'active'} onClick={()=>handleVelocity(6, 'x6')}>x6</Button>
            <Button variant="outline-info" className={velocityName ==='max' && 'active'} onClick={()=>handleVelocity(10, 'max')}>max</Button>
          </ButtonGroup>


          <Card style={{ width: '25rem' }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stop watch Timer 2</Card.Title>
              <Card.Text>
                {oneOrTwoNum(hours)} horas | {oneOrTwoNum(minutes)} minutos | {oneOrTwoNum(seconds)} segundos
              </Card.Text>
            </Card.Body>
            <Card.Footer>{oneOrTwoNum(hours)}:{oneOrTwoNum(minutes)}:{oneOrTwoNum(seconds)}</Card.Footer>
          </Card>

        </Col>
      </Row>
    </Container>
  )
}
