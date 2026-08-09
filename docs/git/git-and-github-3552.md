---
title: "Git & GitHub"
---

# Git & GitHub

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785316283552.jpeg)

</details>


Version Control + Collaboration + Code Management

## What is Git?

Git is a distributed version control system that helps developers track changes in code, collaborate efficiently, and manage projects.

## What is GitHub?

GitHub is a cloud-based platform built on Git. It enables hosting repositories, collaborating with teams, and managing projects.

## Git Basics

```bash
git init
# Initialize a new Git repository.

git clone <url>
# Clone an existing repository.

git add <file>
# Add changes to the staging area.

git commit -m "message"
# Commit staged changes with a message.

git status
# Check the status of changes.

git log
# View commit history.

git branch
# List, create, or delete branches.

git checkout <branch>
# Switch to another branch.

git merge <branch>
# Merge changes from one branch into another.

git pull
# Fetch and merge changes from remote repo.

git push
# Push changes to remote repo.
```

## GitHub Features

- **Repositories** — Store and manage your code.
- **Pull Requests** — Review and discuss changes before merging.
- **Issues** — Track bugs, enhancements, and tasks.
- **Actions** — Automate workflows with CI/CD pipelines.
- **Projects** — Organize tasks and track project progress.
- **Wiki** — Document your project.
- **Releases** — Package and distribute your software.
- **Security** — Dependabot, code scanning, and vulnerability alerts.

## Collaboration Flow

```
Developer (Work) -> Create Branch -> Commit Changes -> Push to GitHub -> Open PR & Merge
```

## Git Workflow

```
Working Directory --git add--> Staging Area --git commit--> Local Repository --git push--> Remote Repository
```

## .gitignore — Ignore Unwanted Files

Examples:
- `node_modules/`
- `.env`
- `*.log`
- `build/`

## Best Practices

- Commit small & meaningful changes.
- Write clear commit messages.
- Use branches for new features.
- Keep your main branch stable.
- Review code before merging.

## Key Takeaway

Git helps you track changes locally, and GitHub helps you collaborate and manage your code in the cloud.

- Git = Local Version Control
- GitHub = Cloud Collaboration
- Better Code + Better Teams + Better Products
