const navToggleButton = document.querySelector('.nav-toggle');
const mobileNavigation = document.querySelector('nav > ul');

function navToggleClick() {
    if (mobileNavigation.classList.contains('open')) {
        mobileNavigation.classList.remove('open');
    } else {
        mobileNavigation.classList.add('open');
    }
}

navToggleButton.onclick = navToggleClick;
