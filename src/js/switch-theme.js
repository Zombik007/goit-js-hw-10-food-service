const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const pageTheme = document.querySelector('body');
const themeSwitchCheckbox = document.querySelector('#theme-switch-toggle');

themeSwitchCheckbox.addEventListener('change', e => {
  if (e.target.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
});

function setThemeSwitchCheckbox() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    pageTheme.classList.add(Theme.DARK);
    themeSwitchCheckbox.setAttribute('checked', 'true');
  } else {
    pageTheme.classList.add(Theme.LIGHT);
  }
}

function replaceTheme(oldTheme, newTheme) {
  pageTheme.classList.add(newTheme);
  pageTheme.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

setThemeSwitchCheckbox();
