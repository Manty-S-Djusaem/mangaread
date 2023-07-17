import React, { useState } from 'react';
import module from './Checkmark.module.scss';
import checkmark from '../assets/checkmark.png';

function SquareButton(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={module.squareButton}>
      <button className={`${module.button} ${isChecked ? module.checked : ''}`} onClick={handleClick}>
        {isChecked && <img src={checkmark} className={module.checkmark} alt="Checkmark" />}
      </button>
      <span className={module.text}>Запомнить меня</span>
    </div>
  );
}

export default SquareButton;
