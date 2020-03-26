import React, { useState } from 'react';
import BenchPyramidComponent from '../pyramids/workoutBenchPyramid.component';
import Axios from 'axios';
import InputComponent from '../userinterface/input.component';
/*
    I want to create a parent and child component
    The parent component will hold state
    and the child component will receive some stateful information
    from the parent component via props.
    The child component will then render that information.
*/

export interface UserData {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    maxbench: number;
    maxsquat: number;
  
  
  }

const UserModelComponent: React.FC = () => {

    const [userData, setUserData] = useState<UserData>({
        id: "0",
        firstname: 'Justin',
        lastname: 'Pennington',
        username: 'justapenn',
        email: 'justapenn@flixnet',
        password: 'password',
        maxbench: 225,
        maxsquat: 270
      });
    
      const [userArr, setUserArr] = useState<UserData[]>([userData]);

      const updateUser = (newValue: any) =>
      {
          // props.updateReimbursemnt(newValue);
          setUserData(newValue);
      }
  
      const userSubmitReceived = (str: string): void=> {
      const url = `http://localhost:8080/users`;

      Axios.get(url)
      .then(response => {
        
        setUserData(response.data)

        // const id = response.data.id;
        // const firstname = response.data.firstname;
        // const lastname = response.data.lastname;
        // const username = response.data.username;
        // const email = response.data.email;
        // const password = response.data.password;
        // const maxbench = response.data.maxbench;
        // const maxsquat = response.data.maxsquat;
      }).catch(err => {
        console.log(err);
      });
    }



    return (
        <React.Fragment>

            <InputComponent
            userSubmitReceived={(str: string) => userSubmitReceived(str)}
            ></InputComponent>
            <BenchPyramidComponent
                userData={userData}
            ></BenchPyramidComponent>
        </React.Fragment>
    );
}

export default UserModelComponent;
