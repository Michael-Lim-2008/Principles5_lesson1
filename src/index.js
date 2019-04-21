import Phaser from "phaser";
import logoImg from "./assets/ball.jpg";
import person from "./assets/kenney_platformercharacters/PNG/Player/Poses/player_stand.png"; 


let gameState = {

}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1000,
  height: 700,
  scene: {
    preload: preload,
    create: create,
    update:update,
  }
};

const game = new Phaser.Game(config);

function preload() {
  
}

function create() {
  gameState.circle = this.add.circle(100,100,90,0x00FF00)
  gameState.rectangle = this.add.rectangle(200,200,200,200,0x00FF00)
  this.add.text(0,0,"My Adventure in q xgwcrbjs,hqxhfcgk", {font: "40px Arial",fill: "green", wordWrap: {width:700, useAdvancedWrap: true}})
  gameState.circle.setInteractive()
  gameState["keyboard"] = this.input.keyboard.createCursorKeys()
  gameState.circle.on("pointerup",function(event){
    if (this.fillColor === 0x0000FF )
      {
      this.fillColor = 0x00FF00
    }else{
      this.fillColor = 0x0000FF
    }

  })
}

function update() {
//circle.x += 1

if (gameState["keyboard"].left.isDown){
  gameState["rectangle"].x -= 5
  gameState["rectangle"].rotation += 0.05
}
if (gameState["keyboard"].right.isDown){
    gameState["rectangle"].x += 5
    gameState["rectangle"].rotation += 0.05  
}
if (gameState["keyboard"].up.isDown){
  gameState["rectangle"].y -= 5
  gameState["rectangle"].rotation += 0.05    
}
if (gameState["keyboard"].down.isDown){
  gameState["rectangle"].y += 5
  gameState["rectangle"].rotation += 0.05  
}

}