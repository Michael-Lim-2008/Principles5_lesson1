import {Scene} from 'phaser'
import { Enemy} from '../sprites/enemy';



export class Game extends Scene {

    constructor(){
        super({
            key: "game",
            physics:{
                default:"arcade",
                arcade: {
                    debug: true
                }
            }
        })
    }
    preload() {
        
    }

    create() {
    
        this.background = this.add.image(0,0,"Background")
        this.background.setOrigin(0,0)
        this.background.setDisplaySize(1000,700)
        this.spriteGroup = this.add.group()
        this.spriteGroup.add(new Enemy({
            scene: this,
            x: 500,
            y: 500,
            texture: "player"
        }) )

    }

    update(time) {
        let sprites = this.spriteGroup.children.entries
        for(let i =0 ; i<sprites.length ; i++){
            sprites[i].update(time)
        }

    }

} 

