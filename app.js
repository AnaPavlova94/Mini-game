const board = document.querySelector('#board')
const colors = ['#FF69B4', '#20B2AA', '#7B68EE', '#FFD700', '#00FA9A']
const SQUARES_NOMBER = 500

for (let i = 0; i < SQUARES_NOMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)

}

function setColor(element) {
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #0000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)

  return colors[index]
}