const justSitesLink = document.querySelector('.just-sites-a');
const clickHereImage = document.querySelector('.click-here');

justSitesLink.addEventListener('click', () => {
  clickHereImage.classList.add('clicked');
});
