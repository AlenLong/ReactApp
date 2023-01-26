import { Button, Form, Toast, Image } from "react-bootstrap"

export const CardItem = ({task, onUpdate, onDelete, onActive}) => {
    return (
        <Toast onClose={()=>onDelete(task.id)} bg={task.active ? 'success' : null}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{task.title}</strong>
                <small>{task.date}</small>
            </Toast.Header>
            <Toast.Body>
                <Image fluid src={task.img}/> {/* https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png */}

                <p className="pt-2">{task.description}</p>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check name="active" id={task.id} onClick={()=>onActive(task.id)} />
                    <Form.Label htmlFor={task.id}>Pendiente</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check name="completed" id="completed" />
                    <Form.Label htmlFor="completed">Compeltado</Form.Label>
                </Form.Group>

                <Button variant="outline-primary" onClick={() => onUpdate(task.id)}>Editar</Button>

            </Toast.Body>

        </Toast>
    )
}
