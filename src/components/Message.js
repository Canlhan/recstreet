import React from 'react'
import style from './message.module.css'
import fot  from '../p.jpeg';
const Message = () => {
  return (
   <>
    <div class={style.message_container}>
    <img src={fot} alt="Profil Fotoğrafı" class={style.profil_photo}/>
    <div class={style.message_content}>
        <p class={style.message_text}>Bu bir örnek mesajdır dfgdfgdfgsdfgsdfgsdfgdsgfdsgdfgsdgdsgdsgdsgdgdsg ds.</p>
        
    </div>
    </div>
   </>
  )
}

export default Message