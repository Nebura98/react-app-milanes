import data from '../data/dataExample.json';

export const getProductByName = ( nombre ) => {
    return data.find( data => data.nombre === nombre );    
} 