import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

interface LoginComponentProps{
    userID: number;
    userName: string;
    password: string;
    email: string;
}

interface LogProps{
    setUser: (user: LoginComponentProps) => any;

}

const LoginComponent: React.FC<LogProps> = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setEmail('');
        setPassword('');
    }
    
    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    
    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode  === 13) {
            handleSubmit();
        }
    }

    const submit = (email: string, password: string)=> {
        console.log(email, password);
        
        
    }

    const requestUser = () => {
        setLoading(true);
        Axios.post("")
        .then((response) => {
            const user: LoginComponentProps = {
                userID: response.data.userID,
                userName: response.data.userName,
                password: response.data.password,
                email: response.data.email

            };
            props.setUser(user);
            setLoading(false);

        }).catch(err => {
            setLoading(false);
        })
    }



    return (
        <React.Fragment>
            <h2>Login</h2>
            <div className = "LoginContainer">
                <Form>
                    <Form.Group controlId= "LoginCred">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"
                        onChange ={handleInputEmail}
                        onKeyPress = {handleKeyDown}/>
                    </Form.Group>

                    <Form.Group controlId= "LoginCred">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"
                        onChange = {handleInputPassword}
                        onKeyPress = {handleKeyDown}/>
                    </Form.Group>

                    <button 
                    type="submit"
                    className= "btn btn-primary btn-block"
                    //onClick ={(evt) => {evt.preventDefault(); submit( email, password)}}
                    onClick ={() => requestUser()}
                    >Login</button>
                </Form>

                <p className= "NewRegister">Need to <Link to="/register">Register</Link>?</p>
            </div>

        </React.Fragment>
    )
}

export default LoginComponent;