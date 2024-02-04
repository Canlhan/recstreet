import React from 'react'
import style from './signup.module.css'

const SignUp = () => {
  return (
   <>
    <div className={style.login_container}>
    <h2>üye girişi</h2>
    <form>
      <div className={style.form_group}>
        <label for="ad">Ad:</label>
        <input type="text" id="ad" name="ad" required/>
      </div>
      <div className={style.form_group}>
        <label for="soyad">Soyad:</label>
        <input type="text" id="soyad" name="soyad" required/>
      </div>
      <div className={style.form_group}>
        <label for="tcKimlik">TC Kimlik:</label>
        <input type="text" id="tcKimlik" name="tcKimlik" required/>
      </div>
      <div className={style.form_group}>
        <label for="dogumTarihi">Doğum Tarihi:</label>
        <input type="date" id="dogumTarihi" name="dogumTarihi" required/>
      </div>
      <div className={style.form_group}>
        <label for="adres">Adres:</label>
        <textarea id="adres" name="adres" rows="4" required></textarea>
      </div>
      <div className={style.form_group}>
        <label for="kullaniciAdi">Kullanıcı Adı:</label>
        <input type="text" id="kullaniciAdi" name="kullaniciAdi" required/>
      </div>
      <div className={style.form_group}>
        <label for="pass">Şifre</label>
        <input type="text" id="pass" name="pass" required/>
      </div>
      <button type="submit">Kayıt ol</button>
    </form>
  </div>
   </>
  )
}

export default SignUp