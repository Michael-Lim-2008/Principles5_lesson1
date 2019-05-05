import { GameObjects } from "phaser"

export class Enemy extends GameObjects.Sprite {

    constructor(config){
        super(config.scene, config.x, config.y , config.texture)
        config.scene.physics.world.enable(this)
        config.scene.add.existing(this)
        this.x = config.x
        this.y = config.y
        this.setOrigin(0,0)
        this.displayWidth = 70
        this.displayHeight = 100

    }


    update(time,delta){
        this.move(time)
    }

    move(time){
        this.x = Math.sin(time*0.005) * 100
        this.y = Math.cos(time*0.005) * 100
    }
}