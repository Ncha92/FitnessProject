import React from 'react';

interface BenchPyramidProps {
    UserRepMax: 100;
}

const BenchPyramidComponent: React.FC <BenchPyramidProps> = (props) => {
    return(
        <section id="bench-pyramid-display">
            <h2 id="user-name-display"># {props.UserRepMax}</h2>
        </section>
    ) 
    
}

export default BenchPyramidComponent;