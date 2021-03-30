import React, { useEffect, useReducer } from 'react';
import { Link }              from 'react-router-dom';
import { useForm }           from '../../hooks/useForm';
import { productReducer }    from '../../listProducts/productReducer';
import { types }             from '../../types/types';
import { TagList }           from '../tagsProduct/TagList';


const init = () => {
    return JSON.parse(localStorage.getItem( 'MilanesKeyCart' )) || [];
}

export const ProductCard = ({ nombre, url, precio, unidad }) => {

    const [ cart , dispatch ] = useReducer( productReducer , [] , init );

    useEffect( () => {
        localStorage.setItem( 'MilanesKeyCart', JSON.stringify( cart ) );
    }, [cart]);

    const [  formValues, handleInputChange  ] = useForm(
                                                            { 
                                                                name:nombre,
                                                                urlImg:url, 
                                                                price:precio, 
                                                                measure:unidad, 
                                                                amount:1 
                                                            }
                                                        );


    const { name, urlImg, price, measure, amount } = formValues;

    const handleAddProduct = () => {
        try {
            dispatch ({
                type: types.add,
                payload : formValues
            });            
        } catch (error) {
            
        }

    }
    
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
            <div className="card">
                <div className=" mx-auto d-block card-img-box">
                    <img src= { urlImg } alt={ name } className="img-fluid card-img-box"/>
                </div>
                <div className="card-body text-center">
                    <div className="card-title-box overflow-hidden">  
                        <Link
                            to={ `./productos/${ name }` }
                            className="link-secondary fw-bold text-decoration-none"
                        >
                            { name }
                        </Link>                               
                    </div>
                    <div>
                        <TagList />
                    </div>    
                    <div className="">
                        <h4 className="card-title">${ price }<small className="muted">/{ measure }</small></h4>
                        <div className="input-group">
                            <input 
                                type="number" 
                                name="amount"
                                className="form-control" 
                                onChange={ handleInputChange }
                                value={ amount }
                                aria-describedby="btnAgregar"
                            />
                            <button
                                name="btnAgregar"
                                className="btn btn-primary text-white"
                                onClick={ handleAddProduct }
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    )
}
