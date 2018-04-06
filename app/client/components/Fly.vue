<script>
	export default {
		name: 'Fly',
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
	<div class="fly" :style="position" :class="{reverse: direc === 'left'}">
		<div class="wing"></div>
		<div class="body"></div>
	</div>
</template>

<style lang="scss" scoped>

	.fly {

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
		.wing {
			background: rgba(255, 255, 255, 0.15);
			display: inline-block;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin: 0px -15px 5px 5px;
			position: relative;
			z-index: 2;
			animation: wing 0.1s infinite;
			transform-origin: 50% 100%;
		}
		.body {
			display: inline-block;
			vertical-align: middle;
			height: 15px;
			width: 18px;
			border-radius: 10px;
			background: #222222;
			position: relative;
			z-index: 1;
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
