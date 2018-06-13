<script>
	import SunFlower from './components/SunFlower.vue'
	import Poop from './components/Poop.vue'
	import BumbleBee from './components/BumbleBee.vue'
	import Fly from './components/Fly.vue'
	import NewsAeroplane from './components/NewsAeroplane.vue'
	import FlyWords from './components/FlyWords.vue'
	import ModalWindow from './components/ModalWindow.vue'
	import axios from 'axios'
	import Cookie from 'js-cookie'
	export default {
		name: 'app',
		components: { SunFlower, Poop, BumbleBee, Fly, NewsAeroplane, FlyWords, ModalWindow },
		created() {
			const settings = Cookie.getJSON('settings') || {}
			this.mode = settings.mode || 'sunflower'
			this.days = settings.days || 14
			this.getData()
			this.checkVersion()
		},
		data() {
			return {
				apps: false,
				mode: 'sunflower',
				days: 14,
				warn: false,
				error: true,
				minMaxErrors: 10,
				timer: null,
				settings: false,
				serverStart: null,
				refresh: 1000 * 3600 * 12 // 12 hours
			}
		},
		computed: {
			max() {
				return 100
				const errors = this.apps && this.apps.map ? this.apps.map(app => app.scores.kpi) : [0]
				return Math.max(Math.max(...errors), this.minMaxErrors)
			}
		},
		methods: {
			checkVersion() {
				axios.get('/api/ping').then(res => {
					if (this.serverStart) {
						if (this.serverStart !== res.data) {
							window.location.href = window.location.href
						}
					} else {
						this.serverStart = res.data
					}
					setTimeout(this.checkVersion, 1000 * 60)
				})
			},
			getData() {
				clearTimeout(this.timer)
				this.timer = setTimeout(this.getData, this.refresh)
				return axios.get('/api/apps', {params: {
					days: this.days
				}}).then(data => this.apps = data.data)
			},
			showSettings() {
				this.settings = true
			},
			updateSettings() {
				this.getData().then(() => this.settings = false)
				Cookie.set('settings', {
					days: this.days,
					mode: this.mode
				})
			}
		}
	}
</script>

<template>
	<div id="app">
		<div id="info">
			Errors over {{ days }} {{ days === 1 ? 'day' : 'days' }}
		</div>
		<div id="settings">
			<img class="cog" src="/imgs/cog.png" @click="showSettings()" />
		</div>
		<h1>Fareoffice {{mode}} Quality Visualiser</h1>
		<div id="sky">
			<NewsAeroplane />
			<div v-if="apps && mode === 'sunflower'" id="flowers">
				<SunFlower
					v-for="app in apps"
					:key="app.name"
					:name="app.name"
					:score="100 - app.scores.kpi"
					:max="max"
				/>
				<BumbleBee v-for="n in 12" :key="`insect_${n}`" />
			</div>
			<div v-if="apps && mode === 'poop'" id="poops">
				<Poop
					v-for="app in apps"
					:key="app.name"
					:name="app.name"
					:errors="100 - app.scores.kpi"
					:max="max"
				/>
				<Fly v-for="n in 30" :key="`insect_${n}`" />
				<FlyWords />
			</div>
			<div v-if="!apps">
				<h3>Loading</h3>
			</div>
		</div>
		<div id="ground"></div>

		<ModalWindow v-if="settings" @close="settings = false">
			<h2>Settings</h2>
			<p>
				<label>Days: <input type="number" v-model="days" /></label>
			</p>
			<p>
				<label>
					<span>Mode:</span>
					<select v-model="mode">
						<option value="sunflower">🌻 Sunflowers</option>
						<option value="poop">💩 Poops</option>
					</select>
				</label>
			</p>
			<!-- <p>
				<span>Types:</span>
				<label><input type="checkbox" checked /> ERROR</label>
				<label><input type="checkbox" /> WARN</label>
			</p> -->
			<p>
				<a class="btn" @click="updateSettings()">Update / Close</a>
			</p>
		</ModalWindow>
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
		text-transform: capitalize;
		@media screen and (max-width: 600px) {
			font-size: 18px;
		}
	}

	#info {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: #FFFFFF;
		text-transform: uppercase;
	}

	#settings {
		position: absolute;
		bottom: 10px;
		right: 10px;
		.cog {
			display: inline-block;
			vertical-align: middle;
			width: 32px;
			height: 32px;
			cursor: pointer;
			&:hover {
				animation: spin 0.75s ease-out;
			}
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

	#flowers, #poops {
		height: 70vh;
		display: flex;
		align-items: flex-end;
		& .sunflower, & .poop {
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
