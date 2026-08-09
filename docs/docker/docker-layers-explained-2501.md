---
title: "Docker Layers Explained"
---

# Docker Layers Explained

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785153552501.jpeg)

</details>


Docker uses a layered architecture to build, share and run applications efficiently.

## 1. Application Layer

This contains your application files, such as:
- Source code
- Configuration files
- Static content
- Compiled binaries
- Assets

**Example:**
```
COPY . /app
```

When application code changes, Docker usually rebuilds only this layer and the layers after it.

## 2. Dockerfile Layers

A Dockerfile contains instructions for creating an image. Most instructions generate a new read-only layer.

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

**Layer sequence (example):**

1. Base Operating System
2. Working Directory
3. Dependency Files
4. Install Dependencies
5. Application Source Code
6. Startup Configuration

Frequently changing instructions should be placed near the bottom to improve build caching.

## 3. Image Layers

A Docker image is a collection of stacked, read-only layers.

**Typical image layers include (top to bottom):**

| # | Layer |
|---|-------|
| 10 | Application Code |
| - | Application Dependencies |
| - | Runtime (Java, Node, etc.) |
| - | System Libraries |
| - | System Tools & Utilities |
| - | Security Updates |
| - | Base OS Image |

Docker reuses identical layers between images, which reduces:
- Build time
- Storage usage
- Network transfer
- Deployment time

## 4. Container Layer (Writable)

When an image runs, Docker adds a temporary writable container layer on top.

**Stack (top to bottom):**

| Layer | Notes |
|-------|-------|
| Writable Container Layer | Runtime changes |
| Application Code | |
| Application Dependencies | |
| Runtime (Java, Node, etc.) | |
| System Libraries | |
| System Tools & Utilities | |
| Security Updates | |
| Base OS Image | |

Files created or modified while the container is running are stored in this layer. The data is normally removed when the container is deleted, so persistent data should be stored in **Docker volumes**.

## 5. More Layers Example

A real-world image can have many layers:

| # | Layer | Change Frequency |
|---|-------|-------------------|
| 10 | Application Code | Changes Often |
| 10 | Configuration Files | Changes Often |
| 9 | App Dependencies | Changes Often |
| 8 | Language Runtime | Changes Rarely |
| 7 | Runtime Libraries | Changes Rarely |
| 6 | System Libraries | Changes Rarely |
| 5 | System Utilities | Changes Rarely |
| 4 | OS Packages | Changes Rarely |
| 3 | OS Updates / Patches | Changes Rarely |
| 2 | Bootloader / Init | Changes Rarely |
| 1 | Base OS (Kernel + Core) | Changes Rarely |

## 6. Simple Summary

**Flow:** Dockerfile instructions -> create layers -> layers form an image -> running the image adds a writable container layer.

**Summary:** Dockerfile instructions create layers -> layers form an image -> running the image adds a writable container layer.
