document.addEventListener('DOMContentLoaded', () => {
    main();
})

const main = () => {
    loadFonts();

    menuToggler();

    showLastModified();

    getCurrentYear();
}

function loadFonts() {
    //Loading Urbanist font
    WebFont.load({
        google: {
            families: ['Urbanist: 300, 400, 700, 900']
        }
    });
}

/* This function handles the toggle-menu button for the hamburguer menu */
function menuToggler() {
    const togglerBtn = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');
    const navContainer = document.querySelector('.navigation');
    /* When user clicks button, the toggleMenu function is called */
    togglerBtn.addEventListener('click', () => {
        toggleMenu(menu, navContainer);
    })

    function toggleMenu(menu, navContainer) {
        navContainer.classList.toggle('opened');
        menu.classList.toggle('hide');
    }
}

function showLastModified() {
    //Span containing last updated date
    const $lastModified = document.querySelector('#lastModified');

    let lastModified = new Date(document.lastModified);
    let day = lastModified.getDate();
    let month = lastModified.getMonth() + 1;
    let year = lastModified.getFullYear();
    let time = lastModified.toLocaleTimeString();

    lastModified = `${month}/${day}/${year} ${time}`;

    $lastModified.textContent = lastModified
}

function getCurrentYear() {
    let today = new Date();
    let year = today.getFullYear();
    let $currentYear = document.querySelector('#currentYear');
    $currentYear.textContent = year;
}