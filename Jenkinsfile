pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-ci-cd-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jattin278-code/devops-ci-cd-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy fs .'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f devops-app || true
                docker run -d -p 3000:3000 --name devops-app $IMAGE_NAME
                '''
            }
        }

    }
}
