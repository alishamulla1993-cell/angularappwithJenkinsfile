pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage("checkout") {
            steps {
                checkout scm
            }

        }
        stage("installed package") {
            steps {
                bat "npm ci" 
            }
        }
        stage("testing") {
            steps {
                // bat "npx ng test --no-watch --no-progres --browsers=ChromeHeadless"
            }
        }
        stage("build") {
            steps {
                bat "npx ng build --configuration production"
            }
        }
      
    }
    post {
        success {
            echo "angular application build successfully"
        }
        failure {
            echo "build failed"
        }
    }
}