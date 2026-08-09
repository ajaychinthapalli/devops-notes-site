---
title: "Deployment and CI/CD Failures in DevOps"
---

# Deployment and CI/CD Failures in DevOps

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786091995930.jpeg)

</details>


**CI/CD Failure:** Happens in the pipeline before or during deployment.
**Deployment Failure:** Happens when the application cannot be released or run correctly in the target environment.

## Typical CI/CD Flow

1. Code Commit
2. Build
3. Unit Tests
4. Security Scan
5. Artifact / Docker Image
6. Deploy
7. Validation

A failure can happen at any stage.

## CI/CD vs Deployment Failure

- **CI/CD Failure** = Pipeline problem
- **Deployment Failure** = Release / runtime problem

## Common CI/CD Failures

1. **Build Failure**
   Causes: Compilation errors, missing dependencies, wrong versions, bad config, wrong commands.
2. **Test Failure**
   Causes: Unit test fail, integration test fail, flaky tests, wrong test data.
3. **Docker Image Build Failure**
   Causes: Invalid Dockerfile, missing files, dependency download failure, wrong base image.
4. **Docker Registry Failure**
   Causes: Auth failure, permission denied, repo not found, network timeout.

## Common Deployment Failures (Kubernetes)

5. **K8s Deployment Failure**
   Causes: Invalid YAML, wrong image, ImagePullBackOff, CrashLoopBackOff, missing secrets/config, probes fail.
6. **ImagePullBackOff**
   Causes: Wrong image name/tag, registry auth, imagePullSecrets, connectivity issues.
7. **CrashLoopBackOff**
   Causes: App crash, DB connection fail, missing env, port mismatch, dependency issues.
8. **Configuration Failure**
   Causes: Wrong env vars, secrets, configmaps, DB URL, API endpoints, certificates.
9. **Permission / IAM Failure**
   Causes: AccessDenied, Unauthorized, RBAC, IAM roles, registry/Git permissions, cloud service accounts.
10. **Infrastructure Failure**
    Causes: Server down, node failure, disk full, memory issue, network/LB/DNS problems.

## Secret & Credential Failures

- Git token expired
- AWS credentials invalid
- Docker registry password changed
- Kubernetes secret missing
- SSH key invalid

**Use Secret Management:** GitHub Secrets, GitLab CI/CD Variables, Jenkins Credentials, HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Kubernetes Secrets.

## Network Failures

- DNS, Firewall, Security Groups
- Ingress, Service, Load Balancer
- Network Policies, Ports

**Check with:**

```bash
curl <url>
nslookup example.com
kubectl get svc
kubectl get ingress
```

## GitOps / Argo CD Failures

Flow: Git Repository → Argo CD → Kubernetes

Causes: App OutOfSync, repo auth fail, invalid manifests, Helm rendering error, sync failure, degraded health, missing resources.

**Useful Commands:**

```bash
argocd app get <app-name>
argocd app sync <app-name>
```

## Troubleshooting Flow

1. Identify failed stage
2. Check logs
3. Find recent changes
4. Validate configuration
5. Check credentials
6. Check infrastructure
7. Reproduce the issue
8. Fix
9. Redeploy
10. Validate application

## Golden Rule

Don't start troubleshooting by guessing. Start with logs and identify exactly where the failure happened.

## Best Approach

Observe → Identify → Isolate → Fix → Validate → Prevent
