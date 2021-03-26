import React                               from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen }                     from '../components/login/LoginScreen';
import { DashBoardRoute }                  from './DashBoardRoute';
import { PrivateRoute }                    from './PrivateRoute';
import { PublicRoute }                     from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        path ="/" 
                        component= { DashBoardRoute }
                    />
                    <PrivateRoute 
                        exact
                        path ="/login" 
                        component= { LoginScreen } 
                        isAuthenticated={ false }
                    />
                </Switch>
            </div>
      </Router>
    )
}
