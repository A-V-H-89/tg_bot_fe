const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
  };

  console.log(tg.initData, 123)

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
  };
}
