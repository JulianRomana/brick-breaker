const canvas = document.querySelector('#canvas')
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height
const GLOBAL_PADDING = 30
const ctx = canvas.getContext('2d')
const raf = (callback) => window.requestAnimationFrame(callback)

const ball = {
  x: CANVAS_WIDTH / 2,
  y: CANVAS_HEIGHT / 2,
  xAxisSpeed: 1,
  yAxisSpeed: 3,
  radius: 10,
  color: 'black',
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  },
}

const plateform = {
  x: (CANVAS_WIDTH / 2) - 35,
  y: CANVAS_HEIGHT - GLOBAL_PADDING,
  width: 70,
  height: 10,
  xAxisSpeed: 20,
  test: this.color,
  color: 'black',
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    if (this.width + this.xAxisSpeed > CANVAS_WIDTH) {
      this.x = CANVAS_WIDTH - this.width
    }
  },
  movePlatform(event) {
    const plateformPositiveEnd = this.x + this.width
    const plateformPositionStart = this.x
    if (event.keyCode === 37) {
      if (plateformPositionStart <= 0) return
      this.x -= this.xAxisSpeed
    }
    if (event.keyCode === 39) {
      if (plateformPositiveEnd >= CANVAS_WIDTH) return
      this.x += this.xAxisSpeed
    }
  },
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ball.draw()
  plateform.draw()
  ball.x += ball.xAxisSpeed
  ball.y += ball.yAxisSpeed

  const ballPostion = {
    x: ball.x += ball.xAxisSpeed,
    y: ball.y += ball.yAxisSpeed,
  }

  if (ballPostion.x > canvas.width - ball.radius || ball.x + ball.xAxisSpeed < 0) {
    ball.xAxisSpeed = -ball.xAxisSpeed
  }
  if (ballPostion.y > canvas.height - ball.radius || ball.y + ball.yAxisSpeed < 0) {
    ball.yAxisSpeed = -ball.yAxisSpeed
  }

  if (
    plateform.y === ballPostion.y
    && (ball.x > plateform.x
    && ball.x < plateform.x + plateform.width + ball.radius)) {
    ball.yAxisSpeed = -ball.yAxisSpeed
  }

  raf(draw)
}

document.addEventListener('keydown', (e) => plateform.movePlatform(e))

raf(draw)
