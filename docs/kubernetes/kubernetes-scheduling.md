---
title: "Kubernetes Scheduling"
---

# Kubernetes Scheduling

<details>
<summary>View original cheat sheet image</summary>

![Kubernetes Scheduling cheat sheet](https://github.com/user-attachments/assets/fadd936b-bf50-4136-820d-c26e8643cf0d)

</details>

## What is Kubernetes Scheduling?

- Kubernetes Scheduling is the process of deciding which worker node should run a newly created Pod.
- The Kubernetes Scheduler acts like a smart job allocator.

## 1. Scheduling Flow

The scheduler follows three steps: **Filter → Score → Select**

1. **Pod Created** — a new Pod is submitted to the cluster.
2. **Kubernetes Scheduler** — picks up the unscheduled Pod.
3. **Checks Available Nodes** — evaluates all nodes in the cluster.
4. **Filters Unsuitable Nodes** — removes nodes that don't meet requirements.
5. **Scores Suitable Nodes** — ranks the remaining nodes.
6. **Selects Best Node** — picks the highest-scoring node.
7. **Pod Runs on Worker Node** — the Pod is bound and started.

## 2. What the Scheduler Checks

- **CPU and memory availability**
- **Resource requests and limits**
- **Node labels**
- **nodeSelector** — e.g., `disktype: ssd`
- **Node affinity / anti-affinity**
- **Pod affinity / anti-affinity**
- **Taints and tolerations**
- **Topology spread constraints**
- **Existing workload placement**

## 3. Simple Example

| Node | CPU Used | Chosen? |
|------|----------|---------|
| Worker-1 | 80% | ✗ |
| Worker-2 | 30% | ✓ Best choice |
| Worker-3 | 50% | ✗ |

Pod resource request: `cpu: "500m"`, `memory: "512Mi"`

> **Worker-2** is the best and most suitable choice because it has the most free CPU to satisfy the Pod's requirements.

## 4. Important Scheduling Features

| Feature | Description |
|---------|-------------|
| **nodeSelector** | Run Pods on nodes with specific labels |
| **Node Affinity** | Advanced node selection rules |
| **Pod Affinity** | Place related Pods together |
| **Pod Anti-Affinity** | Keep Pods apart |
| **Taints** | Prevent normal Pods from using certain nodes |
| **Tolerations** | Allow selected Pods onto tainted nodes |
| **Resource Requests** | Tell scheduler how much CPU/RAM a Pod needs |
| **Topology Spread** | Distribute Pods across nodes or zones |

## 5. Easy Way to Remember

```
Filter Nodes → Score Nodes → Select Best Node → Run Pod
```

## 6. Quick Takeaway

- Scheduling improves resource usage.
- It helps place workloads intelligently.
- Good scheduling improves performance and availability.
