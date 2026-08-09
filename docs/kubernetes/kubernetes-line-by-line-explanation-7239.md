---
title: "Kubernetes — Line by Line Explanation"
---

# Kubernetes — Line by Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785315087239.jpeg)

</details>


1. **Kubernetes** : Kubernetes, also called K8s, is an open-source platform used to manage containerized applications.
2. **Cluster** : A cluster is a group of machines working together to run applications.
3. **Control Plane** : The control plane manages the entire Kubernetes cluster and makes scheduling decisions.
4. **API Server** : The API Server receives commands from users, tools, and Kubernetes components.
5. **etcd** : etcd is a key-value database that stores the cluster configuration and current state.
6. **Scheduler** : The scheduler selects the best worker node on which a new Pod should run.
7. **Controller Manager** : It continuously checks the cluster and ensures that the actual state matches the desired state.
8. **Worker Node** : A worker node is a physical or virtual machine that application workloads run.
9. **Kubelet** : Kubelet is an agent running on every worker node. It ensures that the required containers are running.
10. **Container Runtime** : The container runtime, such as containerd or CRI-O, creates and runs containers.
11. **Pod** : A Pod is the smallest deployable unit in Kubernetes. It contains one or more containers.
12. **Deployment** : A Deployment manages Pods and maintains the requested number of application replicas.
13. **ReplicaSet** : A ReplicaSet ensures that a specific number of identical Pods are always running.
14. **Service** : A Service provides a stable IP address and DNS name for accessing a group of Pods.
15. **ClusterIP** : ClusterIP exposes an application only inside the Kubernetes cluster.
16. **NodePort** : NodePort exposes an application through a fixed port on every worker node.
17. **LoadBalancer** : LoadBalancer exposes an application externally using a cloud load balancer.
18. **Ingress** : Ingress manages external HTTP and HTTPS traffic and routes requests to different Services.
19. **Namespace** : A Namespace logically separates applications and resources inside the same cluster.
20. **ConfigMap** : A ConfigMap stores non-sensitive configuration data such as URLs, filenames, and application settings.
21. **Secret** : A Secret stores sensitive information such as passwords, tokens, and certificates.
22. **Volume** : A Volume provides storage that containers inside a Pod can access.
23. **PersistentVolume** : A PersistentVolume represents storage available to applications in the cluster.
24. **PersistentVolumeClaim** : A PersistentVolumeClaim is an application's request for persistent storage.
25. **StatefulSet** : A StatefulSet manages stateful applications that require stable names and storage.
26. **DaemonSet** : A DaemonSet ensures that one copy of a Pod runs on every required node.
27. **Job** : A Job runs a task until it completes successfully.
28. **CronJob** : A CronJob runs a task automatically according to a schedule.
29. **Labels** : Labels are key-value tags used to identify and organize Kubernetes resources.
30. **Selectors** : Selectors find resources that contain specific labels.
31. **Requests and Limits** : Requests reserve CPU and memory, while limits define the maximum resources a container can use.
32. **Liveness Probe** : A liveness probe checks whether a container is still working. Kubernetes restarts it when the check fails.
33. **Readiness Probe** : A readiness probe checks whether a container is ready to receive network traffic.
34. **Horizontal Pod Autoscaler** : The Horizontal Pod Autoscaler automatically increases or decreases the number of Pods based on workload.
35. **Rolling Update** : A rolling update replaces old Pods gradually, reducing downtime.
36. **Self-Healing** : Kubernetes automatically restarts failed containers and replaces unhealthy Pods.
37. **Desired State** : You describe how the application should run, and Kubernetes continuously works to maintain that state.

## Kubernetes Architecture

**Control Plane:** API Server ↔ Scheduler, API Server ↔ Controller Manager, etcd

**Worker Nodes:** Kubelet -> Container Runtime -> Pod (each worker node runs this stack)

## Service Types

- **ClusterIP** — internal IP (e.g., `10.96.0.1`)
- **NodePort** — fixed port on node (e.g., `NodeIP:30080`)
- **LoadBalancer** — External IP via Cloud LB

## Ingress Flow

```
User -> Internet -> Ingress (Rules) -> Service A / Service B / Service C
```

## Configuration & Storage

- **ConfigMap** — key: value pairs (non-sensitive)
- **Secret** — key: value pairs (sensitive, `***`)
- **Volume / PersistentVolume (PV) / PersistentVolumeClaim (PVC)** -> Pod

## Workload Controllers

- Deployment
- ReplicaSet
- StatefulSet
- DaemonSet
- Job
- CronJob

## Labels & Selectors

**Labels example:** `env: prod`, `app: web`

**Selector example:** `app: web`

## Resources (Requests & Limits)

| Type | CPU | Memory |
|---|---|---|
| Requests | 250m | 256Mi |
| Limits | 500m | 512Mi |

## Probes

- Liveness Probe ↔ Readiness Probe (CPU / Memory)

## HPA (Autoscaling)

CPU / Memory -> Horizontal Pod Autoscaler -> scales Pods

## Simple Kubernetes Workflow

```
User -> kubectl -> API Server -> Scheduler -> Worker Node -> Pod -> Container
```

**In simple terms:** Kubernetes deploys, scales, connects, monitors, and automatically repairs containerized applications.
