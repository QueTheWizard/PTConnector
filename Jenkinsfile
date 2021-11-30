pipeline {
  agent any
  stages {
    stage('scan') {
      steps {
        sh "docker run -v ${WORKSPACE}:/src --workdir /src returntocorp/semgrep-agent:v1 semgrep-agent --publish-token 00b287f23cbc46366cac72148483f3dc86426daf2427d46764eba75af04ceacd"
      }
    }
  }
}
