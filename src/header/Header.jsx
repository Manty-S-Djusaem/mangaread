import React, { useState } from 'react';
import module from './Header.module.scss';

function Header(props) {
    const [joinModalOpen, setJoinModalOpen] = useState(false);
    const [signModalOpen, setSignModalOpen] = useState(false);

    const handleOpenJoinModal = () => {
        setJoinModalOpen(true);
    };

    const handleCloseJoinModal = () => {
        setJoinModalOpen(false);
    };

    const handleOpenSignModal = () => {
        setSignModalOpen(true);
    };

    const handleCloseSignModal = () => {
        setSignModalOpen(false);
    };

    return (
        <div className={module.container}>
            <button className={module.openButtonJoin} onClick={handleOpenJoinModal}>
                ВОЙТИ
            </button>

            <button className={module.openButtonSign} onClick={handleOpenSignModal}>
                РЕГИСТРАЦИЯ
            </button>

            {joinModalOpen && (
                <div className={module.joinModalContainer}>
                    <div className={module.joinModal}>
                        <button className={module.closeButton} onClick={handleCloseJoinModal}>
                            Закрыть
                        </button>
                        <div className={module.modalContent}>
                            <h2>Модальное окно ВОЙТИ</h2>
                            <p>Содержимое модального окна ВОЙТИ...</p>
                        </div>
                    </div>
                </div>
            )}

            {signModalOpen && (
                <div className={module.signModalContainer}>
                    <div className={module.signModal}>
                        <button className={module.closeButton} onClick={handleCloseSignModal}>
                            Закрыть
                        </button>
                        <div className={module.modalContent}>
                            <h2>Модальное окно РЕГИСТРАЦИЯ</h2>
                            <p>Содержимое модального окна РЕГИСТРАЦИЯ...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
