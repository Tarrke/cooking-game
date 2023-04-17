/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [],
	server: { 
		host: '0.0.0.0', 
		port: 8000 
	},
	clearScreen: false,
	publicDir: './public',
})
