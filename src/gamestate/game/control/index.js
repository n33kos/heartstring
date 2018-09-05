export default class {
  constructor(Game) {
    this.direction = 1;
    this.Game = Game;
    this.isMouseDown = false;
    this.oldMousePos = 0;
    this.pressedKeys = [];
    this.rotationSpeed = 6;
  }

  init() {
    // Mouse
    document.body.addEventListener("mousemove", this.handleMouseMove.bind(this));
    document.body.addEventListener("mousedown", e => {
      this.isMouseDown = true;
      this.oldMousePos = e.clientX;
      this.direction = e.clientY > this.Game.ctx.canvas.height/2 ? -1 : 1;
    });
    document.body.addEventListener("mouseup", e => { this.isMouseDown = false; });

    // Touch
    document.addEventListener('touchmove', this.handleTouchMove.bind(this));
    document.addEventListener('touchstart', e => {
      this.isMouseDown = true;
      this.oldMousePos = e.targetTouches[0].clientX;
      this.direction = e.targetTouches[0].clientY > this.Game.ctx.canvas.height/2 ? -1 : 1;
    });
    document.body.addEventListener("touchend", e => { this.isMouseDown = false; });

    // Keys
    document.onkeydown = this.handleKeyDown.bind(this);
    document.onkeyup = this.handleKeyUp.bind(this);
  }

  handleTouchMove(e) {
    if (!this.isMouseDown || this.Game.isPaused) return;

    for (let i=0; i < e.targetTouches.length; i++) {
      this.Game.momentum += (this.oldMousePos - e.targetTouches[i].clientX) * this.direction * this.Game.deltaTime;
      this.oldMousePos = e.targetTouches[i].clientX;
    }
  }

  handleMouseMove(e) {
    if (!this.isMouseDown || this.Game.isPaused) return;

    this.Game.momentum += (this.oldMousePos - e.clientX) * this.direction * this.Game.deltaTime;
    this.oldMousePos = e.clientX;
  }

  handleKeyDown(e) {
    if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
  }

  handleKeyUp(e) {
    const index = this.pressedKeys.indexOf(e.keyCode);
    if (index > -1) this.pressedKeys.splice(index, 1);
  }

  handlePressedKeys() {
    // left arrow
    if (this.pressedKeys.includes(37)) {
      this.Game.momentum += this.rotationSpeed * this.Game.deltaTime;
    }
    // right arrow
    if (this.pressedKeys.includes(39)) {
      this.Game.momentum -= this.rotationSpeed * this.Game.deltaTime;
    }
  }
}
