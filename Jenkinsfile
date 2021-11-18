pipeline {

   environment { 

        registry = "squiroz/apitest" 
        registryCredential = 'squiroz'
        dockerImage = '' 

    }
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

    stage('Building our image') { 
    steps { 
    script { 
    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
          }
        }        
      }
  
  
  }
}

    


