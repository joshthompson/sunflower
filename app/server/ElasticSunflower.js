var axios = require('axios')

class ElasticSunflower {

	constructor() {
		this.apps = [
			{
				name: 'PBK Admin',
				index: 'app-pbkadmin-logs-*',
				key: 'data.pbkadmin.level',
				errors: null
			},
			{
				name: 'Widget',
				index: 'app-widget-logs-*',
				key: 'logger.level.name',
				errors: null
			},
			{
				name: 'Payback',
				index: 'app-payback-logs-*',
				key: 'logger.level.name',
				errors: null
			},
			{
				name: 'Fare Payment',
				index: 'app-sps-logs-*',
				key: 'logger.level.name',
				errors: null
			},
			{
				name: 'JFox',
				index: 'app-jfox-logs-*',
				key: 'logger.level.name',
				errors: null
			},
			{
				name: 'Rental Front',
				index: 'app-fox-logs-*',
				key: 'logger.level.name',
				errors: null
			}
		]

		this.getErrors()

	}

	getData() {
		return this.apps.map(app => ({
			name: app.name,
			errors: app.errors
		}))
	}

	getErrors() {
		this.apps.forEach(app => {
			this.search(app.index, app.key).then(res => {
				app.errors = res.data.count
			})
		})
	}

	ready() {
		let ready = true
		this.apps.forEach(app => {
			if (typeof app.errors !== 'number') {
				ready = false
			}
		})
		return ready
	}

	search(index, key, value = 'ERROR', days = 14) {
		let data = {
			query: {
				bool: {
					must: [
						{
							match: {}
						},
						{
							range: {
								'@timestamp': {
									gte: `now-${days}d/d`,
									lt: 'now/d'
								}
							}
						}
					]
				}
			}
		}
		data.query.bool.must[0].match[key] = value
		
		return axios({
			method: 'post',
			url: `http://10.100.0.31:9200/${index}/_count`,
			data: data,
			auth: {
				username: process.env.ELASTIC_USER,
				password: process.env.ELASTIC_PASS
			},
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

}

module.exports = ElasticSunflower