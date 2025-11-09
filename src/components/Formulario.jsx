import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'


const Formulario = () => {
    const personasLocalStorage = JSON.parse(localStorage.getItem('personasKey'))||[]
    const [personas, setPersonas] = useState(personasLocalStorage)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    useEffect(() => {
        localStorage.setItem('personasKey',JSON.stringify(personas))
    }, [personas])

    const verificacionDatos = (persona) => {
        setPersonas([...personas, persona])

        Swal.fire({
            title: "Datos guardados Correctamente!",
            icon: "success",
            draggable: true
        });
        //limpiar formulario
        reset();

    }


    return (
        <section className="container border" >
            <Form onSubmit={handleSubmit(verificacionDatos)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Juan" {...register("nombre", {
                        required: 'El nombre es un valor requerido',
                        maxLength: 30,
                        minLength: 3,
                    })} />
                    <Form.Text className="text-danger">
                        {errors.nombre?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Perez"  {...register("apellido", {
                        required: 'El apellido es un valor requerido',
                        maxLength: 30,
                        minLength: 3,
                    })} />
                    <Form.Text className='text-danger'>
                        {errors.apellido?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Ej: 22555888"  {...register("dni", {
                        required: "El DNI es un valor requerido",
                        minLength: {
                            value: 8,
                            message: "El DNI debe tener al menos 8 caracteres",
                        },
                        maxLength: {
                            value: 10,
                            message: "El DNI no puede tener más de 10 caracteres",
                        },
                    })} />
                    <Form.Text className='text-danger'>
                        {errors.dni?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ej: juanperez@example.com"   {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // <-- Regex para email
                            message: "Formato de email no válido",
                        },
                    })} />
                    <Form.Text className='text-danger'>
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlBoton">
                    <Button variant="warning" type='submit'>Enviar</Button>
                </Form.Group>
            </Form>
        </section>
    );
};

export default Formulario;