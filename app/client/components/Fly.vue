<script>
	export default {
		name: 'Fly',
		props: ['name', 'errors', 'max', 'x', 'y', 'word'],
		data() {
			return {
				top: 50,
				left: 50,
				animate: false,

			}
		},
		created() {
			if (!this.word) {
				// Normal behaviour
				setTimeout(() => this.animate = true, parseInt(Math.random() * 1000))
				this.move()
				this.setStartPos()
			} else {
				// Fly word behaviour
				this.animate = true
				this.setStartPos()
				setTimeout(() => {
					this.top = 125 + this.y
					this.left = 200 + this.x

				}, Math.random() * 3000 + 1000)
				setTimeout(() => {
					this.setStartPos()
					this.left += Math.random() * 100 - 50
					this.top += Math.random() * 100 - 50
				}, this.word)
			}
		},
		computed: {
			position() {
				return {
					top: `${this.top}px`,
					left: `${this.left}px`,
				}
			},
			windowWidth() {
				return window.outerWidth
			},
			windowHeight() {
				return window.outerHeight
			}
		},
		methods: {
			setStartPos() {
				this.top = -100
				this.left = Math.random() * this.windowWidth
			},
			honeyPots() {
				const poops = Array.from(document.getElementsByClassName('poop'))
				return poops.filter(poop => poop.attributes.honey)
			},
			pickAPot(pots) {
				const total = pots.map(poop => {
					return Math.pow(parseInt(poop.attributes.honey.value), 0.3)
				}).reduce((a, b) => a + b, 0)
				const score = Math.random() * total
				let current = 0
				if (score === 0) {
					return pots[Math.floor(Math.random() * pots.length)]
				} else {
					for (let i = 0; i < pots.length; i++) {
						current += parseInt(pots[i].attributes.honey.value)
						if (current >= score) {
							return pots[i]
						}
					}
				}
			},
			pos(poop) {
				return {
					left: poop.offsetLeft + poop.clientWidth / 2,
					top: poop.offsetTop + poop.clientHeight / 2
				}
			},
			move() {
				const honeyPots = this.honeyPots()

				if (honeyPots.length === 0 || Math.random() < 0.3) {
					this.top = (Math.random() * 50 + 10) * this.windowHeight / 100
					this.left = (Math.random() * 150 + -25) * this.windowWidth / 100
				} else {
					const pos = this.pos(this.pickAPot(honeyPots))
					const variance = 300
					this.top = pos.top + Math.random() * variance - variance / 2
					this.left = pos.left + Math.random() * variance - variance / 2
				}

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
		0% 100% { transform: translate(0px, 10px); }
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
