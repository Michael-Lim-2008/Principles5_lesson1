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

        this.cursors = this.input.keyboard.createCursorKeys()
        // this.wkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

        
    
        // this.background = this.add.image(0,0,"Background")
        // this.background.setOrigin(0,0)
        // this.background.setDisplaySize(1000,700)
        // this.char = this.add.sprite(100,100,"rts","scifiUnit_01.png")
        
        // this.add.sprite(50,50,"rts","scifiUnit_20.png")
        this.spriteGroup = this.add.group()
        this.spriteGroup.add(new Enemy({
            scene: this,
            x: 100,
            y: 200,
            texture: "player",
            width: 125,
            height: 150,
        }) )

        this.spriteGroup.add(new Enemy({
            scene: this,
            x:250,
            y: 400,
            texture: "asteroid",
            width: 100,
            height: 100,
        }))

    }

    update(time) {
        // this.spriteGroup.children.entries.map(elem=>elem.update())
        // let sprites = this.spriteGroup.children.entries
        // if( this.cursors.left.isDown){
        //     this.char.x -=5
        // } 
        // if( this.cursors.right.isDown){
        //     this.char.x +=5
        // }
        // if( this.wkey.isDown){
        //     this.char.y -=5
        // }
        // if( this.cursors.down.isDown){
        //     this.char.y +=5
        // }
        // for(let i =0 ; i<sprites.length ; i++){
        //     sprites[i].update(time)
        // }

    }

} 

