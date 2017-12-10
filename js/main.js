'use strict'

// search
const button = document.getElementById('search__button')
const search = document.getElementById('search')

button.addEventListener('click', () => {
  search.classList.toggle('search--show')
})

// nav

const navButton = document.getElementById('nav__icon')
const navContainer = document.getElementById('nav__container')

navButton.addEventListener('click', () => {
  navContainer.classList.toggle('nav__container--show')
})
