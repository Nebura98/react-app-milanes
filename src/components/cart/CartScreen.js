import React, { useEffect, useReducer }   from 'react';
import { useForm }        from '../../hooks/useForm';
import { CartItem }       from './CartItem';
import { productReducer } from '../../listProducts/productReducer';
import { types }          from '../../types/types';

import swal from 'sweetalert';

const init = () => {
    return JSON.parse(localStorage.getItem( 'MilanesKeyCart' )) || [];
}

export const CartScreen = () => {

    document.title="Carrito";
    
    const [ cart , dispatch ] = useReducer( productReducer , [] , init );

    useEffect( () => {
        localStorage.setItem( 'MilanesKeyCart', JSON.stringify( cart ) );
    }, [cart]);

    const [  formValues, handleInputChange ]  = useForm({
        name:'',
        email:'',
        phoneNumber:'',
        address:''
    });

    const { name, email, phoneNumber, address } = formValues;

    const handleAddProduct = ( item ) => {
        dispatch ({
            type: types.add,
            payload : item
        });
    }

    const handleDeleteProduct = ( name ) => {
        dispatch ({
            type: types.delete,
            payload : name
        });
    }

    const resetCart = () => {
        swal({
            title: "¿Estas seguro?",
            text: "¿Deseas vacíar tu carrito?",
            icon: "warning",
            buttons: ["Cancelar", "Proceder"]
          })
          .then(willDelete => {
            if (willDelete) {
              swal("¡La operación se ejecuto exitosamente!", "Tu carrito ha sido vaciado exitosamente", "success");
              dispatch ({
                type: types.reset,
                payload : ''
            });
            }
          });
    }

    const sendEmail = () => {
        alert(JSON.stringify(cart));
    }

    return (
        <div className="container-fluid mt-4">
            <div className="col-12 col-md-6 mx-auto my-2 card shadow-sm p-4">
                <main>
                    <h2>Formularío de solicitud de proforma</h2>
                    <form onSubmit={ sendEmail }>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" htmlFor="name">Nombre completo</label>
                            <input 
                                className="form-control" 
                                type="text"  
                                name="name" 
                                value={ name }
                                placeholder="Nombre"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" htmlFor="email">Correo electronico</label>
                            <input 
                                className="form-control" 
                                type="email"  
                                name="email" 
                                value={ email }
                                placeholder="Correo electronico"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" htmlFor="phoneNumber">Número telefonico</label>
                            <input 
                                className="form-control" 
                                type="text"  
                                name="phoneNumber" 
                                value={ phoneNumber }
                                placeholder="Número de telefono"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className=" mx-4 mb-2">
                            <label className="form-label" htmlFor="address">Dirección</label>
                            <input 
                                className="form-control" 
                                type="text"  
                                name="address" 
                                value={ address }
                                placeholder="Dirección"
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="mx-4 my-2">
                            <button className="btn btn-primary form-control" type="submit">Envíar consulta</button>
                        </div>
                    </form>
                    <hr/>
                </main>
            
                <div className="">

                    <ul className="list-group list-group-flush">
                        {
                            ( cart=== undefined || cart.length === 0) 
                                ?
                                    <div className= "alert alert-danger mx-4 mb-2 text-center">
                                        No se han agregado producto.
                                    </div>
                                :   
                                (
                                    <> 
                                        <h3>Lista de productos</h3>
                                        <button
                                            className="btn btn-outline-warning form-control"
                                            onClick={ resetCart }
                                        >
                                            Vacíar listado
                                        </button>
                                    </>
                                )
                        }
                        
                        {
                            cart.map( item => (
                                <CartItem
                                    key={item.name}
                                    { ...item} 
                                    handleAddProduct = { handleAddProduct } 
                                    handleDeleteProduct = { handleDeleteProduct }
                                />
                            ))
                        }
                    </ul>
                </div> 
            </div>                           
        </div>
    )
}