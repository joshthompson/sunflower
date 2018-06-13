<script>
	export default {
		name: 'SunFlower',
		props: ['name', 'score', 'max'],
		data() {
			return {
				minHeight: 10,
				maxHeight: 60,
				maxLeaves: 10,
				init: false
			}
		},
		created() {
			setTimeout(() => this.init = true, 50)
		},
		computed: {
			dead() {
				return 1 - this.score / this.max
			},
			deadHead() {
				let dead = this.dead / 2 + 0.5
				return `saturate(${100 * dead}%)`
			},
			deadPetal() {
				let dead = this.dead * 2/3 + 1/3
				return `brightness(${100 * dead}%)`
			},
			height() {
				const shift = this.maxHeight - this.minHeight
				return this.init ? `${this.minHeight + shift * this.dead}vh` : '0vh'
			},
			leaves() {
				return Math.ceil(this.dead * this.maxLeaves)
			},
			insectScore() {
				return 1 - this.score / this.max
			}
		}
	}
</script>

<template>
	<div class="sunflower">
		<div class="head" :style="{filter: deadHead}">
			<div class="petal" v-for="n in 36" :key="`petal_${n}`" :style="{filter: deadPetal}"></div>
			<div class="name">{{ name }}</div>
		</div>
		<div class="stalk" :style="{height: `${height}`}">
			<div class="leaf" v-for="n in leaves" :key="`leaf_${n}`"></div>
		</div>
		<div class="score">{{Math.round(100 - score)}}</div>
	</div>
</template>

<style lang="scss" scoped>

	@mixin petal($total, $n: 1) {
		&:nth-child(#{$n}) {
			transform: rotate(360deg * $n / $total);
			filter: hue-rotate(-30deg + ($n * 21 % 30));
		}
		@if $n < $total {
			@include petal($total, $n + 1);
		}
	}

	$width: 30px;
	$head: 80px;

	.sunflower {
		display: inline-block;
		position: relative;
		margin: 0px $width / 2;
		width: $width;
		line-height: 0px;
		vertical-align: baseline;

		&:hover {
			z-index: 100;
			position: relative;
		}

		@media screen and (max-width: 600px) {
			width: 30px;
			.head {
				zoom: 0.5;
			}
		}

		.score {
			position: relative;
			z-index: 3;
			margin-top: 15px;
			font-size: 24px;
		}

		.head {
			display: block;
			margin: 30px auto 0px;
			background: #EEA345;
			border: 10px solid #8E4129;
			box-shadow: inset 0px 0px 0px 10px #CF7F39;
			width: $head;
			height: $head;
			border-radius: 50%;
			position: relative;
			z-index: 2;
			animation: petal-rotate 25s linear infinite;

			.name {
				text-transform: uppercase;
				position: absolute;
				top: 50%;
				left: 0px;
				width: 100%;
				font-weight: bold;
				line-height: 1;
				transform: translate(0px, -50%);
				transform-origin: 50% 0%;
				animation: anti-petal-rotate 25s linear infinite;
			}

			.petal {
				background: #FFFF00 linear-gradient(#FFFF00 40%, #FFCD00 100%);
				height: 43px;
				width: 10px;
				margin: 0px -30px -30px 0px;
				border-radius: 50% 50% 50% 50%;
				z-index: 1;
				position: absolute;
				top: -50px;
				left: calc(50% - 5px);
				transform-origin: center 80px;
				font-weight: bold;
				@include petal(36);
			}

		}

		.stalk {
			$colour: #79A74F;
			display: inline-block;
			width: 10px;
			background: $colour;
			height: 0px;
			transition: height 1s ease-out;

			.leaf {
				width: 25px;
				height: 25px;
				background: $colour;
				border-radius: 0% 50% 50% 50%;
				margin: calc(3vh - 15px) 10px;
				transform: translate(5px, 0px) rotate(-45deg);
				&:nth-child(2n) {
					transform: translate(-40px, 0px) rotate(135deg);
					animation: leaf-grow-flip 2s;
				}
				animation: leaf-grow 2s;
			}
		}

	}

	@keyframes leaf-grow {
		0%, 20% {
			transform: scale(0) translate(5px, 0px) rotate(-45deg);
		}
		100% {
			transform: scale(1) translate(5px, 0px) rotate(-45deg);
		}
	}

	@keyframes leaf-grow-flip {
		0%, 30% {
			transform: scale(0) translate(-40px, 0px) rotate(135deg);
		}
		100% {
			transform: scale(1) translate(-40px, 0px) rotate(135deg);
		}
	}

	@keyframes petal-rotate {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@keyframes anti-petal-rotate {
		0% { transform: rotate(0deg) translate(0px, -50%); }
		100% { transform: rotate(-360deg) translate(0px, -50%); }
	}

</style>
