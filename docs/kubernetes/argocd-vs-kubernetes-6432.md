---
title: "ArgoCD vs Kubernetes"
---

# ArgoCD vs Kubernetes

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785932436432.jpeg)

</details>


Quick Notes

## Feature Comparison

| Feature | Kubernetes | Argo CD |
|---|---|---|
| Primary role | Container orchestration platform | GitOps continuous-delivery tool |
| Manages | Pods, deployments, services, storage, networking | Kubernetes manifests and app deployments |
| Source of truth | Kubernetes API and cluster state | Git repository |
| Deployment method | kubectl, APIs, Helm, or other tools | Syncs Git changes to Kubernetes |
| Dependency | Works independently | Requires a Kubernetes cluster |

## Kubernetes

```bash
kubectl apply -f deployment.yaml
```

Open-source platform for deploying, scaling, and managing containerized workloads. You declare the desired state, and controllers work to maintain it.

- Schedules containers
- Self-heals failed workloads
- Scales applications
- Service discovery & load balancing
- Manages config and secrets

Cluster: Pods run across Cluster Nodes.

## Argo CD

```
Developer → Git Repo → Argo CD → Kubernetes
```

Declarative GitOps continuous-delivery tool for Kubernetes.

- Reads manifests from Git and compares them with the live cluster.
- Shows Sync / Out of Sync status and can synchronize changes.
- Can apply updates automatically or manually.

Flow: Git Repo → Argo CD → Kubernetes Cluster

## How they work together

Git Repository → Argo CD → Kubernetes API → Pods, Services, Deployments

- Kubernetes runs the application.
- Argo CD delivers configuration from Git.

## Simple analogy

- Kubernetes = the factory
- Argo CD = the delivery manager

## Example

```yaml
containers:
  - name: application
    image: example-app:v2
```

If the image version changes in Git, Argo CD detects it and syncs it to Kubernetes.

## Key takeaway

- Kubernetes = run and manage containers
- Argo CD = deploy and synchronize apps using GitOps

They are not competitors — Argo CD works on top of Kubernetes.

## When to use

- Use Kubernetes to operate containerized workloads.
- Add Argo CD for Git-based deployments, drift detection, sync, and rollback workflow.
