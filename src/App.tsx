import React, {useEffect, useLayoutEffect, useState} from 'react';
// @ts-ignore
import logo from './DAN.JPG';
import './App.css';
import Form from "./Form";

const App: React.FC = () => {
  const [src, setSrc] = useState('about:blank');
  const [data, setData] = useState({ word: '', textColor: '000000' });

  // useEffect(() => {
  //   fetch('http://kirdan.ru', {
  //     mode: 'no-cors',
  //     method: 'post'
  //   });
  // });

  const setIframe = (word: any, textColor: any) => {
    setSrc(`//ntmaker.gfto.ru/newneontext/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=1F1F1F&image_text_color=${textColor}&image_font_shadow_color=${textColor}&image_url=&image_text=Неон Neon&image_font_family=Nickainley&`)
    setData({ word, textColor });
  };

  const sendWord = () => {
    const formData = new FormData();

    formData.append('word', data.word);
    formData.append('textColor', data.textColor);

    fetch('http://kirdan.ru', {
      mode: 'no-cors',
      method: 'post',
      body: formData
    });
  };

  return (
    <div className="App">
        {/*<img src={logo} className="App-logo" alt="Daniil" />*/}
        {/*<div>Даниил, с днем рождения</div>*/}
        <Form setIframe={setIframe} />
        <iframe id='frame' src={src} frameBorder='no' scrolling='no' width="600" height="200" />
        <button onClick={sendWord}>Подтвердить</button>
    </div>
  );
}

export default App;
