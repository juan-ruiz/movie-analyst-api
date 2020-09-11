node {
    checkout scm

    stage('install'){
        def node = 'NodeJS'
        nodejs(node){
            sh 'npm install'
        }
    }

    stage('test'){
        def node = 'NodeJS'
        nodejs(node){
            sh 'node index.js &'
            sh 'npm test'
        }
    }
}
