import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';

function Header() {
  const { user, onClose } = useTelegram();
  const { username } = window.Telegram.WebApp.initDataUnsafe.user
  

  return (
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='userName'>{username}</span>
    </div>
  );
}

export default Header;
