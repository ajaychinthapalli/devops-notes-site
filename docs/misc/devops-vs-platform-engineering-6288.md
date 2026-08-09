---
title: "DevOps vs Platform Engineering"
---

# DevOps vs Platform Engineering

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785222686288.jpeg)

</details>


- **DevOps** is a culture and working model that brings development and operations teams together to deliver software faster and more reliably.
- **Platform Engineering** applies DevOps principles by building an internal developer platform with reusable, self-service tools and standardized workflows.

## Comparison

| DevOps | Platform Engineering |
|---|---|
| Focuses on collaboration and shared responsibility. | Focuses on developer experience and self-service. |
| Encourages teams to own build, test, deploy, and operations. | Creates reusable platforms, templates, and "golden paths". |
| Uses CI/CD, automation, monitoring, and Infrastructure as Code. | Integrates CI/CD, cloud infrastructure, security, and observability into one platform. |
| Each team may create its own tooling. | A platform team provides standardized tooling for many teams. |
| Primarily a culture and set of practices. | Primarily a product-oriented engineering discipline. |

## Simple Example

**DevOps:** Developers and operations engineers work together to create and manage deployment pipelines.

```
Code -> Build -> Test -> Deploy
```

**Platform Engineering:** A dedicated platform team builds a self-service portal where developers can deploy applications, provision infrastructure, view logs, and apply security controls without managing every underlying tool.

The self-service portal typically provides:
- Deploy apps
- Provision infrastructure
- View logs & metrics
- Apply security controls

## In One Line

**DevOps** defines how teams should work together, while **Platform Engineering** builds the platform that makes those practices easier and scalable.
