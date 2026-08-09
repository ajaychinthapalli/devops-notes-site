---
title: "Docker Container vs Kubernetes Pod"
---

# Docker Container vs Kubernetes Pod

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785314147815.jpeg)

</details>


1. Both are related to containerized applications, but they are not the same.
2. A Docker container runs an application, while a Kubernetes Pod is the smallest deployable unit in Kubernetes and can contain one or more containers.

## 1. What is a Docker Container?

- A container is a lightweight runtime unit for an application.
- It packages code, libraries, and dependencies together.
- Usually runs a single application or service.

`Container -> Application`

## 2. What is a Kubernetes Pod?

- A Pod is the smallest deployable unit in Kubernetes.
- It can contain one or more closely related containers.
- Containers in a Pod share network and storage.

**Pod:** Container 1, Container 2 -> Shared Network, Shared Storage

## 3. Key Differences

| Aspect | Container | Pod |
|---|---|---|
| Definition | Container = application runtime unit | Pod = Kubernetes deployment unit |
| Contains | Container = usually one app | Pod = one or more containers |
| Networking | Container = own network config | Pod = shared IP and network namespace |
| Storage | Container = own volumes | Pod = shared volumes possible |
| Management | Container = Docker | Pod = Kubernetes |
| Scaling & self-healing | Container = basic/manual | Pod = automated by Kubernetes controllers |

## 4. Quick Idea

- Container is what runs.
- Pod is how Kubernetes groups and manages containers.
