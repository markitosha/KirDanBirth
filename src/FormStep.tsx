import React, {useState} from 'react';
// @ts-ignore
import logo from './DAN.JPG';
import './App.css';
import Form from "./Form";

// @ts-ignore
const FormStep = ({ wordApi = '', textColorApi = '000000' }) => {
    const [src, setSrc] = useState(wordApi ?
        `//ntmaker.gfto.ru/newneontext/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=1F1F1F&image_text_color=${textColorApi}&image_font_shadow_color=${textColorApi}&image_url=&image_text=${wordApi}&image_font_family=Nickainley&` :
        'about:blank'
    );
    const [data, setData] = useState({ word: wordApi, textColor: textColorApi });

    const setIframe = (word: any, textColor: any) => {
        setSrc(`//ntmaker.gfto.ru/newneontext/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=1F1F1F&image_text_color=${textColor}&image_font_shadow_color=${textColor}&image_url=&image_text=${word}&image_font_family=Nickainley&`)
        setData({ word, textColor });
    };

    const sendWord = () => {
        const formData = new FormData();

        formData.append('image_text', data.word);
        formData.append('image_text_color', data.textColor);

        fetch('http://kirdan.ru', {
            mode: 'no-cors',
            method: 'post',
            body: formData
        });
    };

    return (
        <div className="App">
            {!wordApi &&
                <Form setIframe={setIframe} />
            }
            <iframe id='frame' src={src} frameBorder='no' scrolling='no' width="600" height="200" />
            {!wordApi &&
                <button onClick={sendWord}>Подтвердить</button>
            }
        </div>
    );
}

export default FormStep;
