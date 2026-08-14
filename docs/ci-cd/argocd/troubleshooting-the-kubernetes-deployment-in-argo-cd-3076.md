---
title: "Troubleshooting the Kubernetes Deployment in Argo CD"
---

# Troubleshooting the Kubernetes Deployment in Argo CD

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786024353076.jpeg)

</details>


Troubleshoot layer by layer: Git repository → Manifest generation → Argo CD sync → Kubernetes Deployment → Pods → Application

## 1) Check App Status

```bash
argocd app get <application-name>
```

- Check: Sync Status, Health Status, Operation State
- Keywords: Synced / OutOfSync, Healthy / Progressing / Degraded

## 2) Refresh App

```bash
argocd app get <application-name> --hard-refresh
```

**Note:** Refresh cache + regenerate manifests

## 3) Compare Git vs Cluster

```bash
argocd app diff <application-name>
```

Common OutOfSync reasons:
- Manual kubectl changes
- Image tag mismatch
- Replica differences
- Default K8s fields
- Helm/Kustomize differences

## 4) Inspect Sync Errors

```bash
argocd app sync <application-name>
```

Common errors:
- Permission denied
- Resource not found / CRD missing
- Resource already exists

Check RBAC, API version, namespace, ownership.

## 5) Check Deployment

```bash
kubectl get deployment <deployment-name> -n <namespace>
kubectl describe deployment <deployment-name> -n <namespace>
kubectl rollout status deployment/<deployment-name> -n <namespace>
```

Check: desired, updated, available replicas, conditions, events.

## 6) Inspect Pods

```bash
kubectl get pods -n <namespace>
kubectl describe pod <pod-name> -n <namespace>
kubectl logs <pod-name> -n <namespace> --previous
```

Common issues:
- **ImagePullBackOff** → wrong image / registry / secrets
- **CrashLoopBackOff** → app crash / env / command / probes
- **Pending** → resources / PVC / node selectors / taints
- **Running but not Ready** → readiness / liveness probe issue

## 7) Verify Dependencies

```bash
kubectl get configmap, secret, pvc -n <namespace>
```

Check: missing secret, wrong key, bad volume mount, PVC not bound.

## 8) Check Argo CD Logs

```bash
kubectl logs -n argocd deployment/argocd-repo-server
kubectl logs -n argocd statefulset/argocd-application-controller
```

Notes: repo-server = manifest generation, controller = sync & reconciliation.

## 9) Fix in Git

Flow: Update manifest → Commit → Push → Refresh → Sync → Verify

**Note:** Always fix permanently in Git (GitOps).

## 10) Quick Commands

```bash
argocd app get <app>
argocd app diff <app>
argocd app sync <app>
kubectl get deployments, pods, services -n <namespace>
kubectl get events -n <namespace> --sort-by=.metadata.creationTimestamp
```

## 11) Troubleshooting Flow

| Question | Action |
|---|---|
| OutOfSync? | app diff |
| Manifest error? | repo-server logs |
| Sync failed? | RBAC / CRDs / conflicts |
| Degraded? | Deployment / Pods / logs |
| Fix in Git | Refresh + Sync |
