pipeline {
    agent any

    environment {
        APP_NAME = "devops-ci-cd-app"
        CONTAINER_NAME = "devops-app"
        PORT = "3000"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/jattin278-code/devops-ci-cd-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                echo "Installing Node Dependencies"
                npm install
                '''
            }
        }

        stage('Trivy File System Scan') {
            steps {
                sh '''
                echo "Running Trivy Security Scan"
                trivy fs . --severity HIGH,CRITICAL
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building Docker Image"
                docker build -t $APP_NAME .
                '''
            }
        }

        stage('Trivy Docker Image Scan') {
            steps {
                sh '''
                echo "Scanning Docker Image"
                trivy image $APP_NAME
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                echo "Stopping Old Container"
                docker rm -f $CONTAINER_NAME || true

                echo "Running New Container"
                docker run -d -p $PORT:3000 --name $CONTAINER_NAME $APP_NAME
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                echo "Checking running containers"
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline Executed Successfully!'
        }

        failure {
            echo '❌ Pipeline Failed!'
        }
    }
}
