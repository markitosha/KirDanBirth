import React, { useState } from 'react';
import './App.css';

// @ts-ignore
const Form = ({ setIframe }) => {
    const [word, setWord] = useState('');
    const [textColor, setTextColor] = useState('#dfff59');
    const [error, setError] = useState(false);

    const onTestClick = () => {
        if (!word) {
            setError(true);
            return;
        }

        setIframe(word, textColor.slice(1).toUpperCase());
    }

    const onWordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setWord(e.target.value);
        setError(!e.target.value);
    }

    return (
        <div>
            <label>
                Вот это объяснение что надо ввести
                <input
                    key='word'
                    type='text'
                    onChange={onWordChange}
                    required
                    className={error ? 'error' : 'valid'}
                    defaultValue={word}
                />
            </label>
            <label>
                Вот это объяснение по цвету
                <input key='color' type='color' onChange={(e) => setTextColor(e.target.value)} defaultValue='#dfff59' />
            </label>
            <button onClick={onTestClick}>Попробовать</button>
        </div>
    );
}

export default Form;
