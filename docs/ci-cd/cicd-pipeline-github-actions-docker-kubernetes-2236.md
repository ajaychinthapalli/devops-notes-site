---
title: "CI/CD Pipeline (GitHub Actions + Docker + Kubernetes)"
---

# CI/CD Pipeline (GitHub Actions + Docker + Kubernetes)

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785766742236.jpeg)

</details>


## CI/CD Workflow

1. Developer
2. Git Push
3. GitHub Actions
   - Checkout Code
   - Install Dependencies
   - Run Unit Tests
   - Run Linting
   - Build Docker Image
   - Scan Image (Trivy)
   - Push Image to Registry
   - Deploy to Kubernetes
4. Production

## Project Structure

```
project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── Dockerfile
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
└── app/
```

## GitHub Actions Workflow (.github/workflows/ci-cd.yml)

```yaml
name: CI/CD Pipeline
on:
  push:
    branches:
      - main

env:
  IMAGE_NAME: my-app

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Run Tests
        run: npm test
      - name: Lint Code
        run: npm run lint

  docker:
    needs: build-test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build Docker Image
        run: docker build -t ${{ secrets.DOCKER_USERNAME }}/${{ env.IMAGE_NAME }}:${{ github.sha }} .
      - name: Scan Image
        uses: aquasecurity/trivy-action@0.28.0
        with:
          image-ref: ${{ secrets.DOCKER_USERNAME }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
      - name: Push Docker Image
        run: docker push ${{ secrets.DOCKER_USERNAME }}/${{ env.IMAGE_NAME }}:${{ github.sha }}

  deploy:
    needs: docker
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure kubectl
        uses: azure/setup-kubectl@v4
      - name: Set Kubernetes Context
        run: |
          mkdir -p ~/.kube
          echo "${{ secrets.KUBECONFIG }}" > ~/.kube/config
      - name: Update Deployment Image
        run: |
          kubectl set image deployment/my-app \
            my-app=${{ secrets.DOCKER_USERNAME }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
      - name: Verify Rollout
        run: kubectl rollout status deployment/my-app
```

## Required GitHub Secrets

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
- `KUBECONFIG`

## Pipeline Stages

| Stage | Purpose |
|---|---|
| Checkout | Download source code |
| Install | Install dependencies |
| Test | Run unit tests |
| Lint | Check code quality |
| Build | Build Docker image |
| Scan | Scan image for vulnerabilities |
| Push | Push image to registry |
| Deploy | Update Kubernetes deployment |
| Verify | Confirm successful rollout |

## Kubernetes Deployment Update

```bash
kubectl set image deployment/my-app my-app=myrepo/my-app:<image-tag>
```

## Best Practices

- Use `npm ci` for reproducible dependency installation.
- Store credentials in GitHub Secrets, never in the repository.
- Scan container images before deployment.
- Tag images with immutable versions (for example, the Git commit SHA).
- Verify deployments with `kubectl rollout status`.
- Protect the main branch with required reviews and status checks.
- Add rollback and deployment notifications (Slack, Teams, or email) for production pipelines.

## Interview Tips

- **CI** (Continuous Integration) automates building, testing, and validating code changes.
- **CD** (Continuous Delivery/Deployment) automates releasing applications to an environment.
- A typical pipeline is: Checkout → Build → Test → Scan → Push → Deploy → Verify
- Keep secrets in a secure secret store (such as GitHub Secrets).
- Use immutable image tags instead of `latest` for reliable deployments.

## Quick Revision Checklist

- Git Push → Triggers pipeline
- Checkout → Get source code
- Test & Lint → Validate quality
- Build → Create Docker image
- Scan → Check for vulnerabilities
- Push → Upload image to registry
- Deploy → Update Kubernetes
- Verify → Confirm rollout success
