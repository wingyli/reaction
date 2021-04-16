// set up our canvas to fill the screen

let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// game logic

let msUntilReady = 2000 + (Math.random() * 3000) // 2-5 seconds of waiting
let msUntilLate = msUntilReady + 1500 // half a second to react

let start = new Date()
let ready = new Date(start.getTime() + msUntilReady)
let late = new Date(start.getTime() + msUntilLate)

window.addEventListener('keydown', event => {
  console.log(event.code)
  if (event.code == 'Enter') {
    let now = new Date()
    if (now < ready) {
      alert('too early!')
    } else if (now > late) {
      alert('too slow!')
    } else {
      alert('YOU WIN!!!')
    }
  }
})

function drawCircle() {
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI)
  ctx.fill()
}

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let length = 100
  ctx.fillStyle = 'purple'
  ctx.fillRect(canvas.width/2 - length/2, canvas.height/2 - length/2, length, length)
}

// todo how to make this graphical?

setTimeout(() => drawCircle(), msUntilReady)
setTimeout(drawSquare, msUntilLate)
