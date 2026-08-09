---
title: "Troubleshooting a Kubernetes Pod Stuck in Pending State"
---

# Troubleshooting a Kubernetes Pod Stuck in Pending State

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785491181171.jpeg)

</details>


## 1. What does Pending mean?

A Pod in the Pending state has been accepted by Kubernetes, but it has not been scheduled to a Worker Node or is waiting for required resources.

**Real-World Analogy:** A hotel booking is confirmed, but no room is available yet.

## 2. Step 1: Check the Pod Status

```bash
kubectl get pods
```

| NAME | READY | STATUS | RESTARTS | AGE |
|---|---|---|---|---|
| nginx | 0/1 | Pending | 0 | 2m |

## 3. Step 2: Describe the Pod (Most Important)

```bash
kubectl describe pod nginx
```

Look at the Events section.

```
Warning  FailedScheduling  0/3 nodes are available: Insufficient cpu.
```

This usually tells you the exact reason.

## 4. Common Causes & Fixes

### (1) Insufficient CPU or Memory
- **Cause:** Not enough cluster resources.
- **Example Event:** "Insufficient memory"
- **Fix:** Add worker nodes, reduce requests, free resources.
- **Check:** `kubectl top nodes`, `kubectl describe node <node-name>`

### (2) Node Selector Doesn't Match
- **Cause:** Pod requests labels no node has.
- **Example:** `nodeSelector: disktype: ssd` but nodes have `disktype=hdd`
- **Fix:** `kubectl get nodes --show-labels` and update selector or labels.

### (3) Taints Without Matching Tolerations
- **Cause:** Node is tainted so Pod can't run there.
- **Check:** `kubectl describe node <node-name>`
- **Example taint:** `node-role.kubernetes.io/control-plane:NoSchedule`
- **Fix:** Add toleration or schedule elsewhere.

### (4) Persistent Volume Claim (PVC) Not Bound
- **Cause:** Pod is waiting for storage.
- **Check:** `kubectl get pvc`
- **Example:** "STATUS: Pending"
- **Fix:** Create PV, ensure StorageClass, verify access modes and size.

### (5) Image Pull Issues
- **Note:** Usually results in "ImagePullBackOff" or "ErrImagePull", not Pending, but Pods may appear pending while scheduling/startup is progressing.
- **Check:** `kubectl describe pod <pod-name>`; verify image name, image tag, registry credentials.

### (6) Unschedulable Node
- **Check:** `kubectl get nodes`
- If you see: "SchedulingDisabled"
- **Fix:** `kubectl uncordon <node-name>`

### (7) Resource Quota Exceeded
- **Check:** `kubectl get resourcequota`, `kubectl describe resourcequota`
- **Fix:** Increase quota or delete unused resources.

### (8) Affinity / Anti-Affinity Rules
- **Cause:** Pod may require a node that doesn't exist.
- **Check:** `kubectl describe pod`
- **Fix:** Review affinity rules and ensure at least one node matches.

### (9) Cluster Autoscaler Delay
- **Cause:** Kubernetes may be waiting for a new node.
- **Check:** `kubectl get nodes`
- **Note:** Review Cluster Autoscaler logs if applicable.

## 5. Troubleshooting Workflow

1. Pod Pending
2. `kubectl describe pod`
3. Check Events
4. Investigate: Insufficient CPU/Memory, Node Selector, Taints/Tolerations, PVC Pending, Resource Quota, Unschedulable Node, Affinity Rules

## 6. Useful Commands

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl get nodes
kubectl describe node <node-name>
kubectl top nodes
kubectl get pvc
kubectl describe pvc <pvc-name>
kubectl get resourcequota
kubectl get storageclass
```

## 7. Interview Tips

- The first command to run is: `kubectl describe pod <pod-name>`. Check the Events section.
- Most common causes: insufficient CPU/memory, node selector mismatch, taints without tolerations, unbound PVC, resource quota limits, affinity/anti-affinity constraints.
- Pending usually means the Pod has not been scheduled yet.
- "ImagePullBackOff" or "CrashLoopBackOff" usually means it has been scheduled and failed later.

## 8. Quick Revision

- `kubectl describe pod` -> First troubleshooting step
- Check Events -> Usually reveals root cause
- CPU/Memory shortage -> Most common reason
- Node Selector -> Must match node labels
- Taints -> Require matching tolerations
- PVC Pending -> Storage not available
- ResourceQuota -> May block scheduling
- Affinity Rules -> Must match available nodes
- `kubectl top nodes` -> Check resource usage
