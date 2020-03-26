import React from 'react'
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreenComponent: React.FC = () => {
    return (
        <React.Fragment>
            <h2>Welcome User</h2>
            <h4>Please enter your daily routine</h4>

          

            <Link to="/statrecords">
                 <button>
                   View Stats history
                 </button>
            </Link>

            <Link to="/benchworkoutPyramid">
                 <button>
                    Bench Pyramid Generator
                 </button>
            </Link> 

            <Link to="/squatworkoutPyramid">
                 <button>
                    Squat Pyramid Generator
                 </button>
            </Link> 
          
        </React.Fragment>
    )
}
export default HomeScreenComponent;
