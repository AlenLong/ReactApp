import { Button, Form, Toast, Image } from "react-bootstrap"

export const CardItem = ({task}) => {
    return (
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{task.title}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
                <Image fluid src={task.img}/> {/* https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png */}

                <p className="pt-2">{task.description}</p>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check name="active" id="active" />
                    <Form.Label htmlFor="active">Pendiente</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check name="completed" id="completed" />
                    <Form.Label htmlFor="completed">Compeltado</Form.Label>
                </Form.Group>

                <Button variant="outline-primary">Editar</Button>

            </Toast.Body>

        </Toast>
    )
}
