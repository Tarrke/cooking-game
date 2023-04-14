import Phaser from "phaser";

export class StageScene extends Phaser.Scene {

    constructor() {
        super('stage');
    }

    preload() {
        // this.load.setBaseURL('https://labs.phaser.io')

        this.load.image('back', 'images/background/earieForest.png')
        // this.load.setBaseURL('')
        this.load.image('dude_idle', 'images/Dude/dude_idle.png')

        this.load.spritesheet('dude', 'images/Dude/dude_sheet.png', {frameWidth: 96, frameHeight: 128})
    }

    create() {
        this.add.image(0, 0, 'back').setOrigin(0,0)

        // this.add.image(400,300, 'dude_idle')
        var player = this.physics.add.sprite(400, 300, 'dude_idle')
        player.setBounce(0.2)
        player.setCollideWorldBounds(true)
        /*
        this.anims.create({
            key:
        })
        */
    }


}