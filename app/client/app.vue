<script>
	import SunFlower from './components/SunFlower.vue'
	import axios from 'axios'
	export default {
		name: 'app',
		components: { SunFlower },
		created() {
			axios.get('/api/apps').then(data => this.apps = data.data)
		},
		data() {
			return {
				apps: false
			}
		},
		computed: {
			max() {
				const errors = this.apps && this.apps.map ? this.apps.map(app => app.errors) : [0]
				return Math.max(...errors)
			}
		}
	}
</script>

<template>
	<div id="app">
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
	}

	#sky {
		background: #70D3FD;
		padding: 20px 20px 0px;
		height: 60vh;
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
	}
	
</style>
