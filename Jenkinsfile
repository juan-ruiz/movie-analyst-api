pipeline {
  agent  {label "principal"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/stivenquirozc/movie-analyst-api.git'
      }
    }
     
    stage('Build') {
      steps {
        sh "npm update"
        sh "npm install"
        sh "npm build"
        
      }
    }  
    
            
    stage('Test') {
      steps {
        sh "npm test"
        sh "echo tryed..."
      }
    }

    stage('Build Image') {
      steps {
        sh "sudo docker build -t stive_api_dev ."
        sh "echo builded..."
      }
    }
  }
}

    


