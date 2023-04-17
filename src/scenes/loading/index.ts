import { GameObjects, Scene } from "phaser";

export class LoadingScene extends Scene {
    // private king!:GameObjects.Sprite;
    constructor() {
        super('loading-scene');
    }

    create(): void {
        // this.king = this.add.sprite(100, 100, 'king');
        console.log('Loading scene was created');
        this.scene.start('level-1-scene');
    }

    preload(): void {
        this.load.baseURL = 'assets/';
        // load the king
        this.load.image('king', 'sprites/king.png');
    }
}