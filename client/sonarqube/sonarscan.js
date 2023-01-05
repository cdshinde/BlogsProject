const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9001',
        token: "e9ebae38a439f0b8b3338386e84d3bb43fc805d2",
        options: {
            'sonar.projectName': 'visual',
            'sonar.projectDescription': 'POC',
            'sonar.projectKey': 'my-poc-visual-app',
            'sonar.projectVersion': '0.0.1',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.sources': 'src',
            'sonar.tests':'src',
            'sonar.test.inclusions':'*.test.tsx,*.test.ts,*.test.js',
            'sonar.exclusions':"**/__tests__/**",
            'sonar.typescript.lcov.reportPaths':"coverage/lcov.info"
        }
    },
    () => process.exit()
)