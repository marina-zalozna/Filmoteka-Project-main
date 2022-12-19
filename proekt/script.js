document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
    //ваша функция закрытия окна
    document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
    }
    });

    // function handleClick(event) {
    //     console.log('Клик!')
      
    //     // Сразу же очищаем после вызова функции,
    //     // обработчик сработает только один раз
    //     window.removeEventListener('click', handleClick)
    //   }
      
    //   window.addEventListener('click', handleClick)
      