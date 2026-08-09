---
title: "Inconsistent Kubernetes Deployment in Argo CD"
---

# Inconsistent Kubernetes Deployment in Argo CD

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785987816393.jpeg)

</details>


Inconsistent deployment means the **live cluster state** does not match the **desired Git state**.

**Git Repository (Desired State)** ≠ **Kubernetes Cluster (Live State)** — Argo CD detects drift between the two.

## 1. How It Appears

- **OutOfSync** → Git and live cluster differ
- **Degraded** → resource is unhealthy
- **Progressing** → rollout still in progress
- **Missing** → resource exists in Git but not in cluster

## 2. Common Causes

- Manual `kubectl` changes
- **HPA** changes replicas
- Mutating webhooks add labels / annotations / sidecars
- Kubernetes normalizes fields
- Invalid / unknown fields removed by API
- Non-deterministic Helm templates
- Pruning disabled

### Status Legend

| Status | Meaning |
|---|---|
| Synced | Git and cluster match |
| OutOfSync | Git and cluster differ |
| Degraded | Resource is unhealthy |
| Progressing | Rollout in progress |
| Missing | Resource exists in Git but not cluster |

## 3. Troubleshooting

```bash
argocd app get my-application --hard-refresh
argocd app diff my-application
argocd app resources my-application --refresh
kubectl get deployment payment-service -n production -o yaml
```

Check image tag, replicas, env vars, labels/annotations, sidecars, limits, **strategy**.

## 4. Recommended Fixes

```yaml
spec:
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

- **selfHeal** restores manual changes
- **prune** removes deleted resources

```yaml
ignoreDifferences:
  - /spec/replicas
syncOptions:
  - RespectIgnoreDifferences=true
```

Use when HPA manages replicas (HPA → replicas).

```yaml
argocd.argoproj.io/sync-wave: "1"
```

**Note:** Controls deployment order.

Sync wave order example: `ConfigMap wave: "0"` → `Deployment wave: "1"` → `Service wave: "2"`

## 5. Best Practices

- Git = single source of truth
- Avoid manual cluster changes
- Use fixed image tags
- Use deterministic Helm templates
- Enable selfHeal and prune
- Ignore only intentionally managed fields
- Review diff before Sync

## 6. Key Takeaway

Argo CD does not create inconsistency — it **detects** inconsistency between Git and the Kubernetes cluster.
