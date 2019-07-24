pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
        stage('deploy') {
            steps {
                sh 'echo deploying application'
            }
        }
    }
}
