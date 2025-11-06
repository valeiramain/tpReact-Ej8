import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form"

const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <section className="container border" >
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Juan" {...register("nombre", {
                        required: 'El nombre es un valor requerido',
                        maxLength: 30,
                        minLength: 3,
                    })} />
                    <Form.Text className='text-danger'>
                        valor requerido
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
                        valor requerido
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Ej: 22555888" {...register("apellido", {
                        required: 'El DNI es un valor requerido',
                        maxLength: 6,
                        minLength: 8,
                    })} />
                    <Form.Text className='text-danger'>
                        valor requerido
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
                        valor requerido
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlBoton" className='text-center mb-3'>
                    <Button variant="secondary" type='submit'>Enviar</Button>
                </Form.Group>
            </Form>
        </section>
    );
};

export default Formulario;