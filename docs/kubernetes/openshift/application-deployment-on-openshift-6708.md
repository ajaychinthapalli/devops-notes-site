---
title: "Application Deployment on OpenShift"
---

# Application Deployment on OpenShift

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785657996708.jpeg)

</details>


## 1. Creating applications using YAML

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
```

Note: Declarative way to define resources.

## 2. Deployments and DeploymentConfigs

| Deployment | DeploymentConfig |
|---|---|
| Kubernetes-native | OpenShift-specific |
| Uses ReplicaSet | Supports triggers & hooks |
| Standard k8s behavior | Advanced rollout capabilities |

## 3. Rolling, recreate and custom deployment strategies

- **Rolling (default)** — Gradual update, minimal downtime.
- **Recreate** — Stop old then start new. Causes downtime.
- **Custom** — Specialized logic / advanced control.

## 4. Scaling applications

1 Pod -> 3 Pods -> 5 Pods. Replicas can be increased or decreased (via Service/Load Balancer).

## 5. Rollouts and rollbacks

v1.0 (Stable) -> Update -> v2.0 (New version) -> Rollback to v1.0 -> v1.0 (Stable)

Safe updates and easy recovery.

## 6. Health checks

OpenShift uses probes to check container health and availability to keep applications reliable.

## 7. Readiness, liveness and startup probes

- **Readiness Probe** — Is the app ready to receive traffic?
- **Liveness Probe** — Is the app still healthy?
- **Startup Probe** — Has the app finished starting?

## 8. Environment variables

```
APP_MODE=prod
DB_HOST=db.example.com
LOG_LEVEL=info
```

Key-value pairs to configure applications without changing code.

## 9. ConfigMaps and Secrets

- **ConfigMap** — For non-sensitive configuration data.
- **Secret** — For sensitive data like passwords, tokens, keys.

## 10. Init containers and sidecar containers

Pod: Init Container (runs first, setup tasks) -> Main App Container ↔ Sidecar Container

Init runs first and must succeed. Sidecar runs alongside the main container.

## 11. Jobs and CronJobs

- **Job (one-time task)** — Run to completion and exit.
- **CronJob (scheduled task)** — Runs jobs on a schedule (e.g., every 15 min).

## 12. Horizontal Pod Autoscaler

High CPU/Load detected -> HPA -> More Pods. Automatic scaling based on metrics (CPU, memory, etc.).

## 13. Resource requests and limits

**CPU:** Requests = reserve CPU (guaranteed); Limits = cap max CPU (not exceed)

**Memory:** Requests = reserve memory (guaranteed); Limits = cap max memory (not exceed)

## 14. Resource requests and limits — benefits

- **Right-sizing** — Set appropriate requests and limits for optimal performance.
- **Prevent OOMKills** — Limits prevent containers from consuming too much memory.
- **Better Scheduling** — Kubernetes schedules pods based on requests.
- **Cost Efficient** — Avoid over-provisioning and optimize infrastructure cost.
