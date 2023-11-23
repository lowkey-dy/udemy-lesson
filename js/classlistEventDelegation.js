'use stcrict';
// Делегирование событий
   const btns = document.querySelectorAll('button');

    /* cobsole.log(btns[0].classlist.length);
    cobsole.log(btns[0].classlist.item(1));
   console.log(btns[0].classList.add('red'));
   console.log(btns[0].classList.remove('blue'));
   console.log(btns[0].classList.toggle('blue')); */

/*    Если первая кнорка содержит класс 'red'
   if (btns[1].classList.contains('red')) {
    console.log('red');
   } */

// Работает одинаково// Hf,jnftn jlbyfrjdj

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');

});

wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    };
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
