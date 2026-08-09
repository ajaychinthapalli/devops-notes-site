---
title: "OpenShift Storage"
---

# OpenShift Storage

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785683902330.jpeg)

</details>


## 1. PersistentVolume and PersistentVolumeClaim

- **PV** is a piece of storage in the cluster provisioned by admin or dynamically.
- **PVC** is a request for storage by a user.
- PVC binds to a suitable PV.

Flow: PV → Bound → PVC

## 2. StorageClass

- Defines different types of storage provided by the cluster.
- Includes provisioner, parameters, reclaim policy, binding mode.

## 3. Static and dynamic provisioning

- **Static**: Admin creates PVs in advance.
- **Dynamic**: PVs are created automatically when PVC is requested (using StorageClass).

Flow: Pod needs storage → PVC created → SC provisions PV → Bound

## 4. Access modes

- **ReadWriteOnce (RWO)** – mounted as read-write by a single node.
- **ReadOnlyMany (ROX)** – mounted read-only by many nodes.
- **ReadWriteMany (RWX)** – mounted read-write by many nodes.

| Mode | Use Case |
|---|---|
| RWO | Single-node read-write |
| ROX | Many-node read-only |
| RWX | Many-node read-write |

## 5. Volume modes

- **Filesystem (default)** – for file-based systems (ext4, xfs, etc.).
- **Block** – raw block device, used by apps like databases.

## 6. Container Storage Interface, or CSI

- Standard interface between container orchestrators (Kubernetes/OpenShift) and storage systems.
- **CSI components**:
  - **CSI Driver** – storage vendor plugin
  - **CSI Controller** – manages volumes (create/delete)
  - **CSI Node** – handles node-level operations (publish/unpublish)

Flow: Kubernetes/OpenShift ↔ CSI Interface ↔ Storage System

## 7. Volume expansion

- Allows increasing the size of a volume without data loss.
- Supported for filesystems (ext3/4, xfs) and block volumes (if driver supports).
- **Steps:**
  1. Edit PVC size
  2. Controller expands PV size
  3. Node filesystem resize (if needed)

Example: 10Gi → Expanded Size → 20Gi

## 8. Volume snapshots and cloning

- **Snapshot** – point-in-time copy (read-only).
- **Clone** – new volume from snapshot.
- Useful for backup, DR, test/dev.

Flow: Volume → Snapshot → Clone (New Volume)

## 9. StatefulSets

- For stateful applications (DBs, queues, etc.).
- Stable network identity and persistent storage.
- Each replica gets its own PVC.

Example: `pod-0 → PVC-0`, `pod-1 → PVC-1`, `pod-2 → PVC-2`

## 10. NFS, block and object storage

- **NFS (Network File System)** – file-level storage over the network. Shared storage.
- **Block Storage** – raw block devices for VMs or containers. High performance.
- **Object Storage** – store data as objects (e.g., S3 compatible). Scalable, cost-effective.

## 11. OpenShift Data Foundation (ODF)

- Red Hat's software-defined storage for OpenShift.
- Built on Ceph – provides block, file, and object storage.
- **Features**: High availability, data protection, thin provisioning, compression, replication.

## 12. Storage troubleshooting

- Check PVC/PV status: `oc get pvc,pv`
- Describe for events: `oc describe pvc <name>`
- Check StorageClass: `oc get sc`
- Check CSI components/logs: `oc -n openshift-cluster-csi-drivers get pods`
- Node level checks: `df -h`, `iostat`, `mount`, `systemctl status`
- Events are your best friend!

**Useful Tools:** `oc` CLI, `describe`, `logs`, monitoring
