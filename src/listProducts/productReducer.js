import { types } from "../types/types";

export const productReducer = ( state = [], action ) => {

    switch (action.type) {
        case types.add:
            if( state.length < 1 ){
                return [ ...state, action.payload ]
            }else{
                for (let product of state) {
                    if ( product.name.toLowerCase() === action.payload.name.toLowerCase() ){
                        product.amount = action.payload.amount
                        return [...state];
                    }
                }
                return[ ...state, action.payload ]
            }
        case types.delete:
            return state.filter( product => product.name !== action.payload );
        
        case types.reset:
            return [];
    
        default:
            return state;
    }
}