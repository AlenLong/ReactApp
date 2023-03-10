import { Button, Form, Image } from 'react-bootstrap'
import classes  from "./style.module.css";

export const Form2 = ({ onChange, inputValues, onSubmit, refForm, action, onReset}) => {
    return (
        <Form onSubmit={onSubmit} ref={refForm}>
            <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control 
                type="text" 
                value={inputValues.title} 
                placeholder="Ingresa el titulo" 
                onChange={onChange} name='title' />
            </Form.Group>

            <Form.Group className="mb-3">

                <Image className={classes.imgPreview}  fluid src={inputValues.img}/> 

                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                type="text" 
                value={inputValues.img} 
                placeholder="Ingresa un url" 
                onChange={onChange} name='img' />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                type="text" 
                as={'textarea'} 
                value={inputValues.description} 
                placeholder="Ingresa una descripción" 
                onChange={onChange} 
                name='description' 
                />
            </Form.Group>

            <Button variant={action === 'CREATE' ? 'success' : 'info'} type="submit" className='mx-4'>
                {action === 'CREATE' ? 'Crear' : 'Actualizar'}
            </Button>

            <Button variant="danger" type="reset" onClick={onReset}>
                {action === "CREATE" ? 'Reiniciar' : 'Cancelar'}
            </Button>
        </Form>
    )
}
