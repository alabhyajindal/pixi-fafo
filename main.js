import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  backgroundColor: '#ffee00',
});

canvas.appendChild(app.view);

for (let i = 0; i < 300; i++) {
  const graphy = new PIXI.Graphics();
  graphy.beginFill(0xffffff);
  graphy.lineStyle(2, 0x111111);
  graphy.drawRect(0, 0, 100, 45);
  graphy.endFill();

  app.stage.addChild(graphy);

  graphy.x = Math.floor(Math.random() * 500) + 20;
  graphy.y = Math.floor(Math.random() * 500) + 10;

  // Add click handler
  graphy.interactive = true;
  graphy.buttonMode = true;
  graphy.on('pointerdown', onDragStart);
  graphy.on('pointerup', onDragEnd);
  graphy.on('pointerupoutside', onDragEnd);
  graphy.on('pointermove', onDragMove);
}

function onDragStart(event) {
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}

function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  this.data = null;
}

function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}
