import React from 'react';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [ formValues, handleInputChange ] = useForm( { email:'', password:'' });

    const { email, password } = formValues;

    const isValidated = () => {
        alert('Iniciar Sección')
    }

    return (
        <div className="vh-100 mx-auto row col-12 col-md-6 col-lg-4">
            <main className="align-self-center card shadow ">
                <div className="mx-lg-4 my-5">
                    <form onSubmit={ isValidated }>
                        <h1 className="text-center">Iniciar sesión</h1>
                        <div className="col mt-2">
                            <label className="form-label" htmlFor="email">Correo electrónico</label>
                            <input 
                                className="form-control" 
                                type="email" 
                                placeholder="Ejemplo@ejemplo.com"
                                value={ email }
                                onChange={ handleInputChange } 
                                name="email"
                                required
                            />
                        </div>
                        <div className="col mt-2">
                            <label className="form-label" htmlFor="password">Contraseña</label>
                            <input 
                                className="form-control" 
                                type="password" 
                                placeholder="Contraseña" 
                                name="password"
                                value={ password }
                                onChange={ handleInputChange } 
                                required
                            />    
                        </div>
                        <button
                            className="btn btn-primary mt-2 w-100"
                            type='submit'
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
