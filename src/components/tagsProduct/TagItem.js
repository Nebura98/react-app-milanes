import React from 'react';

export const TagItem = ( {tag} ) => {
    return (
            <li className="list-group-item bg-secondary mx-1  ">
                <span href="/" className="badge bg-secondary link-light">{ `${ tag }` }</span>
            </li>
    )
}
