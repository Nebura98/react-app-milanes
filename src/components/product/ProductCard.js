import React       from 'react';
import { Link }    from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { TagList } from '../tagsProduct/TagList';

export const ProductCard = ({ nombre, url, precio, unidad }) => {

    const [  formValues, handleInputChange  ] = useForm(
        { 
            name:nombre,
            urlImg:url, 
            price:precio, 
            measure:unidad, 
            amount:1 
        });


    const { name, urlImg, price, measure, amount } = formValues;

    const handleAddProduct = (e) => {
        e.preventDefault();
        if ( localStorage.getItem('MilanesKeyCart') !== null && isAlreadyIn() ){
            let cartObj = JSON.parse(localStorage.getItem('MilanesKeyCart')); 
            cartObj.push((formValues));
            localStorage.setItem('MilanesKeyCart',JSON.stringify(cartObj));
        } else if (localStorage.getItem('MilanesKeyCart') === null){
            localStorage.setItem('MilanesKeyCart',JSON.stringify([formValues]));
        }
    }

    const isAlreadyIn = () => {
        let cartObj = JSON.parse(localStorage.getItem('MilanesKeyCart'));
        const nombre = name.toLowerCase();
        for (let {name} of cartObj) {
            if ( name.toLowerCase() === nombre){
                return false;
            }
        }
        return true;
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
                        <form onSubmit={ handleAddProduct }>
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
                                    type="submit"
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>                    
            </div>
        </div>
    )
}
