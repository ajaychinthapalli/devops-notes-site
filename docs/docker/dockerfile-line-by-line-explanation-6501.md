---
title: "Dockerfile Line-by-Line Explanation"
---

# Dockerfile Line-by-Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785221416501.jpeg)

</details>


## Example Dockerfile

```dockerfile
FROM python:3.12-slim
LABEL maintainer="Jyothi Mulkuntla"
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
```

## Line-by-Line Explanation

1. **FROM** — selects the base image.
2. **LABEL** — adds image metadata.
3. **ENV** — sets environment variables.
4. **ENV** — sets environment variables.
5. **WORKDIR** — sets the working directory.
6. **COPY** — copies files into the image.
7. **RUN** — executes commands during image build.
8. **COPY** — copies files into the image.
9. **EXPOSE** — documents the container port.
10. **CMD** — default command when the container starts.

**Key distinction:**
- **RUN** = build time
- **CMD** = container runtime

## How It Works

Local files (on your machine) e.g., app.py, requirements.txt, Dockerfile, etc.

```
Local files -> docker build -> Docker Image (read-only) -> docker run -> Container (running) -> Your app running in the container!
```

## Build & Run

1. **Build the image**
   ```bash
   docker build -t my-python-app:1.0 .
   ```
2. **Run the container**
   ```bash
   docker run -p 8000:8000 my-python-app:1.0
   ```

**What these do:**
- `-t my-python-app:1.0` -> tags the image
- `-p 8000:8000` -> maps host port 8000 to container port 8000
- `my-python-app:1.0` -> image name:tag

## Summary

- **Dockerfile** = instructions to build an image
- **Image** -> runs as a **Container**

```
Dockerfile -> Image -> Container (running)
```
