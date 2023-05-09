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

  graphy.x = Math.floor(Math.random() * 600) + 20;
  graphy.y = Math.floor(Math.random() * 500) + 10;
}
