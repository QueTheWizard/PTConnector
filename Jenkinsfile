pipeline {
  agent any
  stages {
    stage('scan') {
      steps {
        sh "docker run -v ${WORKSPACE}:/src --workdir /src returntocorp/semgrep-agent:v1 semgrep-agent --no-git-ignore --config p/secrets"
      }
    }
  }
}
