pipeline {
  agent any
    
  docker {image "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stivenquirozc/movie-analyst-api.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm init'
         sh 'npm build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}

    


