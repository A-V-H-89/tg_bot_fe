import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';

function Header() {
  const { user, onClose } = useTelegram();
  const { first_name, last_name, username } = window.Telegram.WebApp.initDataUnsafe.user
  

  return (
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='userName'>{username}</span>
      <p>1{first_name}</p>
      <p>2{last_name}</p>
    </div>
  );
}

export default Header;
