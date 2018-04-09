<script>
	import Fly from './Fly.vue'
	import axios from 'axios'
	export default {
		name: 'FlyWords',
		components: { Fly },
		data() {
			return {
				refresh: 60 * 3.3, // 3.3 minutes
				duration: 30, // 30 seconds
				flies: [],
				word: null,
				size: 15
			}
		},
		created() {
			setTimeout(this.formWord, 1000 * this.refresh)
		},
		methods: {
			formWord() {
				axios.get('/api/word').then(word => {
					this.word = word.data
					this.processWord(this.word)
					setTimeout(() => {
						this.flies = []
					}, 1000 * this.duration)
					setTimeout(this.formWord, 1000 * this.refresh)
				})
			},
			processWord(word) {
				this.flies = []
				let id = 0
				this.word.split('\n').forEach((line, y) => line.split('').forEach((c, x) => {
					if (c === '#') {
						this.flies.push({
							id: id++,
							x: x * this.size,
							y: y * this.size,
							leave: 1000 * (20 + Math.random() * 10)
						})
					}
				}))
			}
		}
	}
</script>

<template>
	<div class="fly-words-container">
		<Fly
			v-for="fly in flies"
			:key="`fly_word_${fly.id}`"
			:x="fly.x"
			:y="fly.y"
			:word="fly.leave"
		/>
	</div>
</template>

