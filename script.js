const container = document.getElementById('container')

const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet']
const squares = 500
let count = -1

for(i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => setTimeout( () => {
        removeColor(square)
    }, 2000))

    container.appendChild(square)
}

function setColor(e){
    const color = getColor()
    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(e){
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px black'
}

function getColor(){
   if(count === colors.length - 1){
    count = -1
   }
    count++
    return colors[count]
}