---
title: "Linux Distributions"
---

# Linux Distributions

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785688018667.jpeg)

</details>


(Ubuntu, CentOS, RHEL, Debian)

## What is a Linux Distribution?

A Linux distribution is an OS made from the Linux kernel and a collection of software packages, tools, and utilities. Each distro has its own package manager, release cycle, and target audience.

Flow: Linux Kernel → Distributions (Ubuntu, CentOS, RHEL, Debian, ...)

Check commands: `uname -a` shows Linux kernel info.

## General Comparison

| Distro | Based on | Package Manager | Release Model | Use Case |
|---|---|---|---|---|
| Ubuntu | Debian | apt / dpkg | Fixed (6 months) | Desktop, Server, Cloud, DevOps |
| CentOS | RHEL | yum / dnf | Fixed / Rolling* | Servers, Enterprise (legacy), Testing |
| RHEL | Upstream | yum / dnf | Fixed (Long Term Support) | Enterprise Production |
| Debian | Independent | apt / dpkg | Fixed (Stable) | Servers, Desktop, Embedded |

*CentOS Stream is a rolling release (upstream of RHEL).

## 1. Ubuntu

- Based on Debian
- User-friendly, popular and well-documented
- Strong community support
- Used widely in cloud and DevOps

**Pros:**
- Easy to use
- Large repositories
- Great for desktops & servers

**Cons:**
- Not ideal for strict enterprise environments (without support)

**Common Use Cases:** Cloud, Desktop, Servers

## 2. CentOS

- Based on RHEL (source compatible)
- Replaced by CentOS Stream
- Used mostly in enterprise & servers (legacy CentOS 7 still widely used)

**Pros:**
- Stable and reliable
- Free enterprise-grade
- Long-term support (older)

**Cons:**
- CentOS 8 is EOL
- CentOS Stream is rolling release

**Common Use Cases:** Servers, Testing, DevOps

## 3. RHEL

- Developed by Red Hat
- Enterprise-grade, secure and stable
- Comes with official support & documentation

**Pros:**
- Highly secure & stable
- Long-term support (10 years)
- Certified hardware & ISV support

**Cons:**
- Subscription required (paid)
- Cost can be high for small teams

**Common Use Cases:** Enterprise, Production, Secure Env.

## 4. Debian

- Independent distribution
- Very stable and reliable
- Focus on free software and community

**Pros:**
- Extremely stable
- Large community
- Great for servers & embedded

**Cons:**
- Older packages in stable repo
- Not as user-friendly for beginners

**Common Use Cases:** Servers, Embedded, Virtualization

## Quick Commands

```bash
cat /etc/os-release   # Check OS
uname -r               # Kernel Info
uptime                  # Uptime
```

## Key Takeaways

Choose the right distribution based on your use case: Ubuntu for ease of use, CentOS/RHEL for enterprise stability, Debian for ultimate stability and freedom.
