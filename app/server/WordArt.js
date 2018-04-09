class WordArt {

	constructor() {
		this.words = [`
####   ##   ###   ####   ##   ####  ####  #   ###  ####
#     #  #  #  #  #     #  #  #     #     #  #     #   
###   ####  ###   ###   #  #  ###   ###   #  #     ### 
#     #  #  #  #  #     #  #  #     #     #  #     #   
#     #  #  #  #  ####   ##   #     #     #   ###  ####`,
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
# #  ###  #   #   ###
# #  #    #   #   # #
###  ###  #   #   # #
# #  #    #   #   # #
# #  ###  ### ### ###`,
`
#####  ######  #    # #########  ####  #     
#    # #       ##   #     #     #    # #     
#    # #       # #  #     #     #    # #     
####   #####   #  # #     #     ###### #     
#   #  #       #   ##     #     #    # #     
#    # #       #    #     #     #    # #     
#    # ####### #    #     #     #    # ######
                                             
######  #####     #####    #    #  ######### 
#       #    #   #     #   ##   #      #     
#       #    #  #       #  # #  #      #     
####    # ##    #       #  #  # #      #     
#       #   #   #       #  #   ##      #     
#       #    #   #     #   #    #      #     
#       #    #    #####    #    #      #`
		]
	}

	getWord() {
		const i = Math.floor(Math.random() * this.words.length)
		return this.words[i].substr(1)
	}

}

module.exports = WordArt