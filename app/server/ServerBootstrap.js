var ElasticSunflower = require('./ElasticSunflower')
var WordArt = require('./WordArt')
var express = require('express')
var app = express()
var http = require('http').Server(app)
var axios = require('axios')

const port = process.env.PORT || 5005
const start = +new Date()


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

app.route('/api/ping').get((req, res) => {
	res.send('' + start)
})

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

app.route('/api/news').get((req, res) => {
	if (process.env.NEWS_API_KEY) {
		const url = `https://newsapi.org/v2/top-headlines?country=se&apiKey=${process.env.NEWS_API_KEY}`
		axios.get(url).then(data => {
			const articles = data.data.articles
			res.send(articles[Math.floor(Math.random() * articles.length)])
		})
	} else {
		res.send(null)
	}
})

app.route('/api/word').get((req, res) => {
	const word = new WordArt()
	res.send(word.getWord())
})

