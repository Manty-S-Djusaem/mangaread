import React, { useState } from 'react';
import module from './Header.module.scss';
import close from '../assets/close.png'
import Checkmark from '../checkmark/Checkmark'
import Auth from '../ui/Authbtn'
import Reg from '../ui/Regbtn'
import Photo from '../assets/Photo.png'
import { Typography } from '@mui/material';


function Header(props) {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('join'); // 'join' - по умолчанию

  const handleOpenJoinModal = () => {
    setJoinModalOpen(true);
    setActiveTab('join');
  };

  const handleCloseJoinModal = () => {
    setJoinModalOpen(false);
  };

  const handleOpenRegModal = () => {
    setRegModalOpen(true);
    setActiveTab('register');
  };

  const handleCloseRegModal = () => {
    setRegModalOpen(false);
  };

  return (
    <div className={module.container}>
      <button className={module.openButtonJoin} onClick={handleOpenJoinModal}>
        ВОЙТИ
      </button>

      <button className={module.openButtonReg} onClick={handleOpenRegModal}>
        РЕГИСТРАЦИЯ
      </button>

      {joinModalOpen && (
        <div className={module.joinModalContainer}>
          <div className={module.joinModal}>
            <button className={module.closeButton} onClick={handleCloseJoinModal}>
              <img src={close} className={module.clsbtn}></img>
            </button>
            <span className={module.mouletext}>
              <h1 className={module.hedtext + (activeTab === 'join' ? ' active' : '')}>Вход</h1>
              <h1 className={module.hedtext1 + (activeTab === 'register' ? ' active' : '')}>Регистрация</h1>
            </span>
            <div
              className={`underline ${activeTab === 'join' ? 'active' : ''}`}
              style={{ width: '71px', borderBottom: '5px solid #AD02E0', marginLeft: '51px', marginTop: '-12px'}}
            ></div>
            <div className={module.modalContent}>
              <input type='Username' placeholder='Username' />
              <div className={module.modalContent2}>
                <input type='Password' placeholder='Password' />
              </div>
              <Checkmark />
            </div>
            <Auth />
          </div>
        </div>
      )}

      {regModalOpen && (
        <div className={module.RegModalContainer}>
          <div className={module.RegModal}>
            <button className={module.closeButton} onClick={handleCloseRegModal}>
              <img src={close} className={module.clsbtn}></img>
            </button>
            <span className={module.mouletext}>
              <h1 className={module.hedtext + (activeTab === 'join' ? ' active' : '')}>Вход</h1>
              <h1 className={module.hedtext1 + (activeTab === 'register' ? ' active' : '')}>Регистрация</h1>
            </span>
            <div
              className={`underline ${activeTab === 'register' ? 'active' : ''}`}
              style={{ width: '164px', borderBottom: '5px solid #AD02E0', marginLeft: '142px', marginTop: '-12px'}}
            ></div>
            <div className={module.modalContent}>
              <img src={Photo} className={module.photoReg} />
              <h1 className={module.photoText}>ДОБАВИТЬ ФОТО</h1>
              <div className={module.inputs}>
                <div className={module.modalContent3}>
                  <input type='Username' placeholder='Username' />
                </div>
                <div className={module.modalContent4}>
                  <input type='Username' placeholder='Nickname' />
                </div>
                <div className={module.modalContent5}>
                  <input type='Password' placeholder='Password' />
                </div>
              </div>
            </div>
            <Reg />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
