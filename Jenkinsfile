pipeline {
agent any

triggers {
        githubPush()
    }

    stages {

        stage("build") {
            steps {
                nodejs('NodeJS') {
                    sh 'npm install'
            }
        }
    }

    stage("test") {
        steps {
            nodejs('NodeJS') {
            sh 'node index.js &'
            sh 'npm test'
            }
        }
    }
}
}
