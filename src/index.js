import Phaser from "phaser";
import {Game} from "./scenes/game"
import {Load} from "./scenes/load"

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [Load, Game]
    
};

const game = new Phaser.Game(config);

