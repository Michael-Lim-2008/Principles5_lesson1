import {Scene} from 'phaser'



export class Load extends Scene {

    constructor(){
        super({
            key: "load"
        })
    }
    preload() {
        // console.log("loading")
        this.load.image("player","./src/assets/player.png")
        // this.load.image("Background","./src/assets/background.jpeg")
        this.load.image("asteroid","./src/assets/kenney_rtssci-fi/PNG/Default size/Environment/scifiEnvironment_03.png")
        // this.load.atlasXML("rts","src/assets/kenney_rtssci-fi/Spritesheet/scifiRTS_spritesheet.png","src/assets/kenney_rtssci-fi/Spritesheet/scifiRTS_spritesheet.xml")

    }

    create() {
        this.scene.start("game")

    }

    update() {


    }

}