import {Scene} from 'phaser'



export class Load extends Scene {

    constructor(){
        super({
            key: "load"
        })
    }
    preload() {
        console.log("loading")
        this.load.image("player","./src/assets/kenney_platformercharacters/PNG/Player/Poses/player_walk2.png")
        this.load.image("Background","./src/assets/background.jpeg")
       
        this.load.atlasXML("rts","src/assets/kenney_rtssci-fi/Spritesheet/scifiRTS_spritesheet.png","src/assets/kenney_rtssci-fi/Spritesheet/scifiRTS_spritesheet.xml")

    }

    create() {
        this.scene.start("game")

    }

    update() {


    }

}