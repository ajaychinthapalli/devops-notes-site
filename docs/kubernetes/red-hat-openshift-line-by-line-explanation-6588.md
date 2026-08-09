---
title: "Red Hat OpenShift — Line by Line Explanation"
---

# Red Hat OpenShift — Line by Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785293486588.jpeg)

</details>


Enterprise Kubernetes Platform by Red Hat

## Concepts

1. **Container** – A container packages an application with its libraries, dependencies, and runtime.
2. **Kubernetes** – OpenShift is built on Kubernetes for container orchestration.
3. **OpenShift Cluster** – A group of machines working together to run containerized applications.
4. **Control Plane** – Manages the cluster, workloads, scheduling and overall state.
5. **API Server** – Receives and validates requests from users, UI, CLI and automation tools.
6. **etcd Database** – Key-value store that holds all cluster data and configuration.
7. **Scheduler** – Selects the best worker node for running a new pod.
8. **Controller Manager** – Ensures the actual state matches the desired state continuously.
9. **Worker Nodes** – Provide compute resources to run application workloads.
10. **RHEL CoreOS** – Lightweight, secure OS used by OpenShift nodes.
11. **CRI-O Runtime** – Container runtime that runs and manages containers.
12. **Pod** – Smallest deployable unit, contains one or more containers.
13. **Deployment** – Manages replica sets and updates for your application.
14. **Project** – Logical grouping of resources, similar to namespace with additional features.
15. **Service** – Provides stable internal network access to pods.
16. **Route** – Exposes a service to external users via hostname.
17. **Ingress Controller** – Routes external traffic to the correct service/pods.
18. **Container Image** – Immutable package containing application and its dependencies.
19. **Image Registry** – Stores container images for builds and deployments.
20. **ImageStream** – Tracks image versions and triggers builds/deployments on changes.
21. **Build** – Converts source code into a runnable container image.
22. **Source-to-Image** – Builds image directly from source using builder images.
23. **Operators** – Automate installation, configuration, upgrades and management of applications.
24. **OperatorHub** – Catalog to discover and install Operators.
25. **Authentication** – Verifies the identity of users.
26. **RBAC** – Controls access using roles, rules and role bindings.
27. **Security Context Constraints** – Sets security policies for pods.
28. **Persistent Storage** – Stores data that survives pod restarts or rescheduling.
29. **Networking** – Enables communication between pods, services and external systems.
30. **Monitoring** – Collects metrics and monitors health of cluster and applications.
31. **Logging** – Collects and stores logs for troubleshooting and auditing.
32. **Scaling** – Scales applications horizontally based on demand.
33. **Self-Healing** – Automatically restarts or reschedules failed pods.
34. **Rolling Update** – Updates application without downtime by rolling new versions.
35. **Cluster Updates** – Operators like CVO and MCO handle platform and node updates safely.

## OpenShift Cluster Architecture

**Control Plane:** API Server, etcd Database, Scheduler, Controller Manager

**Worker Nodes:** multiple worker node machines running workloads

**Supporting services:** Registry, Storage, Network

## Application Flow

```
Source Code
   -> Build
   -> Container Image
   -> Registry
   -> Deployment
   -> Pod
   -> Service
   -> Route
   -> User
```

## Kubernetes vs OpenShift

**Kubernetes:** Container orchestration engine.

**OpenShift:** Kubernetes + Security, Operators, Developer tools, Registry, Routes, Monitoring and Enterprise Support.

## Main Principle

Red Hat OpenShift provides Kubernetes and lifecycle management with enterprise capabilities.

## Key Features

- Enterprise grade security
- Highly available & scalable
- Developer friendly
- Hybrid cloud & multi-cloud ready
- Automated operations with Operators
- Integrated monitoring, logging & registry
- Consistent application lifecycle management
- Built on the power of Kubernetes
