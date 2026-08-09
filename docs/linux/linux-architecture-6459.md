---
title: "Linux Architecture"
---

# Linux Architecture

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786015176459.jpeg)

</details>


Linux uses a layered architecture. Each layer communicates with the layer below it to access system resources.

## Layers (Top to Bottom)

1. **User Applications** — Browsers, Editors, Docker, Java
2. **Shell and System Utilities** — Bash, Zsh, ls, cp, systemctl
3. **System Libraries** — glibc, shared libraries
4. **System Call Interface** — `open()`, `read()`, `write()`, `fork()`
5. **Linux Kernel** — CPU, Memory, Files, Network
6. **Hardware** — CPU, RAM, Disk, Network Devices

## Layer Details

- **Hardware** — physical components like CPU, RAM, disk, network card.
- **Linux Kernel** — the core of Linux; includes:
  - Process management
  - Memory management
  - File-system management
  - Device management
  - Network management
  - Security
- **System Call Interface** — applications use system calls like `open()`, `read()`, `write()`, `fork()`, `exec()`.
- **System Libraries** — libraries such as glibc help applications communicate with the kernel.
- **Shell** — interface between user and OS; examples: Bash, Zsh, Fish, Ksh.
- **System Utilities** — examples: ls, cp, mv, ps, grep, systemctl.
- **User Applications** — browsers, text editors, databases, web servers, Docker, Kubernetes tools, Java and Python applications.

## Kernel Space vs User Space

- **User Space** → Applications, shells and utilities
- **Kernel Space** → Kernel, drivers and system-resource management

## Flow Example: `cat file.txt`

1. User
2. Shell
3. `cat` application
4. System library
5. System call
6. Linux kernel
7. Disk hardware
