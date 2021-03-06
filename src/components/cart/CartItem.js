import React from 'react';
import { useForm } from '../../hooks/useForm';

export const CartItem = ({ name, urlImg, price, measure, amount, handleAddProduct, handleDeleteProduct}) => {

    const [  formValues, handleInputChange  ] = useForm (
                                                            { 
                                                                nameItem: name,
                                                                urlImgItem: urlImg, 
                                                                priceItem: price, 
                                                                measureItem: measure, 
                                                                amountItem: amount
                                                            }
                                                        );

    const { nameItem, urlImgItem, priceItem, measureItem, amountItem } = formValues; 
    

    const updateMeasure = (e) => {
        handleInputChange(e);
        // handleAddProduct(form);
    }
    return (
        <li className="list-group-item">
            <div className="car">
                <div className="row mx-auto py-2">
                    <div className="col-sm-4 ">
                        <img src={ urlImgItem } alt={ nameItem } className="card-img-box img-fluid"/>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <p className="card-title overflow-hidden fw-bold ">{ nameItem }</p>
                            <p className="">{ priceItem + '/' + measureItem}</p>
                            <input 
                                className="form-control" 
                                type="number"
                                name="amountItem" 
                                value={ amountItem }
                                onChange={ updateMeasure }
                            />
                        </div>
                    </div>
                    <button 
                        className="btn btn-warning my-1"
                        onClick={ () => handleDeleteProduct( nameItem ) }
                    >
                            Eliminar producto
                    </button>
                </div>
            </div>
        </li>
    )
}

