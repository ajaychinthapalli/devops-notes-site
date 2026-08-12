---
title: "Multi-Cluster GitOps Explained"
---

# Multi-Cluster GitOps Explained

<details>
<summary>View original cheat sheet image</summary>

![Multi-Cluster GitOps Cheat Sheet](https://github.com/user-attachments/assets/603d7008-f2ef-4107-bd4f-e5083d6a01fe)

</details>

## 1) What is Multi-Cluster GitOps?

Multi-Cluster GitOps means using one GitOps system such as Argo CD to manage applications across multiple Kubernetes clusters.

| Manual (kubectl) | GitOps (Argo CD) |
|---|---|
| kubectl → Cluster 1 | Git → Argo CD → Cluster 1 |
| kubectl → Cluster 2 | Git → Argo CD → Cluster 2 |
| kubectl → Cluster 3 | Git → Argo CD → Cluster 3 |

⭐ Git becomes the central source of truth.

## 2) Why use it?

**Production:**
- AWS EKS
- Azure AKS
- GCP GKE

**Development:**
- EKS
- AKS

Managing each cluster manually is difficult. GitOps centralizes control.

## 3) Basic Architecture

```
Git Repository (apps/clusters/environments/)
    → Argo CD (Controller)
        → Cluster 1 (EKS)
        → Cluster 2 (AKS)
        → Cluster 3 (GKE)
```

Cluster 1 = Dev, Cluster 2 = Staging, Cluster 3 = Production

## 4) How it works

### Step 1: Store configuration in Git

```
gitops/
├── apps/
│   └── my-app/
│       ├── deployment.yaml
│       └── service.yaml
└── clusters/
    ├── dev/
    ├── staging/
    └── production/
```

### Step 2: Register Kubernetes clusters in Argo CD

```
Argo CD → Cluster-Dev / Cluster-Staging / Cluster-Production
```

Each cluster has its own API server, credentials, namespaces, and policies.

### Step 3: Create Argo CD Applications

```yaml
destination:
  server: https://cluster-api-server
  namespace: my-app
```

- Application A → Dev
- Application B → Staging
- Application C → Production

## 5) ApplicationSet — Important

ApplicationSet generates many Argo CD Applications from one template.

```
ApplicationSet
    → App-Dev   → Cluster1 (Dev)
    → App-Stage → Cluster2 (Stage)
    → App-Prod  → Cluster3 (Prod)
```

⭐ Useful when managing many clusters.

## 6) Example ApplicationSet

```yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: my-app
spec:
  generators:
    - list:
        elements:
          - cluster: dev
            url: https://dev-cluster
          - cluster: staging
            url: https://staging-cluster
          - cluster: production
            url: https://prod-cluster
  template:
    metadata:
      name: 'my-app-{{cluster}}'
    spec:
      source:
        repoURL: https://github.com/example/gitops.git
        targetRevision: main
        path: apps/my-app
      destination:
        server: '{{url}}'
        namespace: my-app
```

Generates: `my-app-dev`, `my-app-staging`, `my-app-production`

## 7) Multi-Cluster GitOps Workflow

```
Developer → Git Commit → Git Repository → Argo CD → ApplicationSet
    → DEV Cluster       → Pods
    → STAGING Cluster   → Pods
    → PRODUCTION Cluster → Pods
```

## 8) Example: Deploying Version 2

```
image: myapp:v1  →  image: myapp:v2
```

```
Git (myapp:v2) → Argo CD → Dev = v2
                         → Staging = v2
                         → Production = v2
```

**Safer Promotion Flow:**

```
Dev → Testing → Staging → Production
```

⭐ Promoting one environment at a time is often safer.

## 9) Repository Structure

### A) Kustomize pattern

```
gitops/
├── apps/
│   └── my-app/
│       ├── base/
│       └── overlays/
│           ├── dev/
│           ├── staging/
│           └── production/
└── clusters/
    ├── dev/
    ├── staging/
    └── production/
```

### B) Helm pattern

```
gitops/
├── charts/
│   └── my-app/
└── environments/
    ├── dev/
    ├── staging/
    └── production/
```

## 10) Benefits

- Centralized management
- Consistency across environments
- Git-based audit trail
- Drift detection
- Easy rollback

| Question | Answer |
|---|---|
| Who changed it? What changed? When? Which commit? | Git ≠ Kubernetes → Drift detected |
| v2 → v1 | Rollback by Git revert |

## 11) Single Cluster vs Multi-Cluster

| | Single Cluster | Multi-Cluster |
|---|---|---|
| Kubernetes | One Kubernetes cluster | Multiple clusters |
| Management | Simple management | Centralized management |
| Applications | Few Applications | Potentially hundreds of Applications |
| Argo CD | Basic Argo CD | Argo CD + ApplicationSet |
| Environments | One environment | Dev / Staging / Prod or multiple regions |

## 12) Interview Answer

Multi-Cluster GitOps is a pattern where a GitOps controller such as Argo CD manages applications across multiple Kubernetes clusters. Each cluster is registered with Argo CD, while Applications or ApplicationSets define what should be deployed and where. Git remains the source of truth, and Argo CD continuously reconciles each cluster with the desired state defined in Git.

---

**Remember this architecture:**

```
Git → Argo CD → ApplicationSet → DEV → STAGING → PROD → Pods
```

> One Git → One Argo CD → Many Applications → Many Kubernetes Clusters → Continuous Reconciliation
