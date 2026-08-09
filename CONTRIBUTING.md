# Contributing to DevOps Notes

Thank you for considering a contribution to this project! Whether you're fixing a typo, improving existing notes, or adding a new topic, your help is appreciated.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Adding or Editing Notes](#adding-or-editing-notes)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

Please be respectful and constructive in all interactions. This project follows a simple rule: treat others as you'd like to be treated.

---

## Getting Started

1. **Fork** the repository.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/devops-notes-site.git
   cd devops-notes-site
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Start** the dev server to preview your changes:
   ```bash
   npm start
   ```

---

## How to Contribute

- **Fix a typo or improve wording** — edit the relevant Markdown file under `docs/`.
- **Add a new note** — create a new `.md` file in the appropriate subdirectory.
- **Add a new topic category** — create a new folder under `docs/` and add a `_category_.json` file.
- **Improve the site** — update `docusaurus.config.js`, `sidebars.js`, or CSS in `src/css/`.

---

## Adding or Editing Notes

All notes live under the `docs/` directory, organised by topic:

```
docs/
├── docker/
├── kubernetes/
├── ci-cd/
├── cloud/
├── linux/
├── security/
├── monitoring-logging/
├── databases/
├── networking/
├── git/
└── scripting/
```

### Markdown front matter

Each note file should begin with front matter. Example:

```md
---
id: my-new-note
title: My New Note Title
sidebar_position: 5
---
```

### Adding a new category

Create a folder and add `_category_.json`:

```json
{
  "label": "My Category",
  "position": 10,
  "link": {
    "type": "generated-index"
  }
}
```

---

## Commit Message Guidelines

Use short, descriptive commit messages:

```
docs: add kubernetes RBAC cheat sheet
fix: correct typo in docker networking note
feat: add monitoring-logging category
chore: update docusaurus config
```

---

## Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b docs/my-new-note
   ```
2. Make your changes and commit them.
3. Push the branch to your fork:
   ```bash
   git push origin docs/my-new-note
   ```
4. Open a pull request against `main` in this repository.
5. Describe what you changed and why.
6. A maintainer will review your PR and may request changes before merging.

---

Thank you for contributing! 🚀
