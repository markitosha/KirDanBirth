import React from 'react';
import './App.css';

// @ts-ignore
const Step = ({ data, handleClick }) => {
    return <React.Fragment>
        <img src={data.img} height='250' />
        {data.texts.map(
            (text: any, index: any) => <p key={index}>{text}</p>
        )}
        <button onClick={handleClick}>Далее</button>
    </React.Fragment>
};

export default Step;
