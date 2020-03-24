import React, { useState } from 'react';
import BenchPyramidComponent from '../pyramids/workoutBenchPyramid.component';
/*
    I want to create a parent and child component
    The parent component will hold state
    and the child component will receive some stateful information
    from the parent component via props.
    The child component will then render that information.
*/

export interface UserData {
    userId: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    maxBench: number;
    maxSquat: number;
  
  
  }

const UserModelComponent: React.FC = () => {

    const [userData, setUserData] = useState<UserData>({
        userId: 0,
        firstname: 'Justin',
        lastname: 'Pennington',
        username: 'justapenn',
        email: 'justapenn@flixnet',
        password: 'password',
        gender: 'male',
        maxBench: 225,
        maxSquat: 270
      });
    
      const [userArr, setUserArr] = useState<UserData[]>([userData]);
    return (
        <React.Fragment>
            
            <BenchPyramidComponent
                userData={userData}
                // Wrapping multiple values into an object
                // name={name, valueA, valueB}

                // Passing an object to props
                // name=data
            ></BenchPyramidComponent>
        </React.Fragment>
    );
}

export default UserModelComponent;
