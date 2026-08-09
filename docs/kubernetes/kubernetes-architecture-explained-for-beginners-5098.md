---
title: "Kubernetes Architecture Explained for Beginners"
---

# Kubernetes Architecture Explained for Beginners

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785491905098.jpeg)

</details>


## What is Kubernetes?

Kubernetes (K8s) is a container orchestration platform that automates deploying, scaling, and managing containerized applications.

## Real-World Analogy

- Mall Manager -> Control Plane
- Maintenance Staff -> Controller Manager
- Security -> kube-proxy
- Shops -> Pods (Applications)
- Customers -> Users

## Kubernetes Cluster Structure

**Control Plane (Manager):** API Server, Scheduler, Controller Manager, etcd (Database)

**Worker Nodes (Where Applications Run):** each node runs kubelet, kube-proxy, Pod/Containers, Container Runtime

## Key Components

1. **Control Plane (Master)** — Controls and manages the entire cluster.
2. **API Server** — Entry point to the cluster. Receives all kubectl commands and validates requests.
3. **etcd (Database)** — Stores all cluster information and desired state. A highly available key-value database.
4. **Scheduler** — Decides which worker node should run a new Pod.
5. **Controller Manager** — Watches the cluster and ensures actual state matches desired state. Recreates failed Pods.

## Worker Node Components

6. **kubelet** — Agent on every worker node. Communicates with API Server and manages Pods.
7. **kube-proxy** — Handles networking for Services and routes traffic to correct Pods.
8. **Container Runtime** — Pulls images, starts and stops containers. Examples: containerd, CRI-O.
9. **Pods** — Smallest deployable unit in Kubernetes. Contains one or more containers that share networking and storage.

## How a Pod Gets Created

1. Developer
2. `kubectl apply`
3. API Server
4. etcd (stores desired state)
5. Scheduler selects Worker Node
6. kubelet starts the Pod
7. Container Runtime runs containers
8. Application is Ready

## Important Commands

```bash
kubectl get nodes
kubectl get pods
kubectl get deployments
kubectl cluster-info
kubectl describe pod <pod-name>
kubectl get componentstatuses
```

## Interview Tips

- Control Plane manages the cluster.
- API Server is the entry point for all operations.
- etcd stores the cluster's desired state.
- Scheduler selects the best worker node for Pods.
- Controller Manager maintains the desired state.
- Worker Nodes run application workloads.
- kubelet manages Pods on each node.
- kube-proxy handles Service networking.
- Pod is the smallest deployable unit.

## Quick Revision (At a Glance)

| Component | Role |
|---|---|
| Control Plane | Manages the cluster |
| API Server | Entry point for requests |
| etcd | Cluster database |
| Scheduler | Chooses where Pods run |
| Controller Manager | Maintains desired state |
| Worker Nodes | Runs applications (Pods) |
| Pod | Smallest deployable unit |
