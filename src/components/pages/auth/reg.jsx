import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Reg() {

    const navigation = useNavigate()
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [emailDirty,
        setEmailDirty] = useState();
    const [passwordDirty,
        setPasswordDirty] = useState();
    const [emailError,
        setEmailError] = useState('email не может быть пустым');
    const [passwordError,
        setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid,
        setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError])

    /**Валидация email */

    const emailHandler = useCallback((e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('invalid email')
        } else {
            setEmailError("")
        }
    },[email])

    /**Валидация пароля */

    const passwordHandler = useCallback((e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 16) {
            setPasswordError('Пароль должен содержать не менее 4-х символов и не больше 16')
            if (!e.target.value) {
                setPasswordError('Поле не должно быть пустым')
            }
        } else {
            setPasswordError("")
        }
    },[password])

    const blurHandler = (e) => {

        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break

        }
    }

    /**Регистрация пользователя */

    const RegUser = useCallback(() => {
        let listUser = {
            login: email,
            password: password
        }
        let userData = localStorage.getItem('userData')
        if (!userData) {
            userData = [listUser]
            console.log(userData, '=====', [listUser])
        } else {
             userData = JSON.parse(userData)
             let matchUser = userData.find(u => u.login === email)?.login
            if (matchUser == email) {
                setEmailError('login already use')
            } else {
                userData.push(listUser);
                setEmailError('')
                navigation('/auth')
            }
        }
        localStorage.setItem('userData', JSON.stringify(userData))
        
    },[email, password])

    return (

        <div className="auth">
            <div className="container">

                <div className="auth-form_wrap">
                    <Link to='/auth' className="auth__reg">Авторизоваться</Link>
                    <h1 className="auth-form__title">Регистрация</h1>
                    <form className="auth-form">

                        {(emailDirty && emailError) && <div
                            className="warn"
                            style={{
                            opacity: '1'
                        }}>{emailError}</div>}

                        <input
                            onChange={e => emailHandler(e)}
                            value={email}
                            onBlur={e => blurHandler(e)}
                            type="text"
                            placeholder="Логин"
                            name="email"/>
                        <div>&nbsp; {(passwordDirty && passwordError) && <div
                                className="warn"
                                style={{
                                opacity: '1'
                            }}>{passwordError}</div>}
                        </div>
                        <input
                            onChange={e => passwordHandler(e)}
                            value={password}
                            onBlur={e => blurHandler(e)}
                            type="password"
                            placeholder="Пароль"
                            autoComplete="off"
                            name="password"/>
                        <label><input type="radio" className="agree"/>Я согласен получать обновления на почту</label>
                        <div>&nbsp;</div>
                    </form>
                    <button onClick={RegUser} disabled={!formValid} className="reg-btn">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Reg;