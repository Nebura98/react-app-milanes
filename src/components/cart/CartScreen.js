import React, { useEffect, useState }   from 'react';
import { useForm } from '../../hooks/useForm';
import { CartItem } from './CartItem';

export const CartScreen = () => {

    document.title="Carrito";

    const [  formValues, handleInputChange ]  = useForm({
        name:'',
        email:'',
        phoneNumber:'',
        address:''
    });

    const [Items, setItems] = useState(JSON.parse(localStorage.getItem('MilanesKeyCart'))|| []);

    const { name, email, phoneNumber, address } = formValues;

    // const handleDeleteCartItem = ( e ) => {
    //     setItems(JSON.parse(localStorage.getItem('MilanesKeyCart'))); 
    //     setItems(setItems.filter( ( item ) => item.nombre !== e.nombre));
    //     localStorage.setItem('MilanesKeyCart',JSON.stringify(setItems));
    // }

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('MilanesKeyCart')) || []);
    },[])

    const emptyCart = (e) => {
        e.preventDefault();
        setItems( localStorage.removeItem('MilanesKeyCart'))
        setItems([]);
    }

    const sendEmail = () => {
        alert(JSON.stringify(Items));
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
                            ( Items=== undefined || Items.length === 0) 
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
                                            onClick={ emptyCart }
                                        >
                                            Vacíar listado
                                        </button>
                                    </>
                                )
                        }
                        
                        {
                            Items.map( item => (
                                <CartItem
                                    key={item.name} 
                                    {...item}
                                />
                            ))
                        }
                    </ul>
                </div> 
            </div>                           
        </div>
    )
}