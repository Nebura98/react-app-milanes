import React from 'react';
import { CartItem } from './CartItem';

export const CartListItem = () => {
    return (
        <>
            <ul className="list-group">
            {/* Aquí van los articulos dentro de estas lista */}
            {
                <CartItem/>
            }
            </ul>
        </>
    )
}
