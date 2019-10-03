import React, {useState} from 'react';
import './App.css';
import Form from "./Form";

// @ts-ignore
const FormStep = ({ wordApi = '', textColorApi = '000000' }) => {
    const [src, setSrc] = useState(wordApi ?
        `//ntmaker.gfto.ru/newneontext/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=000000&image_text_color=${textColorApi}&image_font_shadow_color=${textColorApi}&image_url=&image_text=${wordApi}&image_font_family=Nickainley&` :
        'about:blank'
    );
    const [data, setData] = useState({ word: wordApi, textColor: textColorApi });
    const [selectForm, setSelectForm] = useState(wordApi ? false : true);
    const [liked, setLiked] = useState(wordApi ? true : false);

    const setIframe = (word: any, textColor: any) => {
        setSrc(`//ntmaker.gfto.ru/newneontext/?image_height=200&image_width=600&image_font_shadow_width=30&image_font_size=80&image_background_color=000000&image_text_color=${textColor}&image_font_shadow_color=${textColor}&image_url=&image_text=${word}&image_font_family=Nickainley&`)
        setData({ word, textColor });
        if (word) {
            setSelectForm(false);
        }
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
        setLiked(true);
    };

    const handleBack = () => {
        setSelectForm(true);
    };

    return (
        <div className="App">
            {!wordApi && selectForm &&
                <Form setIframe={setIframe} />
            }
            {!selectForm && <iframe id='frame' src={src} frameBorder='no' scrolling='no' height="300px"/>}
            <div className='buttons'>
                {!selectForm && !wordApi && !liked && <button onClick={handleBack}>Назад</button>}
                {!selectForm && !wordApi && !liked && <button onClick={sendWord}>Мне нравится</button>}
            </div>
            {liked && <p>Текст про то что мечты сбываются</p>}
        </div>
    );
}

export default FormStep;
