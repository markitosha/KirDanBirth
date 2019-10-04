import React from 'react';
import './App.css';
// @ts-ignore
import { Player } from 'video-react';
// @ts-ignore
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

// @ts-ignore
const Step = ({ data, handleClick }) => {
    return <motion.div initial='hidden' animate='visible' variants={variants} transition={{ duration: 2 }}>
        {data.img ?
            <img src={data.img}/> :
            <Player playsInline src={data.video} fluid={false} height={400} width={Math.min(window.innerWidth, 600)} />
        }
        {data.id &&
            <p><s>Текст от Сани</s>. Цвети и пахни</p>
        }
        {!data.id && data.texts.map(
            (text: any, index: any) => <p key={index}>{text}</p>
        )}
        <button onClick={handleClick}>Далее</button>
    </motion.div>
};

export default Step;
