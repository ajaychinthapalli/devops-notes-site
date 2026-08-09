---
title: "Git Cherry-Pick"
---

# Git Cherry-Pick

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786091083847.jpeg)

</details>


Git Cherry-Pick lets you apply a specific commit from one branch to another without merging the entire branch.

## What It Does

- Applies one selected commit to another branch.
- Does not merge the full branch.
- Creates a new commit with a new commit ID.
- Great for hotfixes and backports.

```bash
git cherry-pick <commit-id>
```

## Example

**1) Before cherry-pick**

- main: A → B → C
- feature: A → B → D → E

We only want commit D.

**2) Command**

```bash
git checkout main
git cherry-pick <commit-id>
```

**3) After cherry-pick**

- main: A → B → C → D'

D' has the same changes as D, but a new commit ID.

## Think of It

Cherry-Pick = pick only the commit you need.

## When to Use

- Apply a bug fix to another branch.
- Move one useful commit without merging everything.
- Add a hotfix from develop/main to a release branch.
- Recover a commit made on the wrong branch.
- Backport a fix to an older version.

## Handling Conflicts

1. Resolve conflicts.
2. `git add .`
3. `git cherry-pick --continue`

To cancel: `git cherry-pick --abort`

## Cherry-Pick vs Merge vs Rebase

| Cherry-Pick | Merge | Rebase |
|---|---|---|
| Copies selected commits / specific changes / new commit ID | Combines branches / full integration / merge commit | Replays commits / linear history / rewrites history |

## Golden Rule

Use cherry-pick when you need a specific commit, but avoid overusing it when merge or rebase better shows branch relationships.

## Memory Tip

Cherry-Pick = Pick only the commit you need.
