const LISTS = document.querySelector('.lists')
const mainContent = document.querySelector('.main-contents')
const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
  LISTS.classList.toggle('is-open')
mainContent.classList.toggle('is-open')
})