---
title: "CI/CD — Line-by-Line Explanation"
---

# CI/CD — Line-by-Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785315452346.jpeg)

</details>


- CI/CD = Continuous Integration / Continuous Delivery / Continuous Deployment
- Automates build, test, and release of software

## 1. CI — Continuous Integration

1. Developer writes code
2. Commit code
3. Push to Git repository
4. Pipeline triggers automatically
5. Checkout source code
6. Install dependencies
7. Build / compile application
8. Run code-quality checks
9. Run automated tests
10. Create artifact
11. Store artifact in repository

## 2. CD — Continuous Delivery

1. Deploy to dev / QA / staging
2. Run additional tests
3. Manual approval
4. Deploy to production

**Note:** Continuous Delivery = production needs approval.

## 3. Continuous Deployment

- If all tests pass, deploy automatically to production.

```
Code -> Build -> Test -> Security Scan -> Deploy
```

**Tooling / Tech Used:** Git, GitHub Actions, Docker, Kubernetes, Security Scan, Artifact Repository, Container Registry, kubectl

## 4. Example Pipeline (YAML-like)

```yaml
on: push to main
- checkout code
- install dependencies
- run tests
- build application
- build Docker image
- deploy with kubectl
```

## 5. Complete Flow (End-to-End)

```
Developer -> Git Commit -> Push Code -> Build -> Test -> Quality Check -> Security Scan -> Artifact -> Docker Image -> Registry -> Dev -> Testing -> Approval -> Production
```

## 6. CI vs CD (At a Glance)

- **CI:** integrates code, builds, tests, finds bugs early
- **CD:** delivers/deploys application, releases faster

## 7. Key Takeaway

CI checks if code is ready; CD delivers it to the environment.
