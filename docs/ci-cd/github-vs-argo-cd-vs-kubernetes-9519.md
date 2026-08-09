---
title: "GitHub vs Argo CD vs Kubernetes"
---

# GitHub vs Argo CD vs Kubernetes

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786021999519.jpeg)

</details>


GitHub, Argo CD, and Kubernetes are not direct competitors. They perform different jobs and are commonly used together in a modern DevOps / GitOps pipeline.

## Overview

| Tool | Primary Role | Simple Meaning |
|---|---|---|
| GitHub | Source-code management and collaboration | Stores and tracks the application code |
| Argo CD | GitOps continuous delivery | Deploys Git-defined configurations to Kubernetes |
| Kubernetes | Container orchestration | Runs and manages containerized applications |

## 1. GitHub — Store and Manage Code

- Cloud platform built around Git.
- Stores code, configs, Dockerfiles, K8s YAML, Helm charts, version history.
- Supports branches, pull requests, code review.
- GitHub Actions builds, tests and packages the application.

### Example Repository

```
my-application/
├── src/
├── Dockerfile
├── deployment.yaml
├── service.yaml
└── .github/workflows/build.yml
```

## 2. Argo CD — Deploy from Git

- GitOps continuous delivery tool for Kubernetes.
- Treats Git repository as the source of truth.
- Compares Desired state in Git vs Current state in Kubernetes.
- If different, marks OutOfSync and synchronizes automatically or manually.
- Supports YAML, Helm, Kustomize, Jsonnet.

### Example (deployment.yaml)

```yaml
spec:
  containers:
    - name: web-app
      image: company/web-app:v2
```

When this image version is committed to Git, Argo CD detects the change and applies it to Kubernetes.

## 3. Kubernetes — Run the Application

- Open-source platform for deploying and managing containerized applications.
- Handles scheduling, scaling, service discovery, load balancing, rolling updates.
- Provides storage orchestration, configurations, secrets and self-healing.
- Ensures the actual state matches the desired state.

### Kubernetes Resources

- Pod
- Deployment
- Service
- ConfigMap / Secret

## How They Work Together

1. Developer pushes code
2. GitHub
3. GitHub Actions Build & Test
4. Container Image Pushed to Registry
5. K8s Manifest Updated in GitHub
6. Argo CD Detects Git Change
7. Kubernetes Runs the Containers

## Easy Way to Remember

- GitHub = Store
- Argo CD = Deploy
- Kubernetes = Run

## Real-World Example

1. Developer pushes code to GitHub.
2. GitHub Actions builds and tests, creates web-app:v2.
3. Image pushed to container registry.
4. K8s manifest in GitHub changed from v1 to v2.
5. Argo CD detects the change and syncs.
6. Kubernetes performs rollout and runs new containers.
