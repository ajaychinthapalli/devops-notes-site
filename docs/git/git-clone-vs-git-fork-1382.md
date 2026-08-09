---
title: "Git Clone vs Git Fork"
---

# Git Clone vs Git Fork

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786084141382.jpeg)

</details>


## Comparison

| Aspect | Git Clone | Git Fork |
|---|---|---|
| Meaning | Creates a local copy of a repository on your computer. | Creates your own server-side copy of someone else's repository. |
| Location | Your local machine. | Your GitHub/GitLab/Bitbucket account. |
| Command / Action | `git clone <repo-url>` | Usually done using the Fork button on GitHub/GitLab. |
| Ownership | Does not change repository ownership. | You become the owner of the forked copy. |
| Main Purpose | Work locally with an existing repository. | Contribute independently to another project. |
| Permissions | Need permission to push to original repo. | Can freely push to your own fork. |
| Pull Requests | Can create PRs if you have access or use a branch. | Commonly used to submit PRs back to the original repository. |
| Syncing | `git pull` / `git fetch` | Add original repo as upstream and sync changes. |
| Typical Use | Team members working on the same project. | Open-source contributions. |

## 1. Git Clone

Clone = Copy repository to your computer.

```bash
git clone https://github.com/company/project.git
```

Remote Repository → Clone → Local Repository

**Use when:**
- You already have access to the project.
- You want to develop or test code locally.
- You need complete Git history and branches.

## 2. Git Fork

Fork = Create your own copy of a repository on GitHub/GitLab.

Original Repository → Fork → Your Repository → Clone → Local Machine

**Example:**
- Original: `github.com/open-source/project`
- Fork: `github.com/yourname/project`

Then clone your fork:

```bash
git clone https://github.com/yourname/project.git
```

**To keep your fork updated:**

```bash
git remote add upstream https://github.com/original-owner/project.git
git fetch upstream
git merge upstream/main
```

## 3. Easy Way to Remember

- Clone = Repository → Your Computer
- Fork = Repository → Your GitHub Account

### Common Open-Source Flow

Fork → Clone → Create Branch → Make Changes → Push → Pull Request
