class WordArt {

	constructor() {
 		this.words = [
 			this.ascii('FareOffice'),
 			this.ascii('Shame'),
 			this.ascii('PBK: Admin'),
 			this.ascii('Widget'),
 			this.ascii('JFox'),
 			this.ascii('Jonas'),
 			this.ascii('Evil'),
 			this.ascii('FearOffice'),
 			this.ascii('Evil'),
`
######   ######   ##
#######  #######  ##   ##
##   ##  ##   ##  ##  ##
##   ##  ##   ##  ## ##
#######  ######   ####
######   #######  ####
##       ##   ##  ## ##
##       #######  ##  ##
##       ######   ##   ##`,
`
#####   ######  #    #  #######   ####   #
#    #  #       ##   #     #     #    #  #
#    #  #       # #  #     #     #    #  #
####    #####   #  # #     #     ######  #
#   #   #       #   ##     #     #    #  #
#    #  #       #    #     #     #    #  #
#    #  ####### #    #     #     #    #  ######
                                            
   ######  #####     ###    #    #  #######
   #       #    #   #   #   ##   #     #
   #       #    #  #     #  # #  #     #
   ####    # ##    #     #  #  # #     #
   #       #   #   #     #  #   ##     #
   #       #    #   #   #   #    #     #
   #       #    #    ###    #    #     #`,
		]
	}

	getWord() {
		const i = Math.floor(Math.random() * this.words.length)
		return this.words[i].substr(1)
	}

	ascii(text) {
		const letters = {
			A: `.##.
				#..#
				####
				#..#
				#..#`,

			B: `###.
				#..#
				###.
				#..#
				###.`,

			C: `.###
				#...
				#...
				#...
				.###`,

			D: `###.
				#..#
				#..#
				#..#
				###.`,

			E: `####
				#...
				###.
				#...
				####`,

			F: `####
				#...
				###.
				#...
				#...`,

			G: `.###
				#...
				#.##
				#..#
				.###`,

			H: `#..#
				#..#
				####
				#..#
				#..#`,

			I: `#
				#
				#
				#
				#`,

			J: `####
				...#
				...#
				#..#
				####`,

			K: `#..#
				# #.
				##..
				#.#.
				#..#`,

			L: `#...
				#...
				#...
				#...
				####`,

			M: `#...#
				##.##
				#.#.#
				#...#
				#...#`,

			N: `#..#
				##.#
				####
				#.##
				#..#`,

			O: `.##.
				#..#
				#..#
				#..#
				.##.`,

			P: `###.
				#..#
				###.
				#...
				#...`,

			Q: `.##.
				#..#
				#..#
				.##.
				..##`,

			R: `###.
				#..#
				###.
				#..#
				#..#`,

			S: `.###
				#...
				.##.
				...#
				###.`,

			T: `#### 
				..#.
				..#.
				..#.
				..#.`,

			U: `#..# 
				#..#
				#..#
				#..#
				.##.`,

			V: `#..# 
				#..#
				#.#.
				##..
				#...`,

			W: `#...# 
				#...#
				#.#.#
				##.##
				#...#`,

			X: `#..# 
				#..#
				.##.
				#..#
				#..#`,

			Y: `#..# 
				#..#
				####
				...#
				####`,

			Z: `####
				..#.
				.#.
				#..
				####`,

			'Å': `.##.
				  .##.
				  #..#
				  ####
				  #..#`,

			'Ä': `#..#
				  .##.
				  #..#
				  ####
				  #..#`,

			'Ö': `#..#
				  .##. 
				  #..#
				  #..#
				  .##.`,

			':': `.
				  # 
				  .
				  #
				  .`,
			' ': `..
				  .. 
				  ..
				  ..
				  ..`
		}
		let wordArt = ['','','','','']
		text.toUpperCase().split('').forEach((c, n) => {
			letters[c].split('\n').forEach((s, i) => {
				wordArt[i] = wordArt[i] === '' ? s.trim() : `${wordArt[i]}  ${s.trim()}`
			})
		})
		return '\n' + wordArt.join('\n')
	}

}

module.exports = WordArt