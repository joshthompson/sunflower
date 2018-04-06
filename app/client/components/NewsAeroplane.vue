<script>
	import axios from 'axios'
	export default {
		name: 'NewsAeroplane',
		data() {
			return {
				refresh: 60 * 5, // 5 minutes
				duration: 60 * 1, // 1 minute
				headline: null,
				flying: false
			}
		},
		created() {
			setTimeout(this.readAllAboutIt, 1000 * this.refresh)
		},
		methods: {
			readAllAboutIt() {
				axios.get('/api/news').then(article => {
					this.headline = article.data.title
					this.fly()
					setTimeout(this.readAllAboutIt, 1000 * this.refresh)
				})
			},
			fly() {
				this.flying = true
				setTimeout(() => this.flying = false, 1000 * this.duration)
			}
		}
	}
</script>

<template>
	<div class="aeroplane-container">
		<div :class="{aeroplane: true, flying: flying}" :style="`animation-duration: ${duration}s`">
			<div class="plane">
				<div class="body">
					<div class="fuselage">
						<div class="stripe1"></div>
						<div class="stripe2"></div>
					</div>
					<div class="tail"></div>
				</div>
				<div class="wing"></div>
			</div>
			<div class="rope"></div>
			<div class="banner">{{ headline }}</div>
		</div>
	</div>
</template>

<style lang="scss">
	.aeroplane-container {
		position: fixed;
		top: 35vh;
	}
	.aeroplane {
		position: relative;
		opacity: 0;
		top: 0px;
		font-size: 0px;
		&.flying {
			animation: flying 30s linear infinite;
		}
		.plane {
			display: inline-block;
		}
		.rope {
			display: inline-block;
			border-top: 1px solid black;
			width: 15px;
			margin: 0px 0px 35px -2px;
		}
		.banner {
			display: inline-block;
			background: #FFFFFF;
			padding: 5px 30px 5px 10px;
			font-size: 1rem;
			vertical-align: 30px;
			clip-path: polygon(0% 0%, 100% 0%, calc(100% - 20px) 50%, 100% 100%, 0% 100%);
		}
		.body {
			.fuselage {
				display: inline-block;
				background: #FFFFFF;
				height: 30px;
				width: 75px;
				border-radius: 20px 5px 5px 10px;
				transform: scaleX(2);
				margin-right: 40px;
				overflow: hidden;
				.stripe1 {
					background: #E90081;
					width: 100%;
					margin-top: 18px;
					height: 2px;
				}
				.stripe2 {
					background: #2A3D8B;
					width: 100%;
					margin-top: 2px;
					height: 3px;
				}
			}
			.tail {
				display: inline-block;
				background: #FFFFFF;
				width: 40px;
				height: 30px;
				margin: 0px 0px 30px -40px;
				clip-path: polygon(70% 0%, 100% 0%, 66% 100%, 0% 100%);
			}
		}
		.wing {
			display: inline-block;
			background: #FCFCFC;
			width: 40px;
			height: 40px;
			margin-left: -30px;
			margin-top: -15px;
			border-radius: 0px 0px 50% 50%;
			clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
		}
	}

	@keyframes flying {
		0% { left: 100vw; opacity: 1; }
		95% { left: -90vw; opacity: 1; }
		100% { left: -100vw; opacity: 0; }
	}
</style>
