import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
// @ts-ignore
import logo from './DAN.JPG';
import './App.css';
// @ts-ignore
import Step from "./Step.tsx";
import FormStep from "./FormStep";

const steps: any[] = [{
  texts: ['test', 'test', 'test']
}, {
  texts: ['mygod']
}];
let fetched = false;

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [word, setWord] = useState('');
  const [textColor, setColor] = useState('000000');

  if (!fetched) {
    fetch('http://kirdan.ru', {
      mode: 'cors',
      method: 'post',
    })
        .then(async data => {
          const res = await data.json();

          fetched = true;
          setWord(res.image_text);
          setColor(res.image_text_color);
        })
        .catch(() => {});
  }

  const nextStep = () => {
    setStep(step + 1);
  };

  return <div className="App">
    <img src={logo} className="App-logo" alt="Daniil"/>
    <div>Даниил, с днем рождения</div>
    {step === steps.length ?
        <FormStep wordApi={word} textColorApi={textColor} /> :
        <Step data={steps[step]} handleClick={nextStep}/>
    }
  </div>;
}

export default App;
