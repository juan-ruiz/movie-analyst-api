def REPOSITORY_URL = "https://github.com/stivenquirozc/movie-analyst-api.git"
def PATHREPOSITORY = "movie-analyst-api"

pipeline {

agent { docker 'node' }

stages('code checkout') {
    git clone "${REPOSITORY_URL}"
    dir('${PATHREPOSITORY}')
    git checkout
    }

    stage('Build') {
        
        steps {
           
        }
    }

}
