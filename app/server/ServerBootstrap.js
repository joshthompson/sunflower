var ElasticSunflower = require('./ElasticSunflower')
var express = require('express')
var app = express()
var http = require('http').Server(app)

let port = process.env.PORT || 5005

http.listen(port, () => {
	console.log('\033c')
	console.log(`   #####
  #######    The Best Fareoffice App Quality Visualiser
  ##    #    Created on Creative Friday - 23/03/2018
  ##    #    Listening on *:${port}
  ###
   #####  #    # #    # ###### #       ####  #    # ###### #####  
	  ### #    # ##   # #      #      #    # #    # #      #    # 
  #    ## #    # # #  # #####  #      #    # #    # #####  #    # 
  #    ## #    # #  # # #      #      #    # # ## # #      #####  
  ####### #    # #   ## #      #      #    # ##  ## #      #   #  
   #####   ####  #    # #      ######  ####  #    # ###### #    #                                                     
`)
})
app.use(express.static('public'))

app.route('/api/apps').get((req, res) => {
	const sunflower = new ElasticSunflower(req.query)
	const checkErrors = () => {
		if (sunflower.ready()) {
			res.send(sunflower.getData())
		} else {
			setTimeout(checkErrors, 100)
		}
	}
	checkErrors()
})

