---
title: "AWS DevOps – Explanation"
---

# AWS DevOps – Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785316819018.jpeg)

</details>


AWS DevOps means using AWS services and DevOps practices to automate software development, testing, deployment, infrastructure management, and monitoring.

## 1. Plan
- Decide what to build
- Features, team, timeline
- Tools: Jira, GitHub Issues

## 2. Code
- Developers write code using languages like Java, Python, JS, Go, .NET

## 3. Source Control
- Store code in Git repository
- Source code, Config files
- History & versions

## 4. Git Commands
```bash
git add .              # Stage changes
git commit -m "msg"    # Save changes
git push origin main   # Push to remote
```

## GIT – Line by Line
```bash
git add .
# Adds all modified files to staging area.

git commit -m "msg"
# Creates a saved version of changes.

git push origin main
# Uploads changes to remote main branch.
```

## 5. Continuous Integration (CI)
- Developers merge code regularly
- Pipeline triggers automatically
- Build, test, and package code
- Detect issues early

## 6. AWS CodePipeline
Orchestrates the release process:

```
Source -> Build -> Test -> Approval -> Deploy
```

- **Source** — Get latest code
- **Build** — Compile & package
- **Test** — Run tests & security scans
- **Approval** — Manual/Auto approval
- **Deploy** — Release to environment

## 7. AWS CodeBuild
Managed build service:
- Download source
- Install dependencies
- Compile code
- Run tests
- Create artifacts / Docker images

## 8. Buildspec.yml Example (Node.js)

```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 20
    pre_build:
      commands:
        - echo Installing dependencies
        - npm ci
  build:
    commands:
      - echo Running tests
      - npm test
      - echo Building application
      - npm run build
artifacts:
  files:
    - '**/*'
  base-directory: dist
```

**Line by Line Explanation:**
- `version: 0.2` — Buildspec format version
- `phases` — Build lifecycle stages
- `install` — Environment setup phase
- `runtime-versions` — Specify language runtime
- `nodejs: 20` — Use Node.js version 20
- `pre_build` — Commands before build
- `npm ci` — Install dependencies
- `build` — Main build phase
- `npm test` — Run automated tests
- `npm run build` — Build production files
- `artifacts` — Output files to be passed
- `files: '**/*'` — Include all files in directory
- `base-directory: dist` — Location of output files

## 9. Testing
- Unit Testing
- Integration Testing
- Security Testing
- Pipeline fails if critical test fails

## 10. Artifacts
Build output like:
- `.jar`, `.war`, `.zip`
- Docker image
- Compiled files

## 11. Infrastructure as Code (IaC)
- Define infra in code
- Version controlled
- Repeatable
- Faster & reliable

## 12. AWS CloudFormation
- Provision AWS infra using YAML/JSON templates

## 13. Deployment
- Dev -> Test -> Staging -> Prod
- Environments for smooth releases

## 14. AWS CodeDeploy
Automate deployments to:
- EC2
- On-premises
- ECS
- Lambda

## 15. In-Place Deployment
1. Stop application
2. Replace old version
3. Start new version
4. Server back online

(v1 -> v2 in place)

## 16. Blue/Green Deployment
- **Blue** = Current (Live) — Live Traffic
- **Green** = New Version — New Version

Flow: Deploy to Green -> Test Green -> Switch traffic -> Keep Blue for rollback

Safer & reduces risk.

## 17. Containers & ECS
Container = App + Dependencies + Runtime + Config

```
Code -> Docker Build -> Push to ECR -> Deploy to ECS
```

- Consistent across environments
- Easy to scale

## 18. Security with IAM
IAM controls access:
- Who can sign in
- Which services
- Which actions
- Which resources

**Example:**
- CodeBuild role -> Read code
- CodeDeploy role -> Update ECS
- Developer role -> View logs

## 19. Monitoring with CloudWatch
Monitor your applications:
- Metrics: CPU, Memory, Requests, Errors
- Logs: App logs, Error logs, Access logs
- Alarms: Thresholds, Notifications, Auto-actions
- Dashboards: Visualize & track performance

## 20. Feedback & Improvement
Continuous cycle for better releases:

```
Monitor -> Alert -> Investigate -> Fix Code -> Test -> Commit
```

## DevOps Lifecycle

```
Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor -> Feedback -> (back to Plan)
```

## Important AWS DevOps Services

| Category | Services |
|---|---|
| Pipeline Automation | AWS CodePipeline |
| Build & Testing | AWS CodeBuild |
| Application Deployment | AWS CodeDeploy |
| Infrastructure as Code | AWS CloudFormation/CDK |
| Artifact Storage | Amazon S3 |
| Container Image Storage | Amazon ECR |
| Container Deployment | Amazon ECS / EKS |
| Virtual Servers | Amazon EC2 |
| Serverless Applications | AWS Lambda |
| Permissions & Security | AWS IAM |
| Monitoring & Alarms | Amazon CloudWatch |
| Audit History | AWS CloudTrail |
| Notifications | Amazon SNS |
| Secrets Management | AWS Secrets Manager / SSM Parameter Store |
