import React, { useState } from 'react';
import { UserData } from '../model/userModelBench.component';

interface BenchPyramidProps {
    userData: UserData;
}


const BenchPyramidComponent: React.FC <BenchPyramidProps> = (props) => {
    var tens = props.userData.maxbench * 0.55;
    var eights = props.userData.maxbench * 0.65;
    var sixes = props.userData.maxbench * 0.75;
    var fours = props.userData.maxbench * 0.85;
    var twos = props.userData.maxbench * 0.90;
    
    return(
        <section id="bench-pyramid-display">
            <h2 id="user-name-display">{props.userData.firstname} {props.userData.lastname}</h2>
            <h3> {props.userData.maxbench} Is what we will calculate the workout below with. </h3>
            <h4>Do ten times: {tens} </h4>
            <h4>Do eight times: {eights} </h4>
            <h4>Do six times: {sixes} </h4>
            <h4>Do four times: {fours} </h4>
            <h4>Do two times: {twos} </h4>

        </section>
    ) 
    
}

export default BenchPyramidComponent;