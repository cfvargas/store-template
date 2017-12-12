'use strict'

const galleryList = document.getElementsByClassName('gallery__list__item')
const galleryPrimary = document.getElementById('galleryPrimary')

for (let i = 0; i < galleryList.length; i++) {
  galleryList[i].addEventListener('click', (e) => {
    const src = e.target.src
    galleryPrimary.src = src
  })
}
