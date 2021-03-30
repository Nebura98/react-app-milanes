import React                 from 'react';
import { PrivateRoute }      from './PrivateRoute';
import { PublicRoute }       from './PublicRoute';
import { DashBoardRoute }    from './DashBoardRoute';
import { CustomItemScreen }  from '../components/customItem/CustomItemScreen';
import { LoginScreen }       from '../components/login/LoginScreen';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact 
                        path="/productos"               
                        component={ DashBoardRoute }
                    />
                    <PublicRoute 
                        exact
                        path ="/dashboard" 
                        component= { CustomItemScreen }
                        isAuthenticated={ true }
                    />
                    <PrivateRoute 
                        exact
                        path ="/login" 
                        component= { LoginScreen } 
                        isAuthenticated={ false }
                    />
                    <Redirect to="/productos"/>

                </Switch>
            </div>
      </Router>
    )
}
