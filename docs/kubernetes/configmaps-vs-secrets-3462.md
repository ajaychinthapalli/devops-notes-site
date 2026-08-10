---
title: "ConfigMaps vs Secrets"
---

# ConfigMaps vs Secrets

<details>
<summary>View original cheat sheet image</summary>

![ConfigMaps vs Secrets cheat sheet](https://github.com/user-attachments/assets/16e28ed2-51f4-41e4-9cdc-43cd99484639)

</details>

## What are ConfigMaps and Secrets?

Both store configuration data for Kubernetes applications.

- **ConfigMap** stores non-sensitive configuration.
- **Secret** stores sensitive information like passwords, API keys, and tokens.

## Real-World Analogy

- **ConfigMap** = a notice board with info like Wi-Fi name or office timings.
- **Secret** = a locker containing cash, jewelry, or important documents.

## ConfigMap

Stores non-confidential configuration separately from application code.

**Examples:** application settings, environment names, URLs, feature flags, log levels.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  LOG_LEVEL: info
```

### Use in a Pod

```yaml
env:
  - name: APP_ENV
    valueFrom:
      configMapKeyRef:
        name: app-config
        key: APP_ENV
```

## Secret

Stores confidential data.

**Examples:** database passwords, API keys, OAuth tokens, SSH keys, TLS certificates.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
stringData:
  DB_PASSWORD: MyStrongPassword
```

### Use in a Pod

```yaml
env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: db-secret
        key: DB_PASSWORD
```

## Key Differences

| Aspect | ConfigMap | Secret |
|---|---|---|
| Purpose | For non-sensitive configuration | For sensitive data |
| Examples | URLs, log levels, feature flags, env names, app settings | Passwords, API keys, tokens, certificates, SSH keys |
| Storage | Plain text (not encoded) | Base64-encoded values (not encryption by itself) |
| Access | Easier to expose accidentally | Should be restricted via RBAC |
| Recommended For | Non-sensitive configuration | Sensitive information |

## How They Are Used

Both ConfigMaps and Secrets can be mounted as:

- **Environment Variables** (env vars)
- **Files (Volumes)**

## Common Commands

```bash
kubectl get configmaps
kubectl get secrets
kubectl describe configmap app-config
kubectl describe secret db-secret
kubectl create configmap my-config --from-file=config.properties
kubectl create secret generic my-secret --from-literal=******
```

## Best Practices

- Store app configuration in ConfigMaps.
- Store passwords, tokens, and certificates in Secrets.
- Avoid hardcoding credentials.
- Enable Secret encryption at rest.
- Use RBAC to restrict access.
- Rotate Secrets regularly.

## Quick Revision / Interview Tips

- ConfigMap = non-sensitive configuration.
- Secret = sensitive data.
- Both can be consumed as env vars or mounted files.
- Base64 ≠ encryption.
- Use RBAC + encryption at rest for production.
