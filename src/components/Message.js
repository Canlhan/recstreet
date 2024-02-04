import React from 'react'
import style from './message.module.css'
import fot  from '../p.jpeg';
const Message = ({text}) => {
  
  return (
   <>
    <div class={style.message_container}>
    <img src={fot} alt="Profil Fotoğrafı" class={style.profil_photo}/>
    <div class={style.message_content}>
        <p class={style.message_text}>{text}</p>
        
    </div>
    </div>
   </>
  )
}

export default Message