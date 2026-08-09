---
title: "Git Architecture"
---

# Git Architecture

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786209271937.jpeg)

</details>


## Line-by-Line Explanation

1. **Working Directory** → where files are created, edited, or deleted. (your project files)
2. **Staging Area / Index** → selected changes prepared using `git add`.
3. **Local Repository** (.git/) → commits are stored here using `git commit`.
4. **Remote Repository** → GitHub / GitLab / Bitbucket; code is sent here using `git push`.

## Main Flow (Forward Flow)

1. Working Directory
2. `git add` → Staging Area / Index
3. `git commit` → Local Repository (.git/)
4. `git push` → Remote Repository

## Reverse Flow (From Remote to Local)

- `git fetch`: downloads changes from remote to local repository.
- `git pull` = fetch + merge/rebase.

## Important Git Internals

- **HEAD** = current checked-out position.
- **Branch** = movable reference to a commit.
- **Commit** = snapshot + metadata.
- **Tree** = directory structure.
- **Blob** = file content.
- **Git Objects:** Blob, Tree, Commit, Tag.

Commit structure: Commit (snap + meta) → Tree → Blob, Blob

## Example (Typical Workflow)

1. `git init` → initialize new repository
2. `git status` → check current status
3. `git add app.py` → stage file
4. `git commit -m "Add app.py"` → commit changes
5. `git push -u origin main` → push to remote

`-u` sets upstream tracking (first time push).

## Commits & Branches (Mini View)

- c1 (Initial Commit) → c2 (Add file) → c3 (Update code) → c4 (Fix bug) [main]
- c3 branches to c3a (Work in progress) [feature/login]

## Memory Trick

Edit → Add → Commit → Push

Keep it simple. Keep it versioned.
