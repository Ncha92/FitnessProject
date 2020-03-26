import React, { useState, Props } from 'react';
import { UserData } from '../model/userModelSquat.component';

interface SquatPyramidProps {
    userData: UserData;
}


const SquatPyramidComponent: React.FC <SquatPyramidProps> = (props) => {
var tens = props.userData.maxsquat * 0.55;
var eights = props.userData.maxsquat * 0.65;
var sixes = props.userData.maxsquat * 0.75;
var fours = props.userData.maxsquat * 0.85;
var twos = props.userData.maxsquat * 0.90;
    
    return(
        <section id="squat-pyramid-display">
            <h2 id="user-name-display">Welcome, {props.userData.firstname} {props.userData.lastname} here is your workout set</h2>
            <h3> {props.userData.maxsquat} Is what we will calculate the workout below with. </h3>
            <h4>Do ten times: {tens} </h4>
            <h4>Do eight times: {eights} </h4>
            <h4>Do six times: {sixes} </h4>
            <h4>Do four times: {fours} </h4>
            <h4>Do two times: {twos} </h4>

        </section>
    ) 
    
}

export default SquatPyramidComponent;