import React                                                from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar }                                           from '../components/ui/NavBar';
import { AboutUsScreen }                                    from '../screens/AboutUsScreen';
import { ProductScreen }                                    from '../components/product/ProductScreen';
import { CartScreen }                                       from '../components/cart/CartScreen';
import { SearchProduct }                                    from '../components/product/SearchProduct';
import { AskScreen }                                    from '../components/form/AskScreen';
import { FAQScreen }                                        from '../screens/FAQScreen';

export const DashBoardRoute = () => {
    return (
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/productos"               component={ SearchProduct } />
                    <Route exact path= "/productos/:productName" component={ ProductScreen } />
                    <Route exact path="/preguntas"               component={ FAQScreen }     />
                    <Route exact path="/contactos"               component={ AskScreen }  />
                    <Route exact path="/nosotros"                component={ AboutUsScreen } />
                    <Route exact path="/carrito"                 component={ CartScreen }    />
                    <Redirect to="/productos"/>
                </Switch>
            </div>   
        </Router>
    )
}
 