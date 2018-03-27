<script>
	export default {
		name: 'ModalWindow',
		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<template>
	<div class="modal-outer" @click="close()">
		<div class="modal-inner" @click="$event.stopPropagation()">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.modal-outer {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0px;
		left: 0px;
		z-index: 10000;
		background: rgba(0, 0, 0, 0.25);
		padding: 50vh 20px 0px;
	}
	.modal-inner {
		display: inline-block;
		min-width: 280px;
		width: auto;
		height: auto;
		background: #FFFFFF;
		padding: 20px;
		text-align: center;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
		transform: translateY(-50%);
	}
</style>
