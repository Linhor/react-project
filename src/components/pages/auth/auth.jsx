import React, {useRef} from "react";
import {useDispatch} from 'react-redux';
import {logIn} from "../../../store/reducers/login";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Auth() {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const email = useRef()
    const password = useRef()
    const errLogin = useRef()
    const errPass = useRef()
    const errMain = useRef()
    /** Проверка данных пользователя и последующий вход */
    const logIn1 = () => {

        const getUserData = JSON.parse(localStorage.getItem('userData'))
        let matchUser = getUserData.find(u => u.login === email.current.value)
        if (email.current.value == '') {
            errLogin.current.style.opacity = "1";
            errPass.current.style.opacity = "0";
            errMain.current.style.opacity = "0";
            if (password.current.value == '') {
                errPass.current.style.opacity = "1";
                errMain.current.style.opacity = "0";
            }
        } else if (password.current.value == '') {
            errPass.current.style.opacity = "1";
            errMain.current.style.opacity = "0";
            errLogin.current.style.opacity = "0";
        } else if (getUserData == null || matchUser == undefined || password.current.value != matchUser.password) {
            errMain.current.style.opacity = "1";
            errLogin.current.style.opacity = "0";
            errPass.current.style.opacity = "0";
        } else if (email.current.value == matchUser.login && password.current.value == matchUser.password) {
            localStorage.setItem('authData', 'true')
            dispatch(logIn())
            navigation('/')
        }
    }

    return (

        <div className="auth">
            <div className="container">
                <div className="auth-form_wrap">
                    <Link to='/reg' className="auth__reg">Зарегистрироваться</Link>
                    <h1 className="auth-form__title">Вход</h1>
                    <form className="auth-form">
                        <input type="text" placeholder="Логин" ref={email}/>
                        <div className="warn" ref={errLogin}>Поле не может быть пустым</div>
                        <input type="password" placeholder="Пароль" ref={password} autoComplete="off"/>
                        <div className="warn" ref={errPass}>Поле не может быть пустым</div>
                        <label><input type="radio" className="agree"/>Я согласен получать обновления на почту</label>
                        <div className="warn" ref={errMain}>Логин или пароль неверен</div>
                    </form>
                    <button onClick={logIn1}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;
