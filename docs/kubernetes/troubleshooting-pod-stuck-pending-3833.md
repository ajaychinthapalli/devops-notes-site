---
title: "Troubleshooting a Pod Stuck in Pending State"
---

# Troubleshooting a Pod Stuck in Pending State

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785764713833.jpeg)

</details>


## What does Pending mean?

A Pod in the Pending state means Kubernetes has accepted the Pod, but it cannot schedule it onto a Worker Node yet.

**Real-World Analogy:** Imagine you've booked a hotel room, but all rooms are currently occupied. Your booking is confirmed, but you're waiting for a room to become available.

## Step 1: Check Pod Status

```bash
kubectl get pods
```

```
NAME       READY   STATUS    RESTARTS   AGE
nginx-pod  0/1     Pending   0          3m
```

## Step 2: Describe the Pod (Most Important Step)

```bash
kubectl describe pod nginx-pod
```

Look at the Events section. This usually tells you the exact reason why the Pod is pending.

```
Events:
Warning  FailedScheduling  0/3 nodes are available: Insufficient cpu
```

## Common Causes & Fixes

### 1. Insufficient CPU or Memory (Most Common)

- **Cause:** Cluster doesn't have enough free resources
- **Example:** `0/3 nodes are available: Insufficient memory`
- **Fix:** Add more worker nodes; Reduce CPU/Memory requests; Remove unused workloads
- **Check:** `kubectl top nodes` and `kubectl describe node <node-name>`

### 2. Node Selector Mismatch

- **Cause:** Pod requests a node label that doesn't exist
- **Example:** nodeSelector: `disktype: ssd` vs Available node: `disktype=hdd`
- **Fix:** `kubectl get nodes --show-labels`; Update node labels or Pod's nodeSelector

### 3. Taints and Tolerations

- **Cause:** Nodes are tainted, preventing scheduling
- **Check:** `kubectl describe node <node-name>`
- **Example:** `node-role.kubernetes.io/control-plane:NoSchedule`
- **Fix:** Add matching toleration or schedule on another node

### 4. PersistentVolumeClaim (PVC) Pending

- **Cause:** Storage hasn't been provisioned
- **Check:** `kubectl get pvc`
- **Example:** `data-pvc Pending`
- **Fix:** Create a PersistentVolume; Verify StorageClass; Check requested storage size

### 5. Resource Quota Exceeded

- **Check:** `kubectl get resourcequota`
- **Example:** Exceeded CPU quota
- **Fix:** Increase quota; Delete unused resources

### 6. Affinity / Anti-Affinity Rules

- **Cause:** No node satisfies the scheduling rules
- **Example:** `affinity: nodeAffinity`
- **Fix:** Review affinity rules: `kubectl describe pod <pod-name>`

### 7. Unschedulable (Cordoned) Nodes

- **Check:** `kubectl get nodes`
- **Example:** `worker-1  Ready,SchedulingDisabled`
- **Fix:** `kubectl uncordon worker-1`

### 8. Cluster Autoscaler Delay

- **Cause:** If autoscaling is enabled, Kubernetes may still be creating a new node.
- **Check:** `kubectl get nodes`
- **Fix:** Wait for the new node to become Ready

### 9. Image Pull Secrets or Admission Policies

- **Cause:** Although image pull failures usually result in `ImagePullBackOff` after scheduling, admission policies or missing image pull secrets may prevent the Pod from progressing.
- **Check:** `kubectl describe pod <pod-name>`
- **Note:** Review the Events section for related errors.

## Troubleshooting Flow

1. Pod Pending
2. `kubectl describe pod`
3. Check Events
4. Branches into: CPU/Memory shortage, Node Selector mismatch, Taints/Tolerations, PVC Pending, Resource Quota, Affinity Rules, Cordoned Node, Autoscaler Delay

## Useful Commands

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
kubectl get nodes --show-labels
```

## Interview Tips

- First command to run: `kubectl describe pod <pod-name>`
- Always inspect the Events section — it usually contains the root cause.
- Most common reasons: Insufficient CPU/Memory, Node selector mismatch, Taints without tolerations, Unbound PVC, Resource quota limits, Affinity/anti-affinity constraints, Cordoned nodes.

## Quick Revision Checklist

- Pending = Pod accepted but not scheduled
- `kubectl describe pod` → First troubleshooting step
- Check Events → Root cause is usually here
- CPU/Memory shortage → Most common issue
- Node Selector → Must match node labels
- Taints → Require matching tolerations
- PVC Pending → Storage unavailable
- Resource Quota → May block scheduling
- `kubectl top nodes` → Check available resources
- `kubectl uncordon` → Re-enable scheduling on a cordoned node
