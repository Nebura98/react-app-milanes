import React from 'react';

export const LoginScreen = () => {
    return (
        <div className="vh-100 mx-auto row col-12 col-md-6 col-lg-4">
            <main className="align-self-center card shadow ">
                <div className="mx-lg-4 my-5">
                    <form onSubmit>
                        <h1 className="text-center">Iniciar sesión</h1>
                        <div className="col mt-2">
                            <label className="form-label" for="email">Correo electrónico</label>
                            <input className="form-control" type="email" placeholder="Ejemplo@ejemplo.com" id="email" required/>
                        </div>
                        <div className="col mt-2">
                            <label className="form-label" for="password">Contraseña</label>
                            <input className="form-control" type="password" placeholder="Contraseña" id="password" required/>    
                        </div>
                        <button
                            className="btn btn-primary mt-2 w-100"
                            onSubmit
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
