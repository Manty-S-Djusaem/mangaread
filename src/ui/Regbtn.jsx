import React from 'react';
import module from './Authbtn.module.scss'

function Regbtn(props) {
    return (
        <div className={module.main}>
            <div className={module.regBtn}>РЕГИСТРАЦИЯ</div>
        </div>
    );
}

export default Regbtn;