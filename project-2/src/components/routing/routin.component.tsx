import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginComponent from '../userinterface/login.components';
import RegisterInputComponent from '../userinterface/registerinput.components';
import HomeScreenComponent from '../userinterface/homescreen.component';
import WorkoutComponent from '../userinterface/statsForm.component';
import WorkoutStatHistory from '../resultform/workoutStats.component';

const RoutingComponent: React.FC = () => {

    return(
        <React.Fragment>
            <Switch>
                <Route path= "/login" component={LoginComponent}></Route>
                <Route path= "/register" component={RegisterInputComponent}></Route>
                <Route path= "/home" component={HomeScreenComponent}></Route>
                <Route path= "/workouts" component={WorkoutComponent}></Route>
                <Route path= "/statrecords" component={WorkoutStatHistory}></Route>
                <Redirect path= "/" to= "/login"></Redirect>
            </Switch>

        </React.Fragment>
    )
}
export default RoutingComponent;