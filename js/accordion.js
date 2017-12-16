const accordion = document.getElementsByClassName('accordion')
const panels = document.getElementsByClassName('panel')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    for (let k = 0; k < panels.length; k++) {
      accordion[k].classList.remove('active')
      panels[k].classList.remove('panel--show')
    }

    const panelId = 'panel-' + this.getAttribute('data-accordion')
    const panel = document.getElementById(panelId)
    this.classList.add('active')
    panel.classList.add('panel--show')
  }
}
