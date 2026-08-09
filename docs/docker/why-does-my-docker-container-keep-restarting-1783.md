---
title: "Why Does My Docker Container Keep Restarting?"
---

# Why Does My Docker Container Keep Restarting?

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785488571783.jpeg)

</details>


A container usually restarts because the main process (PID 1) exits or crashes. Docker tries to restart it if a restart policy is configured.

## 1. Application Crashed (Most Common)

**Cause:** Application throws an exception or crashes immediately.

**Analogy:** A shop opens and immediately closes because the owner becomes sick.

**Check:**
```bash
docker logs <container_name>
```

## 2. Main Process Exits

**Cause:** The process started by CMD or ENTRYPOINT finishes.

**Analogy:** A driver reaches the destination and turns off the engine.

**Example:**
```dockerfile
CMD ["echo", "Hello"]
```
The container prints "Hello" and exits.

## 3. Incorrect CMD or ENTRYPOINT

**Cause:** Wrong executable name or invalid command.

**Check:**
```bash
docker inspect <container_name>
```

## 4. Missing Required Environment Variables

**Cause:** The application expects variables like database credentials or API keys.

**Example:**
```bash
docker run -e DB_HOST=mysql myapp
```
Without DB_HOST, the application may fail to start.

## 5. Database or Dependency Not Ready

**Cause:** The application starts before required services (database, Redis, etc.) are available.

**Analogy:** An employee arrives before the office is unlocked.

**Solution:** Use health checks or wait-for scripts. In Docker Compose, use health checks and dependency conditions.

## 6. Port Already in Use

**Cause:** Host port is already occupied.

**Check:**
```bash
docker ps
netstat -tulnp
```

## 7. Out of Memory (OOM Kill)

**Cause:** The container exceeds its memory limit.

**Check:**
```bash
docker inspect <container_name>
docker events
dmesg | grep -i oom
```

## 8. Restart Policy Enabled

**Cause:** Docker automatically restarts the container after it exits.

**Check:**
```bash
docker inspect <container_name>
```
Look for: RestartPolicy

**Common policies:**
- no
- on-failure
- always
- unless-stopped

## 9. Health Check Failure

**Cause:** The health check keeps failing, and an external orchestrator (such as Kubernetes or Docker Compose setups with monitoring) may restart the container.

**Check:**
```bash
docker inspect <container_name>
```

## 10. File Permission Issues

**Cause:** The application cannot read configuration files or execute binaries.

**Check:**
```bash
ls -l
```

## Troubleshooting Commands

| Command | Purpose |
|---|---|
| `docker ps -a` | View all containers |
| `docker logs <container_name>` | Check application logs |
| `docker inspect <container_name>` | Inspect configuration |
| `docker events` | View Docker events |
| `docker stats` | Monitor CPU and memory |
| `docker exec -it <container_name> sh` | Open a shell (if running) |

## Quick Troubleshooting Flow

1. Container Restarting
2. Check Logs (docker logs)
3. Application Error?
   - Yes -> Fix App
   - No -> Check CMD/ENTRYPOINT -> Check Environment Variables -> Check Dependencies (DB, Redis) -> Check Memory (OOM) -> Check Restart Policy

## Interview Tips

- The most common reason is that the main process (PID 1) exits.
- Start troubleshooting with docker logs — it's usually the fastest way to identify the cause.
- Verify CMD and ENTRYPOINT are correct.
- Check environment variables, application dependencies, and resource limits.
- Review the configured restart policy to understand why Docker keeps attempting restarts.

## Quick Revision

- **docker logs** — First place to investigate
- **PID 1 exits** — Container stops/restarts
- **Wrong CMD/ENTRYPOINT** — Startup failure
- **Missing environment variables** — App fails to initialize
- **Dependency unavailable** — Startup failure
- **OOM kill** — Memory exhaustion
- **Restart policy** — Docker restarts exited containers
- **Health check failures** — May trigger restarts in managed environments
