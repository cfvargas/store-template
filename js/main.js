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
const navItems = document.getElementsByClassName('nav__link')
const subNavs = document.getElementsByClassName('subnav')

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function (e) {
    if (e.target.nextSibling.nextSibling.classList.contains('subnav--show')) {
      e.target.nextSibling.nextSibling.classList.remove('subnav--show')
    } else {
      for (let i = 0; i < subNavs.length; i++) {
        subNavs[i].classList.remove('subnav--show')
        e.target.nextSibling.nextSibling.classList.add('subnav--show')
      }
    }
  })
}
