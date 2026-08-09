---
title: "Docker Cheat Sheet — Working with Dockerfiles"
---

# Docker Cheat Sheet — Working with Dockerfiles

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785644411899.jpeg)

</details>


**Flow:** Dockerfile -> docker build -> Image -> docker run -> Container

## 1. What is a Dockerfile?

- A Dockerfile is a text file with instructions to build a Docker image.
- Image = packaged app + runtime + dependencies
- Container = running instance of an image

## 2. Basic Structure

```dockerfile
FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
USER appuser
CMD ["python", "app.py"]
```

## 3. Important Instructions

- **FROM** — choose base image
- **WORKDIR** — set working directory
- **COPY** — copy files into image
- **RUN** — execute commands during build
- **CMD** — default startup command
- **ENTRYPOINT** — main executable
- **ENV** — runtime environment variables
- **ARG** — build-time variables
- **EXPOSE** — document container port
- **USER** — run as non-root
- **LABEL** — metadata
- **HEALTHCHECK** — test app health

## 4. Build & Run

```bash
docker build -t my-app:1.0 .
docker run -d -p 8080:8000 my-app:1.0
```

`8080 (host) -> 8000 (container)`

## 5. Build Cache Tip

Copy dependency files first for better caching = faster rebuilds.

```dockerfile
COPY package*.json ./
RUN npm ci
COPY . .
```

## 6. .dockerignore

Ignore unnecessary files.

```
.git
node_modules
*.log
.env
```

## 7. Multi-stage Build

Builder (install + build) -> Runtime (small + clean)

- Use builder stage + smaller production stage
- Smaller, cleaner, safer images

## 8. Best Practices

- Use small trusted base images
- Pin versions
- Use .dockerignore
- Leverage cache ordering
- Use multi-stage builds
- Run as non-root
- Keep secrets out of ENV/ARG
- Rebuild regularly

## 9. Memory Formula

| Instruction | Purpose |
|---|---|
| FROM | foundation |
| WORKDIR | folder |
| COPY | files |
| RUN | install/build |
| ENV | config |
| USER | security |
| EXPOSE | port (:8080) |
| CMD | start |
