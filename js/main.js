'use strict'

// nav
const button = document.getElementById('search__button')
const search = document.getElementById('search')

button.addEventListener('click', () => {
  search.classList.toggle('search--show')
})
