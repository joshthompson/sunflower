class WordArt {

	constructor() {
 		this.words = [
 			this.ascii('FareOffice'),
 			this.ascii('Shame'),
 			this.ascii('PBK: Admin'),
 			this.ascii('Widget'),
 			this.ascii('JFox'),
 			this.ascii('Evil'),
 			this.ascii('FearOffice'),
 			this.ascii('Evil'),
 			this.ascii('FarePayment'),
 			this.ascii('Payback'),
 			this.ascii('Testing'),
 			this.ascii('Kibana'),
 			this.ascii('Watto'),
 			this.ascii('Jenkins'),
 			this.ascii('SysOps'),

 			this.ascii('Stockholm'),
 			this.ascii('Sverige'),
 			this.ascii('3D Printer'),
 			this.ascii('Rocket Leauge?'),

 			this.ascii('Tjena'),
 			this.ascii('Hejsan'),
 			this.ascii('Hallå'),
 			this.ascii('Lammkött'),
 			this.ascii('Dumskalle'),
 			this.ascii('Kanon!'),
 			this.ascii('Toppen!'),
 			this.ascii('Vad kul!'),

 			this.ascii('Flies!!!'),
 			this.ascii('Vi är flugorna'),
 			this.ascii('Haglar flugorna'),
 			this.ascii('Dyrka flugorna'),
 			this.ascii('Prisa flugorna'),

 			this.ascii('Arezou'),
 			this.ascii('Martin'),
 			this.ascii('Yuri'),
 			this.ascii('Lauro'),
 			this.ascii('Daniel'),
 			this.ascii('Olle'),
 			this.ascii('Tom'),
 			this.ascii('Helgi'),
 			this.ascii('Fred'),

 			this.ascii('Jonas'),
 			this.ascii('Mattias'),
 			this.ascii('Carolina'),

 			this.ascii('Jan'),
 			this.ascii('Rafael'),
 			this.ascii('Nemiw'),
 			this.ascii('Kristofer'),
 			this.ascii('Christian'),

 			this.ascii('Mikael'),
 			this.ascii('Ola'),
 			this.ascii('Josh'),
 			this.ascii('Johan'),
 			this.ascii('Hjalmar'),
 			this.ascii('Rikard'),
 			this.ascii('Penny'),
 			this.ascii('Oszkár'),
 			this.ascii('Paulo'),
 			this.ascii('Eduardo'),
 			this.ascii('Peter'),
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
###########################
#      #  #               #
#      #  #               # 
########  ################# 
#                         #
########  ################# 
#      #  #               #
#      #  #               #
###########################`,
`
       ########
    ###        ###
  ##      ##      ##
 #   ##   ##   ##   #
#    ##        ##    #
#                    #
#  ###          ###  #
#   #            #   #
 #   ############   #
  ##              ##
    ###        ###
       ########`,
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
				.#..
				#...
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

			'Á': `..#.
				  .##. 
				  #..#
				  ####
				  #..#`,

			1: `.#.
				##.
				.#.
				.#.
				###`,

			2: `.##.
				#..#
				..#.
				.#..
				####`,

			3: `.##.
				#..#
				..##
				#..#.
				.##.`,

			':': `.
				  # 
				  .
				  #
				  .`,

			'?': `####
				  ...#
				  .###
				  ....
				  .#..`,

			'!': `##
				  ##
				  ##
				  ..
				  ##`,

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