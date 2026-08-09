---
title: "Docker Inspect & Debug Like a Pro"
---

# Docker Inspect & Debug Like a Pro

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785565894842.jpeg)

</details>


Troubleshooting Containers Fast

**Flow:** container status -> logs -> inspect -> resources -> enter container -> network/storage -> events

## 1. What to Check First?

```bash
docker ps
docker ps -a
```
- Check STATUS, PORTS, IMAGE, NAME
- Exited containers usually mean startup or config issues

```
$ docker ps -a
CONTAINER ID  IMAGE       STATUS       PORTS                    NAMES
a1b2c3d4e5f6  my-app:1.0  Exited (1)   0.0.0.0:8080->8000/tcp   my-app
7f8e9d0c1b2a  redis:7     Up 2 hours   0.0.0.0:6379->6379/tcp   redis
```

## 2. Read the Logs

```bash
docker logs my-app
docker logs -f my-app
docker logs --tail 100 my-app
docker compose logs -f web
```

stdout + stderr = fastest clue

## 3. Inspect Configuration

```bash
docker inspect my-app
```
Look for: Status, ExitCode, OOMKilled, RestartCount, Env, Mounts, Path + Args, NetworkSettings

```
{{.State.Status}}   {{.State.ExitCode}}
```

## 4. Network & Ports

- `docker port my-app`
- inspect container IP
- inspect attached networks

`8080 (host) -> 8000 (container)`

## 5. Exec into the Container

```bash
docker exec -it my-app sh
docker exec -it my-app bash
docker exec my-app env
docker exec my-app curl http://localhost:8000/health
```

Test from inside.

## 6. Docker Debug & Resources

```bash
docker debug my-app
```
Great for minimal images / no shell.

```bash
docker stats my-app
docker top my-app
```
Shows CPU, memory, PIDs, processes.

## 7. Health, Volumes & Files

```bash
docker inspect --format '{{.State.Health}}' my-app
docker volume inspect app-data
docker diff my-app
docker cp my-app:/var/log/app.log ./app.log
```

## 8. Events & Compose

```bash
docker events --filter container=my-app
# watch die / restart / oom / health_status
docker compose ps
docker compose config
docker compose exec web sh
```

## 9. Pro Debug Workflow

1. **PS** — running?
2. **LOGS** — app output
3. **INSPECT** — config
4. **STATS** — resources
5. **TOP** — processes
6. **EXEC** — test inside
7. **PORT** — mapping
8. **NETWORK** — connectivity
9. **DIFF** — file changes
10. **EVENTS** — daemon activity

## Golden Tips

- Inspect before changing
- Follow logs first
- Check exit code
- Verify ports & mounts
- Test inside container
- Fix Dockerfile, rebuild, redeploy
