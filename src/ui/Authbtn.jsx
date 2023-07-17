import React from 'react';
import module from './Authbtn.module.scss'

function Authbtn(props) {
    return (
        <div className={module.main}>
            <div className={module.authBtn}>ВХОД</div>
        </div>
    );
}

export default Authbtn;