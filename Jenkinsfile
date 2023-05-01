pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'executing gradle'
                withGradle(){
                    sh './gradlew -v'
                }
            }
        }
    }
}