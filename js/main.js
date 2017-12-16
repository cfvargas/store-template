'use strict'

// search
const buttonSearch = document.getElementById('search__button')
const searchInput = document.getElementById('search')

buttonSearch.addEventListener('click', () => {
  searchInput.classList.toggle('search--show')
})

// nav
const navButton = document.getElementById('nav__icon')
const navContainer = document.getElementById('nav__container')

navButton.addEventListener('click', () => {
  navContainer.classList.toggle('nav__container--show')
})

// subnav
const navItems = document.getElementsByClassName('nav__item')
const subNavs = document.getElementsByClassName('subnav')

function toogleNav (e) {
  const item = e.target.childNodes[2]
  item.classList.toggle('subnav--show')
}

for (let i = 0; i < navItems.length -2; i++) {
  navItems[i].addEventListener('mouseenter', toogleNav)
  navItems[i].addEventListener('mouseleave', toogleNav)
}
