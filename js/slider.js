const sliderContainer = document.getElementsByClassName('slider__container')[0]
const sliderRowLeft = document.getElementById('slider-row-left')
const sliderRowRight = document.getElementById('slider-row-right')

sliderContainer.style.width = (Number(sliderContainer.childElementCount) * 100) + '%'

sliderRowLeft.addEventListener('click', function () {
  const width = Number(sliderContainer.style.width.slice(0, -1))
  const marginLeft = Number(sliderContainer.style.marginLeft.slice(0, -1))
  if (marginLeft >= 0) return
  sliderContainer.style.marginLeft = (marginLeft + 100) + '%'
})

sliderRowRight.addEventListener('click', function() {
  const width = Number(sliderContainer.style.width.slice(0, -1))
  const marginLeft = Number(sliderContainer.style.marginLeft.slice(0, -1))
  if (Math.abs(marginLeft) >= (width - 100)) return
  sliderContainer.style.marginLeft = (marginLeft - 100) + '%'
})
