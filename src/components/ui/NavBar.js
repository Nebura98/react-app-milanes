import React       from 'react';
import { NavLink } from 'react-router-dom';
import { Cart }    from "../cart/Cart";

export const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <button 
              className="navbar-toggler mb-2" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <NavLink
                  activeClassName="active bg-primary text-white rounded-bottom ps-2 fw-bold"
                  className="nav-item nav-link"
                  exact
                  to="/productos"
                >
                  Productos
                </NavLink>

                <NavLink
                  activeClassName="active bg-primary text-white rounded-bottom ps-2 fw-bold"
                  className="nav-item nav-link"
                  exact
                  to="/preguntas"
                >
                  Preguntas
                </NavLink>

                <NavLink
                  activeClassName="active bg-primary text-white rounded-bottom ps-2 fw-bold"
                  className="nav-item nav-link"
                  exact
                  to="/contactos"
                >
                  Contactanos
                </NavLink>
                <NavLink
                  activeClassName="active bg-primary text-white rounded-bottom ps-2 fw-bold"
                  className="nav-item nav-link"
                  exact
                  to="/nosotros"
                >
                  Sobre nosotros
                </NavLink>
              </ul>
            </div>
          </div>
          <Cart/>

        </div>
      </nav>
    )
}
