---
title: "GitOps with Argo CD"
---

# GitOps with Argo CD

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785486713315.jpeg)

</details>


Line-by-Line Explanation

## 1. What is GitOps?

- Git stores the desired state of Kubernetes apps.
- Developer changes YAML in Git and pushes code.
- Argo CD compares Git with the cluster.
- Argo CD syncs the cluster to match Git.

**Flow:** Developer -> Git Repository -> Argo CD -> Kubernetes Cluster

## 2. Example Argo CD Application YAML

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: nginx-application
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/example/gitops-repository.git
    targetRevision: main
    path: applications/nginx
  destination:
    server: https://kubernetes.default.svc
    namespace: nginx
  syncPolicy:
    automated:
      enabled: true
      prune: true
      selfHeal: true
      allowEmpty: false
    syncOptions:
      - CreateNamespace=true
      - ApplyOutOfSyncOnly=true
```

## 3. Key Fields

- **apiVersion**: Argo CD API group/version.
- **kind**: Application CRD.
- **metadata.name**: name of the Argo CD app.
- **metadata.namespace**: where the Application object lives (argocd).
- **spec.project**: AppProject used by the app.
- **source**: repoURL, targetRevision, path.
- **destination**: cluster + namespace to deploy to.
- **syncPolicy**: how synchronization works.

## 4. Auto Sync Meaning

| Field | Meaning |
|---|---|
| enabled = true | automatic sync ON |
| prune = true | delete resources removed from Git |
| selfHeal = true | revert manual cluster drift |
| allowEmpty = false | prevents accidental mass deletion |
| CreateNamespace = true | creates target namespace if missing |
| ApplyOutOfSyncOnly = true | sync only changed resources |

## 5. How it works

1. Read repoURL
2. Check targetRevision = main
3. Open path = applications/nginx
4. Compare desired state vs live cluster
5. If OutOfSync -> sync automatically
6. Prune obsolete resources
7. Self-heal manual changes

## 6. Core idea

- **Git** = desired state
- **Kubernetes** = live state
- **Argo CD** = reconciles the two

**Deployment** manages Pods -> **Service** provides a stable network endpoint.
