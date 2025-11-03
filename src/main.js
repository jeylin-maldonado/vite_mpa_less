import './styles.less'

const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open')
  })
}
