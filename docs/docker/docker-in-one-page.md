---
title: "Docker in One Page"
---

# Docker in One Page

<details>
<summary>View original cheat sheet image</summary>

![Docker in One Page](https://github.com/user-attachments/assets/8a1376a7-bfcb-4140-b4a6-dfe659e3595d)

</details>

## 1) What is Docker?

Docker is an open-source containerization platform that packages an application along with its dependencies into containers, ensuring it runs consistently across development, testing, and production environments.

## 2) Docker Architecture

```
Docker Client  -->  REST API  -->  Docker Daemon (dockerd)
  docker build/run/pull              |            |
                                  Images     Containers
                                     \         /
                                   Pull/Push Images
                                         |
                               Docker Registry (Docker Hub / Private)
```

## 3) Core Components

| Component             | Purpose                               |
|-----------------------|---------------------------------------|
| Docker Client         | Sends Docker commands                 |
| Docker Daemon (dockerd) | Builds and manages containers       |
| Docker Engine         | Core runtime platform                 |
| Docker Image          | Read-only application template        |
| Docker Container      | Running instance of an image          |
| Docker Registry       | Stores Docker images                  |
| Docker Hub            | Public image repository               |
| Dockerfile            | Instructions to build an image        |
| Docker Compose        | Multi-container application management|
| Docker Volume         | Persistent data storage               |
| Docker Network        | Enables container communication       |

## 4) Docker Workflow

1. **Dockerfile** — define the image
2. `docker build` — build the image
3. **Docker Image** — immutable artifact
4. `docker push` / `docker pull` — transfer image to/from registry
5. **Docker Registry** — store and distribute images
6. `docker run` — create a running container
7. **Docker Container** — live running instance

## 5) Container Lifecycle

```
Created → Running → Paused → Stopped → Removed
```

## 6) Docker Networking

| Network | Purpose                              |
|---------|--------------------------------------|
| Bridge  | Default network for containers       |
| Host    | Shares host network                  |
| None    | No networking                        |
| Overlay | Multi-host communication             |
| Macvlan | Assigns container its own MAC/IP     |

## 7) Docker Storage

```
Application </>
     |
 Container
     |
Volume / Bind Mount / tmpfs
     |
 Host Storage
```

## 8) Image Layers

Each Docker image is built from read-only layers, making image sharing and caching efficient.

```
Application Layer
  Dependencies
    Runtime
  Operating System
   Base Image
```

## 9) Dockerfile Structure

```dockerfile
FROM ubuntu:22.04
WORKDIR /app
COPY . .
RUN apt update && apt install -y nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 10) Docker Compose Example

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: mysql:8
```

## 11) Essential Docker Commands

```bash
docker version
docker info
docker images
docker ps
docker ps -a
docker pull nginx
docker build -t myapp .
docker run -d -p 80:80 nginx
docker exec -it <container> bash
docker logs <container>

docker stop <container>
docker start <container>
docker rm <container>
docker rmi <image>
docker volume ls
docker network ls
docker compose up -d
docker compose down
```

## 12) Docker Security

- Run containers as non-root users
- Scan images for vulnerabilities
- Use trusted base images
- Store secrets securely
- Limit CPU and memory resources
- Keep images updated
- Remove unused images and containers
- Use read-only file systems where possible

## 13) Common Troubleshooting

```bash
docker logs <container>
docker inspect <container>
docker exec -it <container> bash
docker stats
docker system df
docker system prune
# Check port mappings
# Verify volume mounts
# Check network connectivity
```

## 14) Docker Best Practices

- Keep images small (Alpine/slim images)
- Use multi-stage builds
- Pin image versions (avoid `latest`)
- Use `.dockerignore`
- One process per container
- Persist data using volumes
- Use environment variables for configuration
- Regularly scan images for security issues
- Monitor container health
- Clean up unused resources

## 15) Docker vs Virtual Machine

| Feature           | Docker Container       | Virtual Machine     |
|-------------------|------------------------|---------------------|
| OS Kernel         | Shares host OS kernel  | Runs a full guest OS|
| Weight            | Lightweight            | Heavier             |
| Startup Time      | Starts in seconds      | Takes minutes       |
| Resource Usage    | Low resource usage     | Higher resource usage|
| Portability       | High portability       | Less portable       |

## 16) Docker in One Sentence

> "Docker packages applications and their dependencies into lightweight, portable containers, enabling consistent deployment and execution across any environment."
