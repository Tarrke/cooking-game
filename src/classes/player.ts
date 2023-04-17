import { Actor } from "./actor";

export class Player extends Actor {
    private keyZ: Phaser.Input.Keyboard.Key;
    private keyS: Phaser.Input.Keyboard.Key;
    private keyQ: Phaser.Input.Keyboard.Key;
    private keyD: Phaser.Input.Keyboard.Key;

    private velocity: number; 

    constructor(scene: Phaser.Scene, x: number, y: number,) {
        super(scene, x, y, 'king');
        // Keys
        this.keyZ = this.scene.input.keyboard.addKey('Z');
        this.keyS = this.scene.input.keyboard.addKey('S');
        this.keyQ = this.scene.input.keyboard.addKey('Q');
        this.keyD = this.scene.input.keyboard.addKey('D');

        // Physics
        this.getBody().setSize(30,30);
        this.getBody().setOffset(8, 0);

        this.velocity = 200;
    }

    update(): void {
        this.getBody().setVelocity(0);
        if( this.keyZ?.isDown ) {
            this.body.velocity.y = -this.velocity;
        }
        if( this.keyQ?.isDown ) {
            this.body.velocity.x = -this.velocity;
            this.checkFlip();
            this.getBody().setOffset(48, 15);
        }
        if( this.keyS?.isDown ) {
            this.body.velocity.y = this.velocity;
        }
        if( this.keyD.isDown ) {
            this.body.velocity.x = this.velocity;
            this.checkFlip();
            this.getBody().setOffset(15,15);
        }

    }
}