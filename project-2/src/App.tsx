import React, { useState } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutingComponent from './components/routing/routin.component';
import NavibarComponent from './components/routing/navibar.component';
import BenchPyramidComponent from './components/pyramids/workoutBenchPyramid.component'




const App: React.FC = () => {
 
  
  return (
   <React.Fragment>
     <div id= "app">
       <BrowserRouter>
       <NavibarComponent/>
       <RoutingComponent/>
       </BrowserRouter>
       
     </div>
   </React.Fragment>
  )
}

export default App;
