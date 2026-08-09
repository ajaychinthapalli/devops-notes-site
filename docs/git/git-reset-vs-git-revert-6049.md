---
title: "Git Reset vs Git Revert"
---

# Git Reset vs Git Revert

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785858526049.jpeg)

</details>


Undo Changes in Git

## 1. Quick Summary

- **Git Reset**: moves the branch pointer backward.
- **Git Revert**: creates a new commit that reverses an earlier commit.

**Note:** Reset rewrites history. Revert preserves history.

## 2. Comparison

| | Git Reset | Git Revert |
|---|---|---|
| Main purpose | Move branch pointer backward | Create a reverse commit |
| Commit history | Rewrites/removes local history | Preserves history |
| Best used for | Local, unshared commits | Pushed/shared commits |
| Safety on shared branches | Risky | Safe |
| Creates a new commit | No | Yes |
| Can affect working files | Yes, depending on mode | Applies reverse changes |
| Typical use | Clean up local mistakes | Undo changes safely |

## 3. Git Reset

```bash
git reset <commit>
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

- **Soft reset**: removes last commit, keeps changes staged.
- **Mixed reset**: removes last commit, keeps changes in working directory, unstages changes.
- **Hard reset**: removes last commit and working changes; can permanently discard work.

## 4. Git Revert

```bash
git revert <commit-hash>
git revert a1b2c3d
```

- Creates a new commit that reverses an earlier commit.
- Keeps full history visible.
- Safe for shared branches like main/master/develop.

## 5. Visual Difference

### A) Reset

`A → B → C`, after reset: `A → B` (Commit C removed from branch history)

### B) Revert

`A → B → C`, after revert: `A → B → C → Revert C` (Commit C remains, but its changes are reversed)

## 6. Which should you choose?

**Use Git Reset when:**
- commits are still local
- you want to rewrite or clean up history
- you committed too early
- you need to unstage files

**Use Git Revert when:**
- the commit has already been pushed
- others may have pulled the branch
- you are on a shared/protected branch
- you want a clear audit trail

## 7. Common Workflow

- Local mistake → Git Reset
- Shared or pushed mistake → Git Revert

## 8. Takeaway

Reset changes history. Revert adds history.

Use reset carefully for local work; use revert for shared branches.
