import React, { useState } from 'react';
import './App.css';
// @ts-ignore
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

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
        <motion.div className='form' initial="hidden" animate="visible" variants={variants} transition={{ duration: 2 }}>
            <label>
                Поделись с нами этим словом. <b>Прямо здесь. Прямо сейчас.</b>
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
                Неплохо. Как насчёт цветов? Когда ты видишь это слово. С каким цветом оно ассоциируется?
                <input key='color' type='color' onChange={(e) => setTextColor(e.target.value)} defaultValue='#dfff59' />
            </label>
            <button onClick={onTestClick}>Дальше</button>
        </motion.div>
    );
}

export default Form;
