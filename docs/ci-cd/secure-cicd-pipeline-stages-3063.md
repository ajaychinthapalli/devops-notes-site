---
title: "Secure CI/CD Pipeline Stages (Notes)"
---

# Secure CI/CD Pipeline Stages (Notes)

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1784546773063.jpeg)

</details>


## 1. What is a Secure CI/CD Pipeline?

A **Secure CI/CD Pipeline** integrates security checks into every stage of software development, ensuring applications are built, tested, and deployed securely.

> Secure CI/CD means applying security throughout the pipeline using **DevSecOps** practices.

## 2. Secure CI/CD Pipeline Stages

1. Developer
2. Source Code (Git)
3. Build
4. Security Scan
5. Unit & Integration Testing
6. Build Docker Image
7. Image Vulnerability Scan
8. Push to Registry
9. Deploy to Dev/Test
10. Security Validation
11. Deploy to Production
12. Monitoring & Logging

## 3. Best Practices

### 3.1 Secure Source Code
- Use Git branch protection
- Enable code reviews
- Sign commits

### 3.2 Secure Dependencies
- Scan third-party libraries
- Remove vulnerable packages
- Keep dependencies updated

### 3.3 Secure Build Process
- Use trusted build agents
- Build from verified source
- Generate immutable artifacts

### 3.4 Scan Docker Images
- Scan for CVEs
- Use minimal base images
- Remove unnecessary packages

### 3.5 Protect Secrets
- Use Secrets Manager or Vault
- Never hardcode passwords
- Avoid storing secrets in Git

### 3.6 Secure Container Registry
- Push only signed images
- Enable access control
- Scan images regularly

### 3.7 Secure Deployment
- Use least privilege (RBAC/IAM)
- Deploy only approved artifacts
- Verify image signatures

### 3.8 Continuous Monitoring
- Monitor logs
- Detect security threats
- Audit all deployments

## 4. Common Security Tools

- GitHub Advanced Security
- SonarQube
- Trivy
- Snyk
- OWASP Dependency-Check
- HashiCorp Vault
- Docker Scout

## 5. Exam Tip

```
Code -> Build -> Security Scan -> Test -> Image Scan -> Push -> Deploy -> Monitor
```

**Remember:** Shift Left Security = Find and fix security issues early in the CI/CD pipeline.

### Summary Flow

```
Code -> Build -> Scan -> Test -> Image Scan -> Push -> Deploy -> Monitor
```
