---
title: "OpenShift Installation"
---

# OpenShift Installation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785656027654.jpeg)

</details>


## 1. Installer-Provisioned Infrastructure (IPI)

The OpenShift installer creates and manages the underlying infrastructure for you.

**Flow:** Installer -> (creates infra) -> OpenShift Cluster

## 2. User-Provisioned Infrastructure (UPI)

You provision the infrastructure (servers, network, storage) and then install OpenShift on top of it.

**Flow:** You Provision Infrastructure -> Installer -> OpenShift Cluster

## 3. Assisted Installer

Web-based UI tool that guides and automates the installation. Creates the installation configuration and helps deploy the cluster.

**Flow:** Assisted Installer (Web UI) -> Install Config (YAML) -> Installer -> OpenShift Cluster

## 4. Bare-metal Installation

Install OpenShift directly on physical servers without any virtualization layer.

**Flow:** Physical Servers (Bare-metal) -> Installer -> OpenShift Cluster

## 5. Installation on AWS, Azure, GCP and VMware

OpenShift can be installed on major cloud platforms or virtualization platforms: AWS, Azure, GCP, VMware.

## 6. Connected and Disconnected Installation

- **Connected:** System has access to Red Hat repositories (default).
- **Disconnected:** No external internet access. Use local mirror of OpenShift content.

## 7. DNS, Load Balancer and Networking Requirements

- **DNS:** Required for API, apps and internal components.
- **Load Balancer:** Needed for API and Ingress traffic.
- **Networking:** Proper routes, firewalls and ports must be open.

DNS -> Load Balancer -> OpenShift Nodes (API Traffic, Cluster Services Traffic)

## 8. Installation Configuration File

The `install-config.yaml` file defines all the cluster settings (platform, networking, pull secret, nodes, etc.).

```yaml
apiVersion: v1
baseDomain: example.com
compute:
  - name: worker
    replicas: 3
```

This file is used by the installer to create the cluster.

## 9. Bootstrap Process

The installer brings up a bootstrap machine that initializes the cluster and then brings up control plane and worker nodes.

1. Download Bootstrap Ignition
2. Bootstrap Machine Starts
3. Bootstrap Runs Ansible Playbooks
4. Control Plane Components Deployed
5. Cluster Ready

## 10. Post-installation Validation

Verify that all cluster components are running correctly and the cluster is Healthy.

**Validation checklist:**
- APIs Healthy
- Nodes Ready
- Pods Running
- Operators OK
- Ingress Working

Post-installation Validation ensures the cluster is ready to use.
