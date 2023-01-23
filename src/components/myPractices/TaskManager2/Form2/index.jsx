import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const Form2 = ({ onChange, inputValues, onSubmit, refForm}) => {
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
                as={'textarea'} 
                type="text" 
                value={inputValues.description} 
                placeholder="Ingresa una descripción" 
                onChange={onChange} 
                name='description' 
                />
            </Form.Group>

            <Button variant="success" type="submit" className='mx-4'>
                Agregar
            </Button>

            <Button variant="danger" type="reset">
                Reiniciar
            </Button>
        </Form>
    )
}