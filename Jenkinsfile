pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-ci-cd-app"
        CONTAINER_NAME = "devops-app"
        HOST_PORT = "3001"
        CONTAINER_PORT = "3000"
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
                echo "Installing Node.js dependencies"
                npm install
                '''
            }
        }

        stage('Trivy File Scan') {
            steps {
                sh '''
                echo "Running Trivy filesystem scan"
                trivy fs .
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building Docker image"
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh '''
                echo "Scanning Docker image"
                trivy image $IMAGE_NAME
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                echo "Removing old container if exists"
                docker rm -f $CONTAINER_NAME || true

                echo "Starting container on port 3001"
                docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                echo "Running containers:"
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
