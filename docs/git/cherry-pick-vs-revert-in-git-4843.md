---
title: "Cherry Pick vs Revert in Git"
---

# Cherry Pick vs Revert in Git

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786091364843.jpeg)

</details>


## Comparison

| Feature | Git Cherry-Pick | Git Revert |
|---|---|---|
| Purpose | Applies a specific commit from another branch onto your current branch | Undoes the changes introduced by a specific commit |
| Command | `git cherry-pick <commit-hash>` | `git revert <commit-hash>` |
| History | Creates a new commit containing the selected commit's changes | Creates a new commit that reverses the target commit |
| Existing Commit | Copies the changes of an existing commit | Cancels the effect of an existing commit |
| Best Use | Bring one specific fix/feature from another branch | Safely undo a bad commit already pushed/shared |
| Shared Branch Safety | Generally safe when used carefully | Very safe for shared/public branches |
| Changes Commit Hash? | Yes — the applied commit gets a new hash | Yes — the revert itself is a new commit |
| Typical Scenario | Move a hotfix from develop to main | Undo a faulty production commit |

## 1. Git Cherry-Pick

Cherry-Pick = Pick one specific commit and apply it to your current branch.

```bash
git checkout main
git cherry-pick a1b2c3d
```

**Example Scenario:**

- develop: A → B → C → D
- main: A → B

**After cherry-pick:**

- main: A → B → D'

D' contains the same changes as D, but it has a new commit hash.

## 2. Git Revert

Revert = Create a new commit that reverses an earlier commit.

```bash
git revert a1b2c3d
```

**Example Commit Line:** A → B → C → D

If commit C introduced a problem: `git revert C`

**Result:** A → B → C → D → Revert-C

The original commit C remains in Git history, but its changes are reversed by a new commit.

## Easy Way to Remember

- Cherry-Pick = Bring a commit IN
- Revert = Take a commit's changes OUT

## Typical Examples

- Hotfix on another branch → Cherry-Pick → Production
- Bad production commit (A→B→C ✗) → Revert → Safe rollback

## Important Difference

`git revert` is usually preferred over deleting or rewriting history on shared branches because it preserves the complete Git history.

Cherry-Pick adds selected changes. Revert adds an opposite commit to undo selected changes.
