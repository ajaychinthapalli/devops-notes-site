---
title: "Secure Kubernetes Cluster"
---

# Secure Kubernetes Cluster

<details>
<summary>View original cheat sheet image</summary>

![Secure Kubernetes Cluster cheat sheet](https://github.com/user-attachments/assets/f4c028ad-41f9-43dd-b29b-be4c9c51a6ca)

</details>

## Why Kubernetes Security Matters?

A Kubernetes cluster hosts your applications, containers, secrets, and data. A misconfigured cluster can expose sensitive information or allow unauthorized access.

- Security Guard → Authentication
- Access Card → RBAC
- Locked Rooms → Secrets
- CCTV → Monitoring
- Fire Alarm → Threat Detection

Each layer adds protection.

## Kubernetes Security Architecture

**Users → Authentication → Authorization (RBAC) → Admission Controllers → Kubernetes API Server**

- Worker Nodes → Pods & Containers
- Control Plane → etcd (Encrypted)

## 1. Enable RBAC

Use Role-Based Access Control (RBAC) to restrict permissions.

- Developer → View Pods
- DevOps → Manage Deployments
- Admin → Full Cluster Access

- Follow the Principle of Least Privilege.
- Avoid granting cluster-admin unless absolutely necessary.

## 2. Secure the API Server

- Enable TLS for all API communication.
- Disable anonymous authentication.
- Restrict API access using network controls.
- Enable audit logging.

## 3. Encrypt Secrets

- By default, Kubernetes Secrets are Base64-encoded, not encrypted.
- Enable encryption at rest.
- Use external secret management (if available).
- Never store passwords directly in manifests or container images.

> **Base64 ≠ Encryption**

## 4. Use Network Policies

Frontend → Backend → Database

Restrict Pod-to-Pod communication. Only allow required traffic.

## 5. Run Containers as Non-Root

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
```

Avoid running containers as the root user.

## 6. Configure Security Context

```yaml
securityContext:
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
  capabilities:
    drop:
      - ALL
```

These reduce the container's privileges.

## 7. Use Trusted Images

- Use official or verified images.
- Scan images for vulnerabilities.
- Keep base images updated.

```
Avoid:  image: nginx:latest
Prefer: image: nginx:1.27
```

## 8. Set Resource Limits

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

Prevent a single Pod from consuming all cluster resources.

## 9. Protect etcd

etcd stores the cluster state, including Secrets.

- Enable encryption at rest.
- Restrict network access.
- Back up regularly.
- Use TLS for communication.

## 10. Use Pod Security Standards

Apply Pod Security Standards (PSS):

- Privileged
- Baseline
- **Restricted** ⭐ (recommended for most workloads)

## 11. Audit and Logging

Enable:

- Kubernetes Audit Logs
- Container Logs
- Node Logs

Collect logs centrally using tools such as Fluent Bit, Fluentd, or OpenTelemetry-based collectors.

## 12. Regular Updates

- Patch Kubernetes regularly.
- Update worker nodes.
- Update container images.
- Remove deprecated APIs.

## Useful Commands

```bash
kubectl auth can-i get pods
kubectl get networkpolicy
kubectl get podsecurityadmission
kubectl get secrets
kubectl describe pod <pod-name>
kubectl get events
```

> Note: `kubectl get podsecurityadmission` is not available as a standard resource on all clusters. Pod Security Admission is typically configured at the cluster level and enforced through namespace labels.

## Security Checklist

| Control | Recommended |
|---|---|
| RBAC | Enabled |
| TLS | Enabled |
| Encryption at Rest | Enabled |
| Network Policies | Enabled |
| Non-Root Containers | Enabled |
| Security Context | Configured |
| Image Scanning | Enabled |
| Resource Limits | Configured |
| Audit Logs | Enabled |
| Cluster Updates | Regular |

## Best Practices

- Follow the Principle of Least Privilege.
- Use namespace isolation for different environments.
- Enforce Network Policies.
- Run containers as non-root.
- Scan container images before deployment.
- Rotate Secrets regularly.
- Enable encryption at rest for Secrets.
- Enable audit logging and monitor cluster activity.
- Keep Kubernetes and dependencies up to date.

## Quick Revision

- RBAC → Access control
- TLS → Secure communication
- Secrets → Encrypt at rest
- Network Policies → Restrict Pod traffic
- Non-root containers → Improve security
- Security Context → Drop unnecessary privileges
- Trusted images → Scan & pin versions
- Resource Limits → Prevent resource abuse
- Audit Logs → Track cluster activity
- Patch regularly → Reduce security risks

## Interview Tips

- RBAC controls who can perform actions.
- Network Policies control Pod-to-Pod traffic.
- Security Context controls container privileges.
- Pod Security Standards enforce secure Pod configurations.
- etcd should be encrypted and protected.
- Avoid `:latest` image tags in production.
- Always define resource requests and limits.
