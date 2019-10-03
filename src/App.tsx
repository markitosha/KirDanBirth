import React, { useState } from 'react';
// @ts-ignore
import logo from './DAN.JPG';
// @ts-ignore
import vidos from './ROB.mp4';
import './App.css';
// @ts-ignore
import Step from "./Step.tsx";
import FormStep from "./FormStep";

const steps: any[] = [{
    texts: [
        'Даниил!',
        'Общественное движение ДаНаСРА поздравляет Вас с Днём рождения.'
    ],
    img: logo
},
{
    img: logo,
    texts: ['Для начала мы хотим сказать тебе несколько тёплых слов.', 'Во-первых, мы тебя любим.', 'Во-вторых, каждому из нас есть что тебе сказать.']
}, {
    img: logo,
    texts: ['Текст от Ани']
}, {
    img: logo,
    texts: ['Текст от Наташи']
}, {
    img: logo,
    texts: ['Текст от Сани']
}, {
    video: vidos,
    texts: ['А Роберт не умеет придумывать нормальные поздравления. Поэтому тут честно спизженный эпловский видос. Эпл же сделяль. Че б его не заюзать? Как говорится, вместо тысячи слов, посмотри видос по-братски))',
    'Вообще, по видео видно, что путешествовать с тобой норм тема (ты же уже посмотрел видос?). Хорошо, что через неделю уже мы поедем дальше! Короче, много фигни написал уже)',
    'Во-первых, мы тебя любим. Во-вторых тоже. Погнали дальше!']
}, {
    img: logo,
    texts: [
        'Конечно, ты знаешь, что мы не станем просто так дарить тебе подарок. Простой подарок. Например, прыжок с парашютом или носки - это все банально. Вообще это не подарок, это поздравление. Да и не поздравление, а приятные слова тебе. Ты успешен в работе, в саморазвитии, ты очень много думаешь. Постоянно. Плиз, сегодня просто расслабься и не пытайся рационализировать. Ты в руках надежных друзей, ну ты уже сам все понял. Все, что тебе надо сделать - это закрыть глаза... но не сейчас. Сначала дочитай.'
    ]
}, {
    img: logo,
    texts: [
        'Тебе сегодня 24. Сколько ты успел? Что ожидал от этого возраста? Что получилось? Кажется, получилось многое)', 'Как ты себя ощущаешь?'
    ]
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
            .catch(() => {
            });
    }

    const nextStep = () => {
        setStep(step + 1);
    };

    return <div className="App">
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
