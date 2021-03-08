import React from 'react';

export const CartItem = ({ key=1, urlImage="", name="Hola mundo", price=3.99 , measure="unidad", selectedValue=1 }) => {

    const deleteCartItem = () => {
        let cartList = JSON.stringify( Array.from( localStorage.getItem( key ) ) );
    }

    return (
        <li 
            key={ key }
            className="list-group-item">
            <div className="row mx-auto py-2">
                <div className="col-sm-4 my-2 border-warning border-2 border-end">
                    <img src={ urlImage } alt={ name } className="img-fluid"/>
                </div>
                <div className="col-sm-8">
                    <h4 className="overflow-hidden">{ name }</h4>
                    <p className="">{ price + measure }</p>
                    <input className="form-control form-control-sm w-75" type="number" defaultValue={ selectedValue }/>
                </div>
                <button 
                    className="btn btn-danger my-1 "
                    onClick={ deleteCartItem }    
                >
                        Eliminar producto
                </button>
            </div>
        </li>
    )
}
