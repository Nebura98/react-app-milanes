import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString         from 'query-string';
import { useForm } from '../../hooks/useForm';
import { SideBar } from '../sidebar/SideBar';
import { ProductCard } from './ProductCard';
import { getProducstByName } from '../../selectors/getProductsByName';


export const SearchProduct = ({ history }) => {

    document.title="Comercial Milanés";

    const location  = useLocation();

    const { q = '' } = queryString.parse( location.search );
 
    const [ formValues, handleInputChange ] = useForm({ searchText: q });

    const { searchText } = formValues;

    const productsFiltered =  useMemo(() =>  getProducstByName( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    return (
        <div className="container-fluid bg-light">
            <div className= "row mt-0">
                <SideBar/>
                <div className="col mx-auto">
                    <div>
                        <form onSubmit= { handleSearch }>
                            <div className="input-group mt-2">
                                <input
                                    type= "text"
                                    placeholder= "Buscar producto"
                                    className= "form-control"
                                    name= "searchText"
                                    autoComplete= "off"
                                    value= { searchText }
                                    onChange= { handleInputChange }
                                />
                                <button
                                    type= "submit"
                                    className= "btn btn-outline-secondary"
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>
                        <div className="row mt-3 g-3">
                            {
                                ( q !== '' && productsFiltered.length === 0)
                                    &&
                                    <div className= "alert alert-danger">
                                        No se ha encontrado un producto con este nombre { q }
                                    </div>
                            }

                            {
                                productsFiltered.map( product => (
                                    <ProductCard 
                                    key= {product.nombre}
                                    { ...product }
                                />
                                ))
                            }
                        </div>
                    </div>
                    <div className="m-2">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Anterior</a>
                                </li>
                                <li className="page-item"><a className="text-secondary page-link" href="/">1</a></li>
                                <li className="page-item"><a className="text-secondary page-link" href="/">2</a></li>
                                <li className="page-item"><a className="text-secondary page-link" href="/">3</a></li>
                                <li className="page-item">
                                <a className="text-secondary page-link" href="/">Siguiente</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
