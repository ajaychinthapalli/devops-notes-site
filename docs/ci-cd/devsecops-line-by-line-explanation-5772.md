---
title: "DevSecOps — Line-by-Line Explanation"
---

# DevSecOps — Line-by-Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785314925772.jpeg)

</details>


Development + Security + Operations

1. **Plan** — Define requirements, architecture, risks, and compliance needs.
2. **Code** — Developers write secure code using safe coding practices.
3. **Version Control** — Store and manage code changes in Git-based repositories.
4. **Code Review** — Review code for bugs, security gaps, and quality issues.
5. **Secret Scanning** — Detect exposed passwords, keys, tokens, and certificates.
6. **SAST** — Analyze source code for insecure coding patterns.
7. **SCA** — Scan open-source libraries for vulnerabilities and license risks.
8. **Build** — Compile and package the application or container artifact.
9. **Container Scanning** — Check images for vulnerable packages and misconfigurations.
10. **Automated Testing** — Run unit, integration, functional, performance, and security tests.
11. **IaC Scanning** — Scan Terraform, Kubernetes, Helm, and cloud configs for issues.
12. **CI/CD Pipeline** — Automatically build, test, scan, and prepare releases.
13. **Security Gate** — Block release if critical vulnerabilities or policy violations exist.
14. **Release** — Prepare an approved and verified application version.
15. **Secure Deployment** — Deploy with secure configs, least privilege, and encryption.
16. **Runtime Protection** — Monitor and protect live apps, containers, APIs, and networks.
17. **Monitoring** — Track logs, metrics, traces, security events, and performance.
18. **Vulnerability Management** — Identify, prioritize, fix, and verify vulnerabilities.
19. **Incident Response** — Detect, investigate, contain, and resolve security incidents.
20. **Continuous Feedback** — Feed findings back to improve future development.

## Main Principle

Security is integrated into every stage of the software lifecycle — not added only at the end.

- **DevOps:** fast delivery
- **DevSecOps:** fast + secure delivery
- **Shift Left** + Automation + Continuous Security + Shared Responsibility
