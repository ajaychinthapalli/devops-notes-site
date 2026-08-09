# DevOps Notes

[![Deploy to GitHub Pages](https://github.com/ajaychinthapalli/devops-notes-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/ajaychinthapalli/devops-notes-site/actions/workflows/deploy.yml)

A searchable Docusaurus site containing visual DevOps cheat sheets and study notes covering Docker, Kubernetes, CI/CD, Linux, Git, Networking, Security, Cloud, Monitoring, and Databases.

🌐 **Live site:** [ajaychinthapalli.github.io/devops-notes-site](https://ajaychinthapalli.github.io/devops-notes-site/)

---

## Topics Covered

| Category | Topics |
|---|---|
| 🐳 Docker | Dockerfiles, layers, networking, persistence, debugging |
| ☸️ Kubernetes | Architecture, kubectl, RBAC, services, OpenShift |
| 🔄 CI/CD | GitHub Actions, ArgoCD, GitOps, DevSecOps |
| ☁️ Cloud | AWS, Azure, Terraform, serverless, well-architected |
| 🐧 Linux | Commands, shell scripting, Ansible |
| 🔒 Security | Secure pipelines, AWS architecture |
| 📊 Monitoring | Logging and monitoring strategies |
| 🗄️ Databases | Database fundamentals |
| 🌐 Networking | Networking concepts |
| 🛠️ Git | Git workflows and cheat sheets |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

Static files are output to the `build/` directory.

### Serve the production build locally

```bash
npm run serve
```

---

## Project Structure

```
devops-notes-site/
├── docs/                  # Markdown note files organised by topic
│   ├── docker/
│   ├── kubernetes/
│   ├── ci-cd/
│   ├── cloud/
│   ├── linux/
│   ├── security/
│   ├── monitoring-logging/
│   ├── databases/
│   ├── networking/
│   ├── git/
│   └── scripting/
├── src/                   # Custom CSS and React components
├── static/                # Static assets (images, favicon)
├── docusaurus.config.js   # Docusaurus configuration
├── sidebars.js            # Sidebar configuration
└── .github/workflows/     # CI/CD: auto-deploys to GitHub Pages on push to main
```

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

## License

This project is open source. See [LICENSE](LICENSE) for details.
