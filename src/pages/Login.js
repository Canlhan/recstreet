import React from 'react'
import style from './login.module.css';

const Login = () => {

  return (
    <>
    <div className={style.login_container}>
        <h2>Giriş Yap</h2>
        <form action="giris.php" method="POST" className={style.form}>
            <div className={style.input_container}>
                <label for="username">Kullanıcı Adı:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className={style.input_container}>
                <label for="password">Şifre:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Giriş Yap</button>
        </form>
    </div>
    </>
  )
}

export default Login