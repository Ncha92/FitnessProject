import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginComponent from '../userinterface/login.components';
import RegisterInputComponent from '../userinterface/registerinput.components';
import HomeScreenComponent from '../userinterface/homescreen.component';
import WorkoutComponent from '../userinterface/statsForm.component';
import WorkoutStatHistory from '../resultform/workoutStats.component';
import BenchPyramidComponent from '../pyramids/workoutBenchPyramid.component'
import UserModelComponent from '../model/userModelBench.component';
import UserModelBenchComponent from '../model/userModelBench.component';
import UserModelSquatComponent from '../model/userModelSquat.component';

const RoutingComponent: React.FC = () => {
    
    return(

        <React.Fragment>
            <div className="auth-wrapper">
                <div className="auth-inner">
            <Switch>
                <Route path= "/login" component={LoginComponent}></Route>
                <Route path= "/register" component={RegisterInputComponent}></Route>
                <Route path= "/home" component={HomeScreenComponent}></Route>
                <Route path= "/benchworkoutPyramid" component={UserModelBenchComponent}></Route>
                <Route path= "/squatworkoutPyramid" component={UserModelSquatComponent}></Route>
                <Route path= "/statrecords" component={WorkoutStatHistory}></Route>
                {/* <Redirect path= "/" to= "/login"></Redirect> */}
            </Switch>
            </div>
                </div>
        </React.Fragment>
    )
}
export default RoutingComponent;