import React from 'react';

const WordComponent = (props) =>{

    return(
        <div
            style={{
            color: props.textColor || 'black',
            backgroundColor: props.backgroundColor || 'white',
            'text-align': 'center',
            }}
        >
            The Word is {props.word}
        </div>
    )
}
export default WordComponent