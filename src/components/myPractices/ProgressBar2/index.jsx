import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form, Modal } from "react-bootstrap"
import img from '../../../assets/maxresdefault.jpg'

export const ProgressBar2 = () => {


  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null);
  const inputRef = useRef(null);
  const [btnDisable, setBtnDisable] = useState(true)
  const[showModal, setShowModal] = useState(false)

  const handleProgress = () => {
    const valueInput = +inputRef.current?.value
    const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput <= 100
    setShowModal(!isValueValid)

    if(intervalState){
      handleReset()
    }

    if(isValueValid) {

    const interval = setInterval(() => {
      setNow((now) => {
        if (now === valueInput) {
          clearInterval(interval);
          return now
        }
        return now + 1
      })
    }, 500);
    setIntervalState(interval);
  }else{
    handleReset()
  }
};

  const handleReset = () => {
    clearInterval(intervalState);
    setNow(0);
  }

  const handleChange = ({target: {value}}) =>{
    setBtnDisable(!!!+value)
  } 

  const handleClose =() =>{setShowModal(false)}
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className={'text-center'}>
          <Card style={{ width: '45rem' }} className='m-auto'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>You have {`${now}`} seconds to comply</Card.Title>
              <BarProgress animated now={now} label={`${now}%`} variant='danger' />

              <Form.Control
                ref={inputRef}
                placeholder='Cuanto aprendiste hoy de React?'
                className="my-3"
                onChange={handleChange}>
              </Form.Control>

              <Button
                variant="warning"
                className="mb-3 mx-4"
                onClick={handleProgress}
                disabled={btnDisable}>
                Check</Button>

              <Button
                variant="danger"
                className="mb-3"
                onClick={handleReset}>
                Comply</Button>

            </Card.Body>
          </Card>
        </Col>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className="text-danger text-center py-4">ERROR.. ❌</h2>
            <p className="text-muted fs-4 text-center">
              Solo se acepta valores numéricos. El valor debe ser mayor a 0 y
              menor e igual a 100.
            </p>
          </>
        </Modal.Body>
      </Modal>
      </Row>
    </Container>
  )
}
