import React from 'react';
import { TagItem } from './TagItem';

export const TagList = () => {

    const tags= ["Ejemplo","Ejemplo","Ejemplo"];
    let key = 0;
    return (
        <div className="overflow-auto mx-auto my-2">
            <ul className="list-group list-group-horizontal">
                {
                    tags.map( tagProduct => (
                        <TagItem 
                            key={ key++ }
                            tag={ tagProduct }
                        />
                    ))
                }
            </ul>
        </div>
    )
}
