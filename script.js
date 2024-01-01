const toggleButton = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('linki')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})