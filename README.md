# DevOps Notes (Docusaurus site)

Visual DevOps cheat sheets (Docker, Kubernetes, CI/CD, Linux, Git, Networking, Security, Cloud, Monitoring, Databases) transcribed into Markdown docs.

## Setup

This project's dependencies were **not** installed automatically (no network access in the build sandbox). To run it locally:

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
```

Static files are output to `build/`.
