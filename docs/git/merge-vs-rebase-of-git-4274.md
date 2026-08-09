---
title: "Merge vs Rebase of Git"
---

# Merge vs Rebase of Git

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786083604274.jpeg)

</details>


Both Merge and Rebase integrate changes from one branch into another — but they do it differently.

## Comparison

| | Merge | Rebase |
|---|---|---|
| | Combines branches. | Moves commits on top of another branch. |
| | Creates a merge commit. | Rewrites history. |
| | Preserves original history. | Creates a cleaner, linear history. |
| | Safe for shared / public branches. | Best for local / private branches. |
| | History can be more complex. | |
| Command | `git merge feature` | `git rebase main` |

## Example

**Before merge/rebase:**
- main: A → B → C
- feature (branches from B): D → E

**After Merge:**
- main: A → B → C → M (merge commit)
- feature: D → E feeds into M
- `M` is a merge commit

**After Rebase:**
- main (linear): A → B → C → D' → E'
- D' and E' are new commits (rebased on main)

## Think of It

- **Merge** = bring branches together.
- **Rebase** = move your work on top.

## When to Use

- Use **Merge** for shared branches, preserving full history, avoiding rewrite.
- Use **Rebase** for cleaning feature branches, linear history, unshared commits.

## Golden Rule

Do not rebase commits that other developers are already using.

## Memory Tip

- Merge = Preserve history
- Rebase = Rewrite history
