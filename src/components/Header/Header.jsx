import React from 'react';
import Button from '../Button/Button';

function Header() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='userName'>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default Header;
