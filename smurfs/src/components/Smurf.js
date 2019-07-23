import React from 'react';


const Smurf = props => {
    console.log("smurf", props)
    return (
        <div>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.height}</li>
            
        </div>
    
    )}

    export default Smurf;