---
title: "What Problem Argo CD Solves?"
---

# What Problem Argo CD Solves?

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785934655594.jpeg)

</details>


Argo CD solves the problem of managing Kubernetes deployments manually and keeping the cluster **consistent** with the intended configuration.

## Without Argo CD, Teams Often Face

- Manual and error-prone `kubectl` deployments
- Differences between Git configuration and the live cluster
- Unauthorized or accidental changes inside Kubernetes
- Limited deployment visibility and audit history
- Difficult rollbacks
- Inconsistent deployments across environments and clusters

## How Argo CD Solves It

Argo CD uses **Git** as the source of truth. It continuously compares the desired configuration stored in Git with the actual state running in Kubernetes.

When it detects a difference, it marks the application as **OutOfSync** and can automatically restore the cluster to the desired state.

### Flow

1. Developer updates Git
2. Argo CD detects the change
3. Argo CD applies it to Kubernetes
4. Argo CD monitors application health

## Key Problems Solved

- **Automated** Kubernetes deployments
- Configuration-drift detection
- Self-healing applications
- Easy rollback using Git history
- Deployment visibility through UI and CLI
- Auditable and version-controlled changes
- Multi-cluster and multi-environment management
- Support for Helm, Kustomize, Jsonnet and YAML manifests

### Example: Argo CD UI

| App  | Health  | Sync Status |
|------|---------|-------------|
| APP1 | Healthy | Synced      |
| APP2 | Healthy | Synced      |
| APP3 | Healthy | **OutOfSync** |
| APP4 | Healthy | Synced      |

### Sync Relationship

**Git (Source of Truth)** ↔ **Argo CD** ↔ **Kubernetes Cluster**

## In One Sentence

Argo CD ensures that what is running in Kubernetes always matches what is declared in Git.

> **Note:** Argo CD primarily handles Continuous Delivery, while CI tools (Jenkins, GitHub Actions, GitLab CI) build, test and publish the application image.
