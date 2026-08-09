---
title: "Git Stash vs Git Reset"
---

# Git Stash vs Git Reset

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785934361499.jpeg)

</details>


## Git Stash

Temporarily shelves (saves) your changes without committing, so you can work on something else and come back later.

**How it works:**
- Saves your working directory and staging area changes to a stack.
- Working directory becomes clean.

**Common Commands:**

```bash
git stash          # Stash current changes
git stash list      # List all stashes
git stash apply     # Apply latest stash (keep it)
git stash pop        # Apply latest stash and remove it
git stash drop        # Delete a stash
git stash clear        # Clear all stashes
```

**When to use?**
- When you have uncommitted changes and want to switch branches or pull latest changes without committing.

Flow: Working Directory (Changes: file1.txt, file2.txt, file3.txt) → `git stash` → Stash (Saved) → `git stash apply/pop` → Working Directory (Clean)

**Key Point:** Stash saves changes away safely and brings them back later.

## Git Reset

Moves the HEAD and branch pointer to a specific commit and optionally changes the working directory and staging area.

**How it works:**
- Moves HEAD to a target commit.
- Can change staging area and working directory depending on the option.

**Common Commands:**

```bash
git reset --soft <commit>    # Move HEAD, keep changes staged
git reset --mixed <commit>   # Move HEAD, unstage changes (default)
git reset --hard <commit>    # Move HEAD, discard all changes
```

**When to use?**
- When you want to undo commits or move back to a previous state in history.

Commits History: `C1 → C2 → C3 → C4 (HEAD)`

- `git reset --soft C2` → `C1 → C2 (HEAD) → (C3) → (C4)` (C3, C4 kept as staged changes)
- `git reset --mixed C2` → `C1 → C2 (HEAD) → (C3) → (C4)` (C3, C4 kept as unstaged changes)
- `git reset --hard C2` → `C1 → C2 (HEAD)` (C3, C4 discarded)

**Key Point:** Reset moves history pointer and can discard changes permanently.

## Quick Comparison

| Feature | Git Stash | Git Reset |
|---|---|---|
| Purpose | Temporarily save changes | Move HEAD to a specific commit |
| Affects History? | No | Yes |
| Safe? | Yes, changes can be restored | Can be dangerous (especially `--hard`) |
| When | Switching context temporarily | Undo commits / change history |

**Remember:** Use Stash to pause your work. Use Reset to rewind your history.
