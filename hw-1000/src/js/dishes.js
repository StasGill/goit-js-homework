import menu from './menu';
import menuData from '../templates/dish.hbs';
const newSwitch = document.querySelector(".switch__input");
const newBody = document.body;


const newMenu = menuData(menu) ;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const idMenu = document.getElementById('menu');

idMenu.insertAdjacentHTML('afterbegin',newMenu);

if (localStorage.getItem('Theme') === null) {
  localStorage.setItem('Theme', `${Theme.LIGHT}`)
}
if (localStorage.getItem('Theme') === Theme.DARK) {
  newBody.classList.add("dark-theme");
  newSwitch.checked = true;
}
if (localStorage.getItem('Theme') === Theme.LIGHT) {
  newBody.classList.add("light-theme");
  newSwitch.checked = false;
}




newSwitch.addEventListener("input", e => {

  if (newSwitch.checked === true) {

    newBody.classList.remove("light-theme");
    newBody.classList.add("dark-theme");
    localStorage.setItem('Theme', `${Theme.DARK}`)
    // newSwitch.checked = false
    // localStorage.setItem('checked', `${false}`)
}


  else{
    newBody.classList.remove("dark-theme");
    newBody.classList.add("light-theme");
    localStorage.setItem('Theme', `${Theme.LIGHT}`)
    newSwitch.checked = false;
    // localStorage.setItem('checked', `${false}`)

  }
 });
