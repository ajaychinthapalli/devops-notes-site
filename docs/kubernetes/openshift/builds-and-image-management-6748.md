---
title: "Builds and Image Management"
---

# Builds and Image Management

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785660176748.jpeg)

</details>


OpenShift provides powerful build capabilities and image management features to automate the build, store, and deploy container images efficiently and securely.

## Source-to-Image, or S2I

- Builds an image from application source code using pre-defined builder images (S2I).
- Great for quick starts and developer productivity.

**Flow:** Source Code (Git Repo / Local) → S2I Build → Builder Image (S2I) → Container Image

## BuildConfig

- Defines how a build runs: strategy, source, output image, environment, and more.
- It is the blueprint for a build.

```yaml
apiVersion: build.openshift.io/v1
kind: BuildConfig
metadata:
  name: my-app-build
spec:
  source:
    type: Git
  strategy:
    type: Source
  output:
    to:
      kind: ImageStreamTag
      name: my-app:latest
```

**Key fields:**
- **source** – where code comes from
- **strategy** – how to build
- **output** – where the image goes
- **triggers** – when to run the build

## ImageStream and ImageStreamTag

- ImageStream is a named collection of images.
- ImageStreamTag is a pointer to a specific image.
- Automatically updated when new images are pushed.

`ImageStream my-app` → `:latest (points to image)` and `:v1.0 (points to image)`

**Benefits:**
- Track image history
- Rollback easily
- Trigger builds/deployments

## Binary builds

- Upload pre-compiled binaries or artifacts.
- Ideal when you don't have source code.
- Fast and simple.

Binary/Artifact (e.g., .jar, .war) → Build → Image created from uploaded binary

## Dockerfile builds

- Use a Dockerfile to define custom build steps.
- More control over the build process.
- Ideal for custom environments and dependencies.

```dockerfile
FROM python:3.11
COPY . /app
RUN pip install -r requirements.txt
CMD ["app.py"]
```

Dockerfile → Build → Image built using Dockerfile

**Use when:**
- You need custom OS/packages
- Complex build steps
- Non-standard runtime requirements

## Build triggers

- Automatically start builds based on events.
- Types: GitHub/GitLab Webhook, Generic Webhook, Image Change.

Git Repo → Webhook / Event → Build

## Image change triggers

- Automatically trigger new builds or deployments when the specified image changes.

Image Updated → Rebuild/Redeploy

## Build hooks

- Lifecycle hooks executed during the build.
- Types: Pre Build, Post Build.

Pre Build (Setup) → Build (Main Process) → Post Build (Tests, Cleanup) → Complete

## Internal OpenShift image registry

- Every OpenShift cluster has an internal registry to store images securely.
- Images are stored in: `image-registry.openshift-image-registry.svc:5000`

**Benefits:**
- Integrated
- Secure (TLS)
- Access controlled
- High performance

Registry ↔ Builds, Deployments, Helm Charts

## External container registries

- Use external registries like Docker Hub, Quay.io, AWS ECR, Google GAR, etc.
- Useful for sharing images across clusters/organizations.

Examples: `quay.io`, `Docker Hub`, `AWS ECR`, `GCR / GAR`

## Image pull secrets

- Store credentials to pull images from private registries.
- Attach to ServiceAccounts to allow pods to pull images.

```yaml
apiVersion: v1
kind: Secret
type: kubernetes.io/dockerconfigjson
metadata:
  name: my-pull-secret
```

Access private registries securely — pull secret attached to Pod.

**Can be done:**
- Manually
- Automatically (Policy)
- Using CLI tools

## Image pruning

- Remove unused and old images to free up storage space in the registry.
- Helps keep the cluster clean and performant.

Unused/Old Images → Trash → Free Space & Better Performance

## Useful Commands

```bash
oc new-build <type> <name>   # Create a new BuildConfig
oc start-build <buildconfig> # Start a build
oc logs -f bc/<name>         # View build logs
oc get builds                # List builds
oc get istag                 # List ImageStreamTags
oc get images                # List images
oc adm prune images           # Prune unused images
```

## Summary

OpenShift builds and image management features help automate, standardize, and secure the application delivery pipeline. From building source code to images across registries, OpenShift provides everything needed for a robust container lifecycle.
