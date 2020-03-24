import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Form, Button } from 'react-bootstrap';

const RegisterInputComponent: React.FC = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
      }
  
      setValidated(true);
    }


    return (
        <React.Fragment>
            <h2>Register</h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit}  >

                    <Form.Group controlId= "Register">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Firstname" required/>
                    </Form.Group>

                    <Form.Group controlId= "Register">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Lastname" required/>
                    </Form.Group>


                    <Form.Group controlId= "Register">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" required/>
                    </Form.Group>


                    <Form.Group controlId= "Register">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" required/>
                    </Form.Group>


                    <Form.Group controlId= "Register">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>

                    <Form.Group controlId="WorkoutChoices">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as= "select" required>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId= "register">
                        <Form.Label>Max Bench</Form.Label>
                        <Form.Control type="number" placeholder="Max Bench" required/>
                    </Form.Group>

                    <Form.Group controlId= "register">
                        <Form.Label>Max Squat</Form.Label>
                        <Form.Control type="number" placeholder="Max Squat" required/>
                    </Form.Group>

                <Button 
                className = "btn btn-primary btn-block"
                type = "submit" 
                >Register</Button>
            </Form>
          
            <p 
            className = "NewRegister">Already Registered <Link to="/login">Sign-in?</Link></p>

        </React.Fragment>
    )
}
export default RegisterInputComponent;