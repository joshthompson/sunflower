<script>
	import SunFlower from './components/SunFlower.vue'
	import axios from 'axios'
	export default {
		name: 'app',
		components: { SunFlower },
		created() {
			this.getData()
		},
		data() {
			return {
				apps: false,
				days: 14,
				warn: false,
				error: true,
				minMaxErrors: 20
			}
		},
		computed: {
			max() {
				const errors = this.apps && this.apps.map ? this.apps.map(app => app.errors) : [0]
				return Math.max(Math.max(...errors), this.minMaxErrors)
			}
		},
		methods: {
			getData() {
				axios.get('/api/apps', {params: {
					days: this.days,
					warn: this.warn ? 1 : 0,
					error: this.error ? 1 : 0
				}}).then(data => this.apps = data.data)
			},
			settings() {
				let days = this.days
				this.days = false
				do {
					this.days = parseInt(window.prompt('How many days? (-365)', days))
					if (this.days > 365 || this.days < 1) {
						this.days = false
					}
				} while (!this.days)
				// this.warn = window.confirm('Show data for WARN messages in the logs?')
				// this.error = window.confirm('Show data for ERROR messages in the logs?')
				this.getData()
			}
		}
	}
</script>

<template>
	<div id="app">
		<img class="cog" src="/imgs/cog.png" @click="settings()" />
		<h1>Fareoffice Sunflower Quality Visualiser</h1>
		<div id="sky">
			<div v-if="apps" id="flowers">
				<SunFlower
					v-for="app in apps"
					:key="app.name"
					:name="app.name"
					:errors="app.errors"
					:max="max"
				/>
			</div>
			<div v-if="!apps">
				<h3>Loading</h3>
			</div>
		</div>
		<div id="ground"></div>
	</div>
</template>

<style lang="scss">
	@import 'style/style.scss';

	h1 {
		background: black;
		color: white;
		margin: 0px;
		font-family: 'Indie Flower', cursive;
		height: 10vh;
		line-height: 10vh;
		position: fixed;
		width: 100vw;

		@media screen and (max-width: 600px) {
			font-size: 18px;
		}
	}

	.cog {
		position: absolute;
		bottom: 10px;
		right: 10px;
		width: 32px;
		height: 32px;
		cursor: pointer;
		&:hover {
			animation: spin 0.75s ease-out;
		}
	}

	#sky {
		margin-top: 10vh;
		background: #70D3FD;
		padding: 20px 20px 0px;
		height: 60vh;
		overflow-x: visible;
		overflow-y: visible;
	}

	#ground {
		background: #B1CF7A;
		height: 30vh;
		flex-grow: 1;
	}

	#flowers {
		height: 70vh;
		display: flex;
		align-items: flex-end;
		.sunflower {
			flex-grow: 1;
		}

		@media screen and (max-width: 600px) {
			margin: 0px -35px;
		}
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(180deg); }
	}
	
</style>
