import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';

function Header() {
  const { user, onClose } = useTelegram();
  const tg = window.Telegram.WebApp
  console.log(tg.initDataUnsafe, 256)

  return (
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='userName'>1{user}</span>
    </div>
  );
}

export default Header;
