---
title: "Git & GitHub Branching Strategies"
---

# Git & GitHub Branching Strategies

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785390590874.jpeg)

</details>


One-Page Guide

## What is a Branching Strategy?

A branching strategy is a structured workflow that defines how developers create, manage, merge, and release code changes using Git. It helps teams collaborate efficiently while maintaining a stable and reliable codebase.

## Git Branching Workflow

1. Main Branch (Production)
2. Create Feature Branch
3. Develop & Commit Changes
4. Push to GitHub
5. Create Pull Request (PR)
6. Code Review & CI Tests
7. Merge into Main
8. Deploy to Production

## Popular Git Branching Strategies

| Strategy | Best For | Description |
|---|---|---|
| Git Flow | Large projects | Separate branches for features, releases, and hotfixes |
| GitHub Flow | Continuous Deployment | Work on feature branches and merge directly into main after review |
| GitLab Flow | DevOps teams | Combines feature branches with environment branches |
| Trunk-Based Development | Fast-moving teams | Developers commit frequently to a single main branch |
| Release Branching | Enterprise applications | Dedicated branches for preparing software releases |

## Common Git Branches

- **main** branches into: `develop`, `release/v2.0`, `hotfix/security-fix`
- **develop** branches into: `feature/login`, `feature/payment`, `feature/profile`

### Branch Purpose

| Branch | Purpose |
|---|---|
| main | Production-ready code |
| develop | Integration branch for ongoing development |
| feature/ | New features or enhancements |
| release/ | Prepare a new software release |
| hotfix/ | Urgent production bug fixes |
| bugfix/ | Fix non-critical issues before release |

## Typical Feature Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/user-auth
   ```
2. **Develop and commit changes**
   ```bash
   git add .
   git commit -m "Add user authentication"
   ```
3. **Push branch to GitHub**
   ```bash
   git push origin feature/user-auth
   ```
4. **Create a Pull Request**
   - Open PR
   - Request code review
   - Run CI/CD pipeline
5. **Merge into main or develop**

## Pull Request Best Practices

- Keep PRs small and focused
- Write meaningful commit messages
- Link related issues or tickets
- Ensure CI/CD checks pass
- Request peer reviews
- Resolve merge conflicts before merging

## GitHub Branch Protection

- Require Pull Requests before merging
- Require code reviews
- Require successful CI checks
- Restrict direct pushes to main
- Enable signed commits (optional)
- Delete merged branches automatically

## Choosing the Right Strategy

| Team Size | Recommended Strategy |
|---|---|
| Solo Developer | GitHub Flow |
| Small Team | GitHub Flow or Trunk-Based Development |
| Startup | Trunk-Based Development |
| Medium Team | Git Flow |
| Large Enterprise | Git Flow or GitLab Flow |

## Best Practices

- Create a branch for every new feature or bug fix
- Keep branches short-lived
- Commit frequently with clear messages
- Rebase or merge regularly to stay updated
- Use Pull Requests for all code changes
- Protect the main branch from direct commits
- Automate testing with CI/CD before merging

## Key Takeaway

A well-defined Git branching strategy improves collaboration, minimizes merge conflicts, ensures code quality, and enables reliable software releases. Whether you choose GitHub Flow, Git Flow, or Trunk-Based Development, the goal is to keep organized, maintain a stable main branch, and deliver software quickly and safely.
