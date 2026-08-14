---
title: "Argo CD: 20 Interview Questions & Short Answers"
---

# Argo CD: 20 Interview Questions & Short Answers

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786028662598.jpeg)

</details>


1. **What is Argo CD?**
   Argo CD is a declarative GitOps continuous delivery tool used to deploy and manage applications on Kubernetes. Git acts as the source of truth.

2. **What is GitOps in Argo CD?**
   GitOps means storing the desired application and infrastructure configuration in Git and automatically reconciling the Kubernetes cluster with it.

3. **What are the main components of Argo CD?**
   The main components are the API server, repository server, and application controller.

4. **What does the Argo CD API server do?**
   It provides APIs for the UI and CLI, handles authentication, RBAC, application operations, repository credentials, and cluster credentials.

5. **What is the role of the repository server?**
   It downloads Git repositories and generates Kubernetes manifests from YAML, Helm, Kustomize, or other supported tools.

6. **What does the application controller do?**
   It continuously compares the desired state in Git with the live Kubernetes state and detects configuration differences.

7. **What is an Argo CD Application?**
   It is a Kubernetes custom resource that defines the Git source, target revision, manifest path, destination cluster, and namespace.

8. **What does OutOfSync mean?**
   It means the live resources in Kubernetes differ from the desired configuration stored in Git.

9. **What is the difference between sync status and health status?**
   Sync status shows whether Git and the cluster match. Health status shows whether the deployed resources are operating correctly.

10. **What is manual sync?**
    Manual sync requires a user or pipeline to explicitly start the deployment through the UI, CLI, or API.

11. **What is automated sync?**
    Automated sync applies changes when Argo CD detects that an application is OutOfSync.

12. **What is self-healing in Argo CD?**
    Self-healing automatically restores resources when someone manually changes the live cluster state outside Git.

13. **What is pruning?**
    Pruning deletes Kubernetes resources that exist in the cluster but have been removed from the Git configuration.

14. **What are Argo CD sync hooks?**
    Sync hooks are Kubernetes resources, usually Jobs, that run during deployment phases such as PreSync, Sync, PostSync, SyncFail, or PostDelete.

15. **What are sync waves?**
    Sync waves control the order in which resources are applied. Resources with lower wave numbers are processed first.

16. **What is an AppProject?**
    An AppProject logically groups applications and restricts allowed Git repositories, destination clusters, namespaces, and Kubernetes resource types.

17. **How does Argo CD provide access control?**
    It uses role-based access control (RBAC), with local users or SSO identities and groups.

18. **What is an ApplicationSet?**
    An ApplicationSet automatically generates multiple Argo CD Applications using generators such as Git, clusters, lists, matrices, or pull requests.

19. **Can Argo CD manage multiple Kubernetes clusters?**
    Yes. One Argo CD installation can register and deploy applications to multiple Kubernetes clusters.

20. **What are sync windows?**
    Sync windows define periods when application synchronization is allowed or denied, helping control production deployment schedules.
