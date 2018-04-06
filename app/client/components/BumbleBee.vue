<script>
	export default {
		name: 'BumbleBee',
		props: ['name', 'errors', 'max'],
		data() {
			return {
				top: 50,
				left: 50,
				direction: 'right'
			}
		},
		created() {
			this.move()
			this.top = Math.random() * 15 + 10;
			if (Math.random() > 0.5) {
				this.top = -this.top
				this.direc = 'left'
			} else {
				this.top = 100 + this.top
				this.direc = 'right'
			}
		},
		computed: {
			position() {
				return {
					top: `${this.top}vh`,
					left: `${this.left}vw`,
				}
			}
		},
		methods: {
			move() {
				const prevLeft = this.left
				this.top = Math.random() * 50 + 10
				this.left = Math.random() * 150 + -25
				this.direc = this.left > prevLeft ? 'right' : 'left'
				setTimeout(this.move, Math.random() * 15000 + 5000)
			}
		}
	}
</script>

<template>
	<div class="bee" :style="position" :class="{reverse: direc === 'left'}">
		<div class="stinger"></div>
		<div class="wing"></div>
		<div class="body">
			<div class="stripe"></div>
			<div class="stripe"></div>
			<div class="eye"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

	.bee {

		@media screen and (max-width: 600px) {
			zoom: 0.5;
		}

		position: fixed;
		z-index: 200;
		animation: bumble 1s ease-in-out infinite;
		&.reverse {
			animation: bumble-backwards 1s ease-in-out infinite;
		}

		font-size: 0px;
		transition: top 10s ease-in-out, left 10s ease-in-out;
		.stinger {
			display: inline-block;
			border-top: 2px solid transparent;
			border-right: 8px solid black;
			border-bottom: 2px solid transparent;
			border-left: 0px solid transparent;
			vertical-align: middle;
		}
		.wing {
			background: rgba(255, 255, 255, 0.25);
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			margin: 0px -25px 5px 5px;
			position: relative;
			z-index: 2;
			animation: wing 0.1s infinite;
			transform-origin: 50% 100%;
		}
		.body {
			display: inline-block;
			vertical-align: middle;
			height: 20px;
			width: 32px;
			border-radius: 10px;
			background: #FFFF22;
			position: relative;
			z-index: 1;
			.stripe {
				display: inline-block;
				background: black;
				margin-left: 5px;
				width: 5px;
				height: 20px;
			}
			.eye {
				display: inline-block;
				width: 4px;
				height: 4px;
				background: black;
				border-radius: 2px;
				margin: -10px 0px 10px 5px;
			}
		}
	}

	@keyframes bumble {
		0%, 100% { transform: translate(0px, 10px); }
		50% { transform: translate(0px, -10px); }
	}

	@keyframes bumble-backwards {
		0%, 100% { transform: translate(0px, 10px) scaleX(-1); }
		50% { transform: translate(0px, -10px) scaleX(-1); }
	}

	@keyframes wing {
		0%, 100% { transform: scaleY(0.3); }
		50% { transform: scaleY(1); }
	}

</style>
