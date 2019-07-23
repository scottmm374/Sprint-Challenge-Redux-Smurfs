import React from 'react';


const SmurfList = props => {
    console.log("SmurfList", props)
    const { smurfs } = props
    return (
        <ul>
            {smurfs.map(smurf => {
                return <Smurf
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id} />

            })}
        </ul>
    );
};

export default SmurfList;