import React, { useState } from 'react';
import './App.css';

// @ts-ignore
const Form = ({ setIframe }) => {
    const [word, setWord] = useState('');
    const [textColor, setTextColor] = useState('#000000');

    const onTestClick = () => {
        setIframe(word, textColor.slice(1).toUpperCase());
    }

    return (
        <div>
            <label>
                Вот это объяснение что надо ввести
                <input key='word' type='text' onChange={(e) => setWord(e.target.value)} />
            </label>
            <label>
                Вот это объяснение по цвету
                <input key='color' type='color' onChange={(e) => setTextColor(e.target.value)} />
            </label>
            <button onClick={onTestClick}>Попробовать</button>
        </div>
    );
}

export default Form;
