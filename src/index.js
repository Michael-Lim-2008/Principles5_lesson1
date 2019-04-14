import Phaser from "phaser";
import logoImg from "./assets/ball.jpg";
import person from "./assets/kenney_platformercharacters/PNG/Player/Poses/player_stand.png"; 

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1000,
  height: 700,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
  this.load.image("person", "./assets/kenney_platformercharacters/PNG/Player/Poses/player_stand.png")
}

function create() {
  let logo = this.add.image(400, 150, "person");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
