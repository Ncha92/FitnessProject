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

            <Link to="/workouts">
                 <button>
                    Workout Stat Form
                 </button>
            </Link> 
          
        </React.Fragment>
    )
}
export default HomeScreenComponent;
