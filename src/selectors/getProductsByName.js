import data from "../data/dataExample.json";

export const getProducstByName = ( name = '' ) => {
    if (name ===''){
        return data;
    }
    name = name.toLocaleLowerCase();
    return data.filter( data => data.nombre.toLocaleLowerCase().includes( name ));
}