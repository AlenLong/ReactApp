import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'

export const StopwatchTimer2 = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [stateIntervalSeconds, setIntervalSeconds] = useState(null)
  const [stateIntervalMinutes, setIntervalMinutes] = useState(null)
  const [stateIntervalHours, setIntervalHours] = useState(null)


  const handleStart = () => {


    const intervalSeconds = setInterval(() => {
      setSeconds((sec) => {
        if (sec === 59) {
          return 0
        }
        return sec + 1
      })
    }, 1000 / 1000);

    const intervalMinutes = setInterval(() => {
      setMinutes((min) => {
        if (min === 59) {
          return 0
        }
        return min + 1
      })
    }, 61000 / 1000);

    const intervalHours = setInterval(() => {
      setHours((hrs) => {
        return hrs + 1
      })
    }, 61000 * 60 / 1000);

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



  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className={'text-center'}>

          <ButtonGroup aria-label="Basic example">

            <Button variant="outline-success"
              disabled={stateIntervalSeconds &&
                stateIntervalMinutes &&
                stateIntervalHours}
              onClick={handleStart}>Comenzar
            </Button>
            <Button variant="outline-danger" onClick={handleStop}>Detener</Button>
            <Button variant="outline-secondary">Reiniciar</Button>
          </ButtonGroup>

          <Card style={{ width: '25rem' }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stop watch Timer 2</Card.Title>
              <Card.Text>
                {hours} horas | {minutes} minutos | {seconds} segundos
              </Card.Text>
            </Card.Body>
            <Card.Footer>{hours}:{minutes}:{seconds}</Card.Footer>
          </Card>

        </Col>
      </Row>
    </Container>
  )
}
