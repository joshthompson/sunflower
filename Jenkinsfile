import com.fareoffice.*

GH = new GitHub()
GIT_COMMIT = null

timestamps {
	catchError {
		node('docker') {
			stage('checkout') {
				GIT_COMMIT = GH.checkout(env.REPOSITORY_NAME, env.BRANCH_NAME)
				currentBuild.description = "${GIT_COMMIT.take(7)} @ ${NODE_NAME.split('-')[0]}"
        		GH.setJenkinsStatus("pending", env.REPOSITORY_NAME, GIT_COMMIT)
			}
			stage('build') {
				docker.build('fareoffice/sunflower:${GIT_COMMIT}')
			}
			if (env.BRANCH_NAME == 'master') {
				stage('publish') {
					docker.image('fareoffice/sunflower:${GIT_COMMIT}').push()
				}
				stage('deploy') {
					build([
						job: 'site-admin/deploy-devlab',
						quietPeriod: 5,
						parameters: [
							string(name: 'VERSION',    value: GIT_COMMIT),
							string(name: 'NAMESPACE',  value: 'site-admin'),
							string(name: 'BRANCH',     value: BRANCH_NAME)
						]
					])
				}
			}
		}
	}
}