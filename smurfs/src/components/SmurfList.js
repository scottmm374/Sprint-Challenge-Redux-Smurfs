import React from 'react';


const  SmurfList = props =>  {
    console.log("SmurfList", props)
    const { smurfs } = props
    return (
        <ul>
            { smurfs.map(smurf => {
                return <Smurf  key={smurf.name} smurf={smurf} />
                
            })}
        </ul>
    );
};

export default SmurfList;