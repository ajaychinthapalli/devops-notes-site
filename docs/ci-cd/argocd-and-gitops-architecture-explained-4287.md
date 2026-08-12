---
title: "Argo CD & GitOps Architecture Explained"
---

# Argo CD & GitOps Architecture Explained

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](https://github.com/user-attachments/assets/874445a4-9910-45ac-aca9-4287d975df4d)

</details>

---

## 1. Argo CD Architecture Explained

### What is Argo CD?

Argo CD is a Kubernetes continuous delivery (CD) tool based on GitOps.

**The basic idea is:**

| Concept | Role |
|---|---|
| Git | Desired State |
| Argo CD | Sync |
| Kubernetes | Actual State |

You store your Kubernetes manifests, Helm charts, or Kustomize configuration in Git. Argo CD continuously checks Git and makes sure the Kubernetes cluster matches what is stored there.

### Argo CD Architecture

```
Developer
    ↓ Git Push
Git Repository (YAML / Helm / Kustomize)
    ↓
Argo CD
  ├── Application Controller
  ├── Repo Server
  ├── API Server
  └── Redis (Cache)
    ↓ Sync
Kubernetes Cluster
  ├── Deployment
  ├── Service
  └── Pods
```

### Important Argo CD Components

1. **API Server**
   - Provides the Argo CD API and UI.
   - Handles authentication and application management.

2. **Application Controller**
   - The brain of Argo CD.
   - Compares the desired state in Git with the actual state in Kubernetes.
   - Detects whether an application is Synced or OutOfSync.
   - Performs synchronization.

3. **Repository Server**
   - Connects to Git repositories.
   - Fetches manifests.
   - Generates Kubernetes manifests from Helm, Kustomize, etc.

4. **Redis**
   - Used primarily for caching.
   - Helps improve Argo CD performance.

5. **Argo CD Repo/Git**
   - Stores the desired configuration of applications.

### Simple Example

| Git contains | Kubernetes currently has |
|---|---|
| replicas: 3 | replicas: 2 |

- Git: 3 replicas / Kubernetes: 2 replicas → **Status: OUT OF SYNC**
- After synchronization → replicas: 3 → **Status: SYNCED**

> ⭐ **Key Point:** Argo CD continuously reconciles Kubernetes with Git.

---

## 2. GitOps Architecture Explained

### What is GitOps?

GitOps is a way of managing infrastructure and applications using Git as the single source of truth.

Instead of manually running:
```
kubectl apply -f deployment.yaml
```
you commit the change to Git.

**Traditional flow with GitOps:**
```
Developer → Git Commit → Git Repository → GitOps Tool → Kubernetes
```

### GitOps Architecture

```
① Code Change  →  Developer (Source Code + YAML)
② Detect Change →  Git
③ Reconcile     →  Argo CD (GitOps Tool)
④ Monitor       →  Kubernetes (Deployment, Service, ConfigMap)
                         ↓
                    Actual State
```

### GitOps Workflow

1. **Developer changes code** → `Developer → Git`
2. **CI builds the application** → `Git → CI/CD → Docker Image`
   - Application → GitHub Actions / Jenkins → Docker Build → Container Registry
3. **Deployment configuration is updated** → `Git → Helm / Kustomize / YAML`
4. **Argo CD detects the change** → `Git Desired State → Argo CD`
5. **Argo CD deploys to Kubernetes** → `Argo CD → Kubernetes → Pods`
6. **Argo CD continuously monitors**
   - If someone manually changes Kubernetes:
     - `Git = 3 replicas` → `K8s = 5 replicas`
     - Argo CD detects the difference: **OUT OF SYNC**

### GitOps vs Traditional Deployment

| Traditional | GitOps |
|---|---|
| Manual kubectl apply | Git commit |
| Configuration may be scattered | Git is source of truth |
| Manual deployments | Automated reconciliation |
| Harder to audit | Git history provides audit trail |
| Configuration drift possible | Drift continuously detected |
| Rollback can be manual | Git revert can trigger rollback |

### Easy Way to Remember

```
GITOPS

Git = Desired State
    ↓
Argo CD
    ↓
Kubernetes = Actual State
    ↓
Continuous Sync
    ↓
Desired = Actual
```

### In one sentence

> GitOps means managing Kubernetes through Git, while Argo CD continuously makes the Kubernetes cluster match the state defined in Git.
