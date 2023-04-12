import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import { StageScene } from './StageScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
		},
	},
	scene: [StageScene],
}

export default new Phaser.Game(config)
