---
title: "Docker Cheat Sheet — Master Docker, Deploy Anywhere"
---

# Docker Cheat Sheet — Master Docker, Deploy Anywhere

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785561910608.jpeg)

</details>


## 1. Core Flow

Dockerfile -> Build -> Image (Immutable) -> Run -> Container (Running) -> Registry (Docker Hub / Private Registry) -> Deploy Anywhere

```dockerfile
FROM node:18
COPY . .
RUN npm install
CMD ["node","app.js"]
```

## 2. Core Concepts

- **Image** — Read-only template
- **Container** — Running instance of image
- **Registry** — Store & distribute images
- **Volume** — Persist data beyond container
- **Network** — Connect containers
- **Compose** — Define multi-container apps

## 3. Essential Commands

```bash
docker version                          # client & server version
docker info                             # system-wide info
docker ps                               # running containers
docker images                           # list images
docker pull nginx:alpine                # pull image
docker build -t myapp:1.0 .             # build image
docker run -d --name web -p 8080:80 nginx:alpine
docker stop/start/restart/rm <container>
docker logs -f                          # follow logs
docker exec -it web sh                  # shell into container
```

## 4. Production Run

```bash
docker run -d --name myapp \
  --restart unless-stopped \
  -p 80:8080 \
  --env-file .env \
  --memory 512m --cpus 0.50 \
  myapp:1.0
```

Use `--restart unless-stopped` to survive reboots.

## 5. Ports / Env / Volumes

- **Ports:** `-p host:container` e.g., `-p 8080:80`
- **Env:** `--env-file .env` or `-e KEY=value`
- **Volumes:**
  - Named Volume: `-v data:/data`
  - Bind Mount: `-v $(pwd):/app`
- **Backup & Restore:**
  ```bash
  docker run --rm -v data:/data -v $(pwd):/backup alpine tar czf /backup/data.tar.gz -C /data .
  ```

## 6. Networks

```bash
docker network create mynet
docker run -d --name db --network mynet postgres
docker run -d --name api --network mynet myapi
```
Same network => use service/container names. e.g., api can reach db:5432

## 7. Dockerfile Tips

- Use multi-stage build to keep images small.
- Run as non-root user.
- Use EXPOSE to document ports.
- Add HEALTHCHECK for reliability.
- Use CMD for defaults.
- Use .dockerignore to keep build context clean.

## 8. Compose

Define multi-container applications.

```yaml
# docker-compose.yml
services:
  web:
    image: myapp:1.0
    ports: ["8080:8080"]
    env_file: .env
    depends_on:
      db:
        condition: service_healthy
    volumes:
      - data:/data
    networks:
      - net
```

Key: services, ports, env_file, depends_on & healthcheck, volumes, networks.

**Common Commands:**
```bash
docker compose up -d
docker compose ps
docker compose logs -f
docker compose down
```

## 9. Deploy Anywhere Workflow

1. **Build** — Build the same image everywhere.
2. **Test** — Automated tests against the image.
3. **Push** — Push to registry (tagged).
4. **Pull** — Pull in target environment.
5. **Up** — Run using the same image.
6. **Verify** — Healthchecks, smoke tests, monitoring.
7. **Rollback** — Revert to previous known good image.

## 10. Remote / Multi-Arch

**Remote Deploy:**
```bash
docker context create prod --host="ssh://user@server"
docker context use prod
docker ps    # runs on remote
```

**Multi-Arch Builds:**
```bash
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest --push
```

## 11. Debugging

```bash
docker inspect <container|image>
docker stats <container>
docker top <container>
docker port <container>
docker events
docker compose config
```

## 12. Cleanup

```bash
docker system prune -a   # remove unused everything
docker image prune
docker container prune
docker volume prune
```

## 13. Security Checklist

- Run containers as non-root user
- Do not store secrets in images
- Avoid --privileged containers
- Drop unnecessary Linux capabilities
- Use read-only root filesystem
- Pin image versions (avoid :latest)
- Set resource limits (CPU/Memory)
- Backup important volumes regularly

## 14. Compose Quick Commands

```bash
docker compose up -d
docker compose ps
docker compose logs -f <svc>
docker compose restart <svc>
docker compose down
docker compose down -v
```

## 15. Golden Rule

Build once -> test the same image -> push it -> deploy the same image everywhere.
