import menuElTpl from '../templates/menu.hbs';
import menuEl from '../menu.json';

const markup = menuElTpl(menuEl);

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('afterbegin', markup);
