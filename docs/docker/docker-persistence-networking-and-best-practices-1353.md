---
title: "Docker Persistence, Networking & Best Practices"
---

# Docker Persistence, Networking & Best Practices

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785563801353.jpeg)

</details>


Store Data — Connect Containers — Build Securely

## 1. Persistence Basics

Container layer = temporary. Important data should live outside the container.

- **Named volume** — best for databases / prod data
- **Bind mount** — best for local dev / host files
- **tmpfs** — temporary or sensitive runtime data
- **Container layer** — disposable only

## 2. Volume Commands

```bash
docker volume create app-data
docker volume ls
docker volume inspect app-data
docker run -d --name database \
  -v app-data:/var/lib/postgresql/data \
  postgres:17-alpine
```

Named volumes survive container removal until explicitly deleted.

## 3. Bind Mounts + tmpfs

```bash
--mount type=bind,source="$(pwd)/config",target=/app/config,readonly
```

Host `$(pwd)/config` ↔ Container `/app/config`

- Use bind mounts when container needs host files.
- Make config mounts read-only when possible.
- tmpfs = fast temporary runtime data.

## 4. Backup & Restore

**Backup:**
```bash
docker run --rm -v app-data:/data \
  -v "$(pwd)/backup:/backup" alpine \
  tar czf /backup/app-data.tar.gz -C /data .
```

**Restore:**
```bash
docker run --rm -v app-data:/data \
  -v "$(pwd)/backup:/backup" alpine \
  sh -c "cd /data && tar xzf /backup/app-data.tar.gz"
```

Back up regularly + test restores.

## 5. Networking Basics

Containers can talk to other containers, host, and external services.

- bridge
- host
- none
- overlay
- macvlan

User-defined bridge is usually best.

## 6. Create a Network

```bash
docker network create backend
docker network ls
docker network inspect backend
```

`database` ↔ network `backend` ↔ `api`

Use service/container names instead of fixed IPs: `api can reach database:5432`

## 7. Port Publishing

```bash
docker run -p 8080:80 nginx:alpine
docker run -p 127.0.0.1:8080:80 nginx:alpine
```

Host `localhost:8080` maps to Container port `80`. Publish only ports you need.

## 8. Networking Best Practices

- Use separate frontend and backend networks
- Keep databases on internal/private networks
- Use service DNS names
- Don't expose DB ports to the internet
- Avoid host networking unless required
- Bind private services to 127.0.0.1 when needed

## 9. Compose Example

```yaml
# compose.yaml
services:
  proxy:
    image: nginx:alpine
    ports: ["80:80"]
    networks: [frontend]
  api:
    build: ./api
    environment:
      - DATABASE_HOST=database
    networks: [frontend, backend]
  database:
    image: postgres:17-alpine
    volumes:
      - database-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      backend:
        aliases: [database]

networks:
  frontend: {}
  backend:
    internal: true
volumes:
  database-data: {}
```

```bash
docker compose up -d
docker compose ps
docker compose logs -f
```

## 10. Dockerfile Best Practices

- Use multi-stage builds
- Use minimal trusted base images
- Copy package files first for caching
- Use .dockerignore
- Run as non-root user
- Add HEALTHCHECK
- Pin versions / rebuild regularly
- Exclude secrets

## 11. Production Checklist

- Use trusted minimal images
- Run as non-root
- Read-only root filesystem when possible
- Set CPU and memory limits
- Configure restart policy
- Back up volumes
- Separate public/private networks
- Do not commit .env secrets
- Scan and update images regularly
- Test healthchecks and restores

## 12. Golden Rule

Containers are replaceable. Application data must not be.

Persist the data -> isolate the network -> minimize the image -> secure the runtime -> automate the deployment.
