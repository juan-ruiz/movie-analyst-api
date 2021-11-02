pipeline {

   agent {
    docker { image 'node' }
        }
    stages{ 
        stage('code checkout') {
            steps{    
                git url "https://github.com/stivenquirozc/movie-analyst-api.git"
                sh "git checkout dev"
                }
            }

    

       

    }
}


