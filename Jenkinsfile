pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/fathimaminsha/deploy.git
                ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                   cp -r deploy/* /var/www/html
                   ls -l /var/www/html
                 '''  
            }
        }
    }
}
