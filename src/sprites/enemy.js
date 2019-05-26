import { GameObjects } from "phaser"

export class Enemy extends GameObjects.Sprite {

    constructor(config){
        super(config.scene, config.x, config.y , config.texture)
        config.scene.physics.world.enable(this)
        config.scene.add.existing(this)
        this.x = config.x
        this.y = config.y
        this.xspeed = (Math.random()+1)*10
        this.yspeed = (Math.random()+1)*10
        this.active = true
        console.log(this)
        this.screen_height = config.scene.scale.baseSize._height
        this.screen_width = config.scene.scale.baseSize._width
        
    }


    update(time,delta){
        if (this.active) {
            if (this.x > this.screen_width){
                this.x = 0
                
            }else if (this.x < 0 ){
                this.x = this.screen_width
                
            }


            if (this.y > this.screen_height) {
                this.y = 0
                
            }else if (this.y  < 0 ){
                this.y = this.screen_height
                
            }

            this.x += this.xspeed
            this.y += this.yspeed
    }

    
}

}