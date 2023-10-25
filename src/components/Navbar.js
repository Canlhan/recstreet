import React from 'react'
import style from './navbar.module.css'
const Navbar = () => {
  return (

    <>
<div className={style.navbar}>
  <div className={style.navbar_menu}>
    <div className={style.select}>
      <label for="city">Şehir:</label>
      <select id="city">
        <option value="istanbul">İstanbul</option>
        <option value="ankara">Ankara</option>
       
      </select>
    </div>
    <div className={style.select}>
      <label for="district">İlçe:</label>
      <select id="district">
        <option value="kadikoy">Kadıköy</option>
        <option value="besiktas">Beşiktaş</option>
        
      </select>
    </div>
    <button className={style.login_button}>Giriş Yap</button>
    <button className={style.signup_button}>Kayıt Ol</button>
  </div>
</div>
    </>
  )
}

export default Navbar