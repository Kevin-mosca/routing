import React from 'react';
const NumberComponent = props => {
    return (
        <div 
        style={{
            'text-align': 'center',
            }}
        >
        { isNaN(props.num) ?

        <p>The Word you entered is: {props.num}</p>
        : <p>You entered: {props.num} number in the route :P</p>
        }
        </div>
    )
}
export default NumberComponent