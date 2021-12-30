import React from 'react';
import './login.css';
import { loginUrl } from './spotify';

function Login() {

    return (
        <div className='login'>
           <marquee>THIS IS A DEMO CLONE PROJECT ON SPOTIFY MUSIC APP ! HOPE YOU LIKE IT :  KAUSHAL PARMAR </marquee>
            <div className='container'>
           <img src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
           
           <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
           </div>
           
        </div>
    )
}

export default Login;
