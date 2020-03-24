import React, { useState } from 'react';
import { UserData } from '../model/userModelBench.component';

interface BenchPyramidProps {
    userData: UserData;
}


const BenchPyramidComponent: React.FC <BenchPyramidProps> = (props) => {
var x = props.userData.maxBench * 0.90;
    
    return(
        <section id="bench-pyramid-display">
            <h2 id="user-name-display">{props.userData.firstname} {props.userData.lastname}</h2>
            <h3> {props.userData.maxBench} Is the new max. This is the affected weight + {x} </h3>

        </section>
    ) 
    
}

export default BenchPyramidComponent;