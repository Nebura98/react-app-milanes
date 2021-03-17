import React from 'react'

export const SideBarItem = ({ OptionName }) => {
    return (

        <li className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={ OptionName } />
            <label className="form-check-label overflow-hidden" htmlFor="flexCheckDefault">{ OptionName }</label>  
        </li>
    )
}
