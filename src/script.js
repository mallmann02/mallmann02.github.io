let darkModeIsActive = false;

let darkModeButton = document.querySelector('#darkModeButton');
let navBar = document.querySelector('nav');
let navBarUl = document.querySelector('nav > ul');

darkModeButton.addEventListener('click', toggleChangeDarkMode);

function toggleChangeDarkMode() {
  darkModeIsActive = !darkModeIsActive;

  if (darkModeIsActive) {
    body.style.background = '#020922'
    navBar.style.background = '#020922'
    navBarUl.style.color = '#FFF'
    darkModeButton.className = 'darkMode'
  } else {
    body.style.background = '#FFF'
    navBar.style.background = '#FFF'
    navBarUl.style.color = '#000'
    darkModeButton.removeAttribute('class');
  }
}

let body = document.querySelector('body');