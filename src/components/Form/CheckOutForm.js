import React from 'react';
import { CartListItem } from './CartListItem';

export const CheckOutForm = () => {
    return (
        <div className="container-fluid mx-auto mt-4">
            <div className="card mx-auto col-12 col-lg-8 my-2 shadow-sm p-4">
                <main>
                    <h2>Formularío de solicitud de proforma</h2>
                    <form onSubmit>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" for="name">Nombre completo</label>
                            <input className="form-control" type="text" id="name" name="name" placeholder="Nombre"/>
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" for="email">Correo electronico</label>
                            <input className="form-control" type="email" id="email" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" for="phoneNumber">Número telefonico</label>
                            <input className="form-control" type="text" id="phoneNumber" name="phoneNumber" placeholder="Número de telefono"/>
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" for="address">Dirección</label>
                            <input className="form-control" type="text" id="address" name="address" placeholder="Dirección"/>
                        </div>
                            <button className="btn btn-primary mx-4 my-2" onSubmit>Envíar consulta</button>
                    </form>
                    <hr/>
                </main>
            
                <div className="">
                    <h3>Lista de productos</h3>
                        {/* Aquí van los artículos seleccionados , con su código y cantidad*/}
                        {
                            <CartListItem/>
                        }
                    
                </div> 
            </div>                           
        </div>
    )
}
