---
title: "Docker Compose to Kubernetes"
---

# Docker Compose to Kubernetes

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785490728222.jpeg)

</details>


## 1. What will be generated?

- Deployment
- Service (ClusterIP, NodePort, or LoadBalancer as appropriate)
- ConfigMap (for environment variables, when applicable)
- Secret (for sensitive values, if applicable)
- PersistentVolumeClaim (PVC) (for named volumes)
- Ingress (if HTTP/HTTPS is exposed)
- Namespace (if requested)

## 2. Example Docker Compose

```yaml
version: "3.9"
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
```

## 3. Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web
          image: nginx:latest
          ports:
            - containerPort: 80
```

## 4. Kubernetes Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web
spec:
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 80
  type: ClusterIP
```

## 5. What Gets Mapped

| Docker Compose | Kubernetes |
|---|---|
| services | Deployment |
| ports | Service |
| environment | ConfigMap / Secret |
| volumes | PVC + Volume |
| depends_on | Readiness probes / init containers |
| restart | Deployment restart behavior |
| networks | Kubernetes networking (usually automatic) |

## 6. Production Improvements I Can Add

- Resource requests and limits
- Liveness, readiness, and startup probes
- Security context (non-root user, dropped capabilities)
- ConfigMaps and Secrets
- Persistent storage (PVC)
- Ingress configuration
- Horizontal Pod Autoscaler (HPA)
- NetworkPolicy
- PodDisruptionBudget
- Labels and annotations following Kubernetes best practices

## 7. Conversion Flow

1. Docker Compose file
2. Analyze services
3. Map ports/env/volumes
4. Create Deployment
5. Create Service
6. Add ConfigMap/Secret/PVC
7. Optional Ingress & extras
8. Production-ready Kubernetes YAML

## 8. Quick Revision

- services -> Deployment
- ports -> Service
- env -> ConfigMap / Secret
- volumes -> PVC
- depends_on -> probes / init containers
- Add probes, security, limits, and ingress for production
- Result: production-ready Kubernetes manifests

## Interview Tip

Docker Compose is great for local multi-container apps, while Kubernetes manifests are used to run and manage those workloads in production clusters.
