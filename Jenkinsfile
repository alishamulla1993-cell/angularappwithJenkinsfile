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
                echo "Testing"
            }
        }
        stage("build") {
            steps {
                bat "npx ng build --configuration production"
            }
        }
        stage("Deployment") {
            steps {
                bat "del /q /s c:\\inetpub\\wwwroot\\angularapp\\*"
               bat "xcopy /E /Y /I dist\\AngularDemo1\\browser\\* c:\\inetpub\\wwwroot\\angularapp\\"
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