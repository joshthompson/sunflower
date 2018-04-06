<script>
	export default {
		name: 'Poop',
		props: ['name', 'errors', 'max'],
		data() {
			return {
				minSize: 36,
				maxSize: 240
			}
		},
		created() {
			setTimeout(() => this.init = true, 50)
		},
		computed: {
			size() {
				return this.minSize + (this.maxSize - this.minSize) * (this.errors / this.max)
			}
		}
	}
</script>

<template>
	<div class="poop">
		<div class="name">{{name}}</div>
		<div class="icon" :style="`font-size: ${size}px`">💩</div>
		<div class="errors">{{errors}}</div>
	</div>
</template>

<style lang="scss" scoped>
	.poop {
		.errors, .nam {
			position: relative;
			z-index: 3;
			margin-top: 15px;
			font-size: 24px;
		}
	}
</style>
