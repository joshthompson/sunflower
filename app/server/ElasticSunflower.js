var axios = require('axios')
var KPIAverageTestScoreQuery = require('./queries/KPIAverageTestScore')

class ElasticSunflower {

	constructor(data) {

		this.days = data.days ? Math.min(Math.max(parseInt(data.days), 1), 365) : 14
		this.ready = false

		this.apps = [
			{
				name: 'PBK Admin',
				kpi: {
					key: 'pbk-admin',
					score: null
				}
			},
			{
				name: 'Sites',
				kpi: {
					key: 'sites',
					score: null
				}
			},
			{
				name: 'Payback',
				kpi: {
					key: 'payback',
					score: null
				}
			},
			{
				name: 'Fareoffice.com',
				kpi: {
					key: 'fareoffice-website',
					score: null
				}
			},
			{
				name: 'Widget',
				kpi: {
					key: 'ehi-pbk',
					score: null
				}
			},
			{
				name: 'Rocket League Stats',
				kpi: {
					key: 'rocket-league-stats',
					score: null
				}
			}
		]

		Promise.all([
			this.getKPIData()
		]).then(() => this.ready = true).catch(error => console.log('Caught Error:', error))

	}

	getData() {
		return this.ready ? this.apps.map(app => ({
			name: app.name,
			scores: {
				kpi: app.kpi.score,
				// uptime: app.uptime.score,
				// ...
			}
		})) : null
	}

	getErrors() {
		this.apps.forEach(app => {
			this.search(app.index, app.key).then(res => {
				app.errors = res.data.count
			})
		})
	}

	getKPIData() {
		const query = KPIAverageTestScoreQuery(`now-${this.days}d/d`, 'now/d')
		return this.search('quality-metrics*', query).then(resp => {
			resp.data.aggregations.results.buckets.forEach(bucket => {
				this.apps
					.filter(app => app.kpi.key === bucket.key)
					.forEach(app => app.kpi.score = bucket.score.value)
			})
		})
	}

	search(index, query) {
		return axios({
			method: 'post',
			url: `http://10.100.0.31:9200/${index}/_search`,
			data: query,
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