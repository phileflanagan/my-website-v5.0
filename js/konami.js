/* Konami Code Script Created by Phil */

const pressed = [];
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const konamiDiv = document.querySelector('.konami');
const konamiClose = konamiDiv.querySelector('.img-wrap');
konamiClose.addEventListener('click', () => konamiDiv.style.display = 'none')


window.addEventListener('keyup', (e) => {
  console.time('start func')
  pressed.push(e.key);
  pressed.splice(-konami.length - 1, pressed.length - konami.length);
  if(konami.every((v,i)=> v === pressed[i])) {
    konamiDiv.style.display = 'flex';
    console.timeEnd('start func');
  }
});
