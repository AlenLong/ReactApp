import { useRef, useState } from "react";
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form} from "react-bootstrap"
import img from '../../../assets/maxresdefault.jpg'

export const ProgressBar2 = () => {

    const [now, setNow] = useState(0);
    const inputRef = useRef(null)

    const handleProgress = () =>{
        const valueInput = inputRef.current?.value
        const interval = setInterval(() => {
            setNow((now) => {
                if(now === +valueInput)
                {
                    clearInterval(interval)
                    return now
                }
                return now + 1
            })
        }, 500);
    }

  return (
    <Container>
    <Row className="mt-5">
        <Col xs={12} lg={{span:8, offset:2}} className={'text-center'}>
        <Card style={{ width: '45rem' }} className='m-auto'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>You have {`${now}`} seconds to comply</Card.Title>
        <BarProgress animated now={now} label={`${now}%`} variant='danger'/>

        <Form.Control 
        ref={inputRef} 
        placeholder='Cuanto aprendiste hoy de React?' 
        className="my-3">
        </Form.Control>

        <Button 
        variant="primary" 
        className="mb-3" 
        onClick={handleProgress}>
          CHECK</Button>
          
      </Card.Body>
    </Card>
        </Col>
    </Row>
</Container>
  )
}
