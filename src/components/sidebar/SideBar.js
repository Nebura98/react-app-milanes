import React from 'react';
import { SideBarItem } from './SideBarItem';

export const SideBar = () => {
    
    const marcas = ['Black and Decker', 'Bosch verde','Bosch azul','DeWALT','Einhell', 'Evolution', 'Festool', 'Hilti', 'Hitachi HiKoki', 'Imer'];
    const medidas =['Unidad', 'Saco', 'Kilo', 'Litro', 'Gramos', 'Granel', 'Bolsa'];
    const areas = ['Madera', 'Ceramica', 'Herramientas electricas', 'Herramientas manuales', 'Jardinería', ];

    let key = 1;

    return (
        <aside className=" navbar-expand-md col-12 col-md-4 col-lg-3 col-xl-2 p-2 ">
            <div className="mx-auto">
                <button 
                    className="btn btn-secondary bg-secondary navbar-toggler form-control mb-2" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#sideBarMenuFilter" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    Filtros
                </button>
                <div className="collapse navbar-collapse" id="sideBarMenuFilter">
                    <div className="form-control">
                        <section>
                            <h5 className="card-title">Marcas</h5>
                            <ul className="p-2 overflow-auto" style={{maxHeight:250}}>
                                {
                                    marcas.map( marca => (
                                        <SideBarItem
                                            key={ key++ }
                                            OptionName= {marca}
                                        />
                                    ))
                                }
                            
                            </ul>
                        </section>
                        <section>
                            <h5 className="card-title">Departamentos</h5>
                            <ul className="p-2 overflow-auto" style={{maxHeight:250}}>
                                {
                                    areas.map( area => (
                                        <SideBarItem
                                            key={ ++key }
                                            OptionName= {area}
                                        />
                                    ))
                                }
                            </ul>
                        </section>
                        <section>
                            <h5 className="card-title">Medida</h5>
                            <ul className="p-2 overflow-auto" style={{maxHeight:250}}>
                            {
                                medidas.map( medida => (
                                    <SideBarItem 
                                        key={ ++key }
                                        OptionName= { medida }
                                    />
                                ))
                            }
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </aside>
    )
}
