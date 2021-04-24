/* hamburger bestimmen */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.navRight ul');

/* jedes mal wenn ich auf den burger klicke, soll die navbar ausgeklappt werden */
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    console.log('clicked');
});