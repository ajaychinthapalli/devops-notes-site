---
title: "Git Fetch vs Git Pull"
---

# Git Fetch vs Git Pull

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785861833605.jpeg)

</details>


## 1. git fetch

git fetch downloads the latest commits, branches, and tags from the remote repository without changing the current working branch.

```bash
git fetch origin
git log HEAD..origin/main
git diff HEAD origin/main
git merge origin/main
```

Remote Repo → local remote-tracking branch `origin/main` (updated); working branch `main` (unchanged).

**Note:** Safer for review before merging.

## 2. git pull

git pull downloads remote changes and immediately integrates them into the current branch.

```bash
git pull origin main
git pull --rebase origin main
```

**Note:** By default, `git pull` ≈ `git fetch` + `git merge`.

Remote Repo → Current local branch `main` → Merged/Rebased into current branch.

## 3. Difference at a glance

| | git fetch | git pull |
|---|---|---|
| Downloads remote changes | Yes | Yes |
| Changes current branch | No | Yes |
| Auto merges or rebases | No | Yes |
| Safer for reviewing | Yes | Less controlled |
| Best for | Inspecting updates first | Quickly syncing a branch |

## 4. Example workflow

```bash
git fetch origin
git diff main origin/main
git merge origin/main
```

Review then integrate with confidence!

## 5. Key takeaway

- Use "git fetch" when you want to review remote changes before integrating them.
- Use "git pull" when you trust the remote changes and want to update your current branch immediately.
