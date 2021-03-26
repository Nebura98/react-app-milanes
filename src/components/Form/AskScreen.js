import React from 'react';

export const CheckOutForm = () => {

    const sentEmail = () => {

    }

    return (
        <div className="container-fluid mx-auto mt-4">
            <div className="card mx-auto col-12 col-md-6 my-2 shadow-sm p-4">
                <main>
                    <h2 className="text-center">Envíanos tus consultas</h2>

                    <form onSubmit={ sentEmail } >
                        <div className="mx-4 mb-2">
                            <label className="form-label" htmlFor="name">Nombre completo</label>
                            <input className="form-control" type="text" id="name" name="name" placeholder="Nombre"/>
                        </div>
                        <div className="mx-4 mb-2">
                            <label className="form-label" htmlFor="email">Correo electronico</label>
                            <input className="form-control" type="email" id="email" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="mx-4 mb-2">
                            <label className="form-label" htmlFor="phoneNumber">Número telefonico</label>
                            <input className="form-control" type="text" id="phoneNumber" name="phoneNumber" placeholder="Número de telefono"/>
                        </div>
                        <div className="mx-4 mb-2">
                            <label className="form-label" htmlFor="address">Dirección</label>
                            <input className="form-control" type="text" id="address" name="address" placeholder="Dirección"/>
                        </div>
                        <div className="mx-4 mb-2">
                            <label htmlFor="textConsultation">Consultas</label>
                            <textarea className="form-control" placeholder="Escribenos tú consulta" id="textConsultation" style={{height:150}}></textarea>
                        </div>
                        <div className="mx-4 mb-2">
                            <button className="btn btn-primary form-control text-white" type="submit">Envíar consulta</button>                        
                        </div>
                    </form>
                </main>
            </div>                           
        </div>
    )
}
