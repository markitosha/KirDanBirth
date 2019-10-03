import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
// @ts-ignore
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

// @ts-ignore
const FormStep = ({ wordApi = '', textColorApi = '000000' }) => {
    const [src, setSrc] = useState(wordApi ?
        `//ntmaker.gfto.ru/newneontext/?image_height=${window.innerHeight}&image_width=${window.innerWidth}&image_font_shadow_width=30&image_font_size=100&image_background_color=000000&image_text_color=${textColorApi}&image_font_shadow_color=${textColorApi}&image_url=&image_text=${wordApi}&image_font_family=Nickainley&` :
        'about:blank'
    );
    const [data, setData] = useState({ word: wordApi, textColor: textColorApi });
    const [selectForm, setSelectForm] = useState(wordApi ? false : true);
    const [liked, setLiked] = useState(wordApi ? true : false);

    const setIframe = (word: any, textColor: any) => {
        setSrc(`//ntmaker.gfto.ru/newneontext/?image_height=${window.innerHeight}&image_width=${window.innerWidth}&image_font_shadow_width=30&image_font_size=100&image_background_color=000000&image_text_color=${textColor}&image_font_shadow_color=${textColor}&image_url=&image_text=${word}&image_font_family=Nickainley&`)
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
            <div>
                {!selectForm && <motion.iframe
                    id='frame' src={src} frameBorder='no' scrolling='no' width={window.innerWidth} height={window.innerHeight}
                    initial="hidden" animate="visible" variants={variants} transition={{ duration: 2 }}
                />}
                <div className='buttons'>
                    {!selectForm && !wordApi && !liked &&
                    <motion.button onClick={handleBack} initial="hidden" animate="visible" variants={variants} transition={{ duration: 2 }}>Назад</motion.button>
                    }
                    {!selectForm && !wordApi && !liked &&
                    <motion.button onClick={sendWord} initial="hidden" animate="visible" variants={variants} transition={{ duration: 2 }}>Мне нравится</motion.button>
                    }
                </div>
                {liked && <motion.p initial="hidden" animate="visible" variants={variants} transition={{ duration: 2 }}>
                    Помнится, ты говорил, что это прикольно) мы тоже так подумали. Скоро у тебя появится такая настоящая! Надеемся, что она будет тебя вдохновлять и мотивировать в любом месте, куда ты ее повесишь 😍 Классные мы?
                    Помимо шуток, хотим тебе сказать, что рады дружбе с тобой, желаем гармонии, дзена, отдыха, интересных задач, новых мест и удовольствия ото всего, что ты делаешь. Мы рядом и очень тебя любим♥️
                </motion.p>}
            </div>
        </div>
    );
}

export default FormStep;
