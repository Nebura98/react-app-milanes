import React, { useMemo }       from 'react'
import { Redirect, useParams }  from 'react-router';
import { getProductByName }     from '../../selectors/getProductByName';

export const ProductScreen = ({ history }) => {

    const { productName } = useParams();
    const product = useMemo(() => getProductByName( productName ), [ productName ]);
    const description = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';

    if ( !product ){
        return <Redirect to="/productos" />
    }

    const { nombre, url, precio, unidad } = product;

    const handleReturn = () => {

        if (history.length <=2 ){
            history.push('/');
        }else{
            history.goBack();
        }

    }

    return (
        <div className= "row">
            <div className= "col-12 col-md-4">
                <img 
                    src= { url }
                    alt= { nombre }
                    className= "img-thumbnail animate__animated animate__fadeInLeft"  
                />
            </div>
            <div className="card-body col-12 col-md-4">
                <h1>
                    <span className="card-title">
                        { nombre }
                    </span>
                </h1>
                <div>
                    <h2 className="card-subtitle text-muted">
                        { precio } /{unidad}
                    </h2>
                </div>
                <div>
                    <p className="card-text">
                        { description }
                    </p>
                </div>
            </div>
            <div className= "col-12 col-md-4">
                <button 
                    className= "btn btn-outline-info"
                    onClick= { handleReturn }
                >
                    Volver
                </button>
            </div>
        </div>
    )
}
