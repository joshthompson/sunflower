<script>
	export default {
		name: 'Fly',
		props: ['name', 'errors', 'max'],
		data() {
			return {
				top: 50,
				left: 50,
				direction: 'right',
				animate: false
			}
		},
		created() {
			setTimeout(() => this.animate = true, parseInt(Math.random() * 1000))
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
	<div :class="{fly: true, animate: animate}" :style="position">
		<div class="wing"></div>
		<div class="body"></div>
		<div class="wing"></div>
	</div>
</template>

<style lang="scss" scoped>

	.fly {

		@media screen and (max-width: 600px) {
			zoom: 0.5;
		}

		position: fixed;
		z-index: 200;

		&.animate {
			animation: bumble 1s ease-in-out infinite;
			.wing {
				animation: wing2 0.1s infinite;
				&:nth-child(1) {
					animation: wing1 0.1s infinite;
				}
			}
		}

		font-size: 0px;
		transition: top 10s ease-in-out, left 10s ease-in-out;
		.wing {
			background: rgba(255, 255, 255, 0.5);
			display: inline-block;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			// border: 1px solid black;
			// margin: 0px -15px 0px 5px;
			position: relative;
			z-index: 1;
			transform-origin: 50% 100%;
			margin-bottom: 2px;
			margin-left: -6px;
			&:nth-child(1) {
				margin-left: 0px;
				margin-right: -7px;
			}
		}
		.body {
			display: inline-block;
			vertical-align: middle;
			height: 10px;
			width: 10px;
			border-radius: 10px;
			background: #222222;
			position: relative;
			z-index: 3;
		}
	}

	@keyframes bumble {
		0%, 100% { transform: translate(0px, 10px); }
		50% { transform: translate(0px, -10px); }
	}

	@keyframes wing1 {
		0%, 100% { transform: rotate(-45deg) scaleY(0.3); }
		50% { transform: rotate(-45deg) scaleY(1); }
	}

	@keyframes wing2 {
		0%, 100% { transform: rotate(45deg) scaleY(0.3); }
		50% { transform: rotate(45deg) scaleY(1); }
	}

</style>
