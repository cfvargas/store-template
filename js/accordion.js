var accordion = document.getElementsByClassName('accordion')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    this.classList.toggle('active')

    var panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  }
}
