module.exports = function(startTime, endTime) {
	return {
		"size": 0,
		"_source": {
			"excludes": []
		},
		"aggs": {
			"results": {
				"terms": {
					"field": "Product.keyword",
					"size": 40,
					"order": {
						"_term": "desc"
					}
				},
				"aggs": {
					"score": {
						"avg": {
							"field": "TestResult.score"
						}
					}
				}
			}
		},
		"stored_fields": [
			"*"
		],
		"script_fields": {},
		"docvalue_fields": [
			"Date",
			"DateTime",
			"fields.created",
			"fields.customfield_10001",
			"fields.customfield_11000",
			"fields.fixVersions.releaseDate",
			"fields.lastViewed",
			"fields.resolutiondate",
			"fields.updated"
		],
		"query": {
			"bool": {
				"must": [
					{
						"match_all": {}
					},
					{
						"bool": {
							"minimum_should_match": 1,
							"should": [
								{
									"match_phrase": {
										"Product.keyword": "ehi-pbk"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "rentalfront-ecl"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "rentalfront-jfox"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "rentalfront-backstage"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "farepayment"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "pbk-admin"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "ehi-ff"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "sites"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "site-admin-ui"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "site-admin"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "r2d2"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "watto"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "rocket-league-stats"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "pi-dashboard"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "farepayment-payback"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "farepayment-chdp"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "fareoffice-website"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "farepayment-chdp-cms"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "cms-publisher"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "cms"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "cms-api"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "c-3po"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "juggernaut"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "kenobi"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "netgiro-mock"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "payback"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "wsproxy"
									}
								},
								{
									"match_phrase": {
										"Product.keyword": "widget"
									}
								}
							]
						}
					},
					{
						"range": {
							"DateTime": {
								"gte": startTime,
								"lte": endTime,
								"format": "epoch_millis"
							}
						}
					}
				],
				"filter": [],
				"should": [],
				"must_not": [
					{
						"match_phrase": {
							"TestName.keyword": {
								"query": "UnitTest"
							}
						}
					}
				]
			}
		}
	}
}
