---
title: "Find Issues in This Kubernetes Manifest"
---

# Find Issues in This Kubernetes Manifest

<details>
<summary>View original cheat sheet image</summary>

![Kubernetes YAML Review](https://github.com/user-attachments/assets/57ab5d7b-4d3d-48bf-891c-98226dbaf26d)

</details>


## Kubernetes YAML Review

When reviewing a Kubernetes manifest, check the following areas:

- **API version** — Ensure the correct `apiVersion` for the resource kind.
- **kind + metadata** — Verify the resource kind and required metadata fields.
- **labels/selectors** — Confirm labels on Pods match the selectors defined in the Service or Deployment.
- **image + ports** — Validate the container image name/tag and exposed ports.
- **resources + probes** — Set resource requests/limits and configure liveness/readiness/startup probes.
- **volumes + secrets** — Check volume definitions and Secret/ConfigMap references.
- **security context** — Apply appropriate security context settings for least-privilege operation.

## What to Check

Review the manifest for syntax mistakes, invalid fields, mismatched selectors, broken references, and insecure runtime settings. The goal is to make the resource valid, secure, and production ready.

## Common Issues

### Configuration & Structure
- Incorrect `apiVersion`
- Missing or invalid `kind`
- YAML indentation errors
- Missing required fields (`metadata`, `spec`, etc.)
- Invalid labels or selectors
- Selector not matching Pod labels

### Container Settings
- Incorrect container image name or tag
- Invalid `containerPort`
- Missing resource requests and limits
- Incorrect liveness/readiness/startup probes

### Networking & Storage
- Invalid volume or `volumeMount` configuration
- ConfigMap or Secret reference errors
- Namespace mismatches
- Service targeting the wrong Pods
- Ingress configuration issues

### Security & Permissions
- RBAC permission problems
- Security issues (running as root, privileged containers, missing `securityContext`, etc.)
- Deprecated API versions

## What You'll Receive

After submitting your manifest for review:

- The exact error
- Why it's a problem
- How to fix it
- A corrected version of the manifest
- Production best practices

---

Paste your Kubernetes YAML (Deployment, Service, Ingress, ConfigMap, StatefulSet, etc.), and review it line by line.
