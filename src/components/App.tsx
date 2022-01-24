import React, { useState, useEffect } from 'react';
import Step from './Step';
import FormStep from './FormStep';
import { steps } from '../constants';

const App: React.FC = () => {
    const [step, setStep] = useState(0);
    const [word, setWord] = useState('');
    const [textColor, setColor] = useState('000000');

    useEffect(() => {
        fetch('https://kirdan.ru', {
            mode: 'cors',
            method: 'post',
        })
            .then(async data => {
                const res = await data.json();

                setWord(res.image_text);
                setColor(res.image_text_color);
            })
            .catch(() => {});
    }, []);

    const nextStep = () => {
        setStep(step + 1);
    };

    return <div className='App'>
        <main>
            {step === steps.length ?
                <FormStep wordApi={word} textColorApi={textColor}/> :
                <Step data={steps[step]} handleClick={nextStep} key={step} />
            }
        </main>
        <footer>Created by danasra (c) 2019</footer>
    </div>;
}

export default App;
