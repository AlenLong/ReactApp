import { Button, Form, Toast, Image } from "react-bootstrap"
import classes from '../Form2/style.module.css'
export const CardItem = ({task, onUpdate, onDelete, onActive, onCompleted}) => {
    return (
        <Toast 
        onClose={()=>onDelete(task.id)} 
        bg={task.active ? 'success' : null}
        className={classes.toast}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{task.title}</strong>
                <small>{task.date}</small>
            </Toast.Header>
            <Toast.Body>
                <Image fluid src={task.img}/> 

                <p className="pt-2">{task.description}</p>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check 
                    name="active" 
                    id={`active-${task.id}`} 
                    onClick={()=>onActive(task.id)} 
                    checked={task.active}/>
                    <Form.Label htmlFor={`active-${task.id}`}>{task.active ? 'En Proceso' : 'Pendiente'}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3 d-flex gap-1">
                    <Form.Check 
                    name="completed" 
                    id={`completed-${task.id}`} 
                    onClick={()=>onCompleted(task.id)}
                    checked={task.completed} />
                    <Form.Label htmlFor={`completed-${task.id}`}>{task.completed ? 'Completado' : 'Completar'}</Form.Label>
                </Form.Group>

                <Button variant="outline-primary" onClick={() => onUpdate(task.id)}>Editar</Button>

            </Toast.Body>

        </Toast>
    )
}
