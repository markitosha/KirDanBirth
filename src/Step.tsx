import React from 'react';
import './App.css';

// @ts-ignore
const Step = ({ data, handleClick }) => {
    return <React.Fragment>
        {data.texts.map(
            (text: any, index: any) => <div key={index}>{text}</div>
        )}
        <button onClick={handleClick}>Далее</button>
    </React.Fragment>
};

export default Step;
