---
title: "Linux Architecture"
---

# Linux Architecture

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785687878943.jpeg)

</details>


## 1. Hardware

Hardware is the physical layer on which Linux runs.

- **CPU** – Executes instructions
- **RAM** – Stores data and instructions
- **Storage** – HDD / SSD
- **Network Interface** – Connects to network
- **Keyboard / Mouse** – Input devices
- **Display** – Output device

**Hardware Components:** CPU, RAM, Storage (HDD/SSD), NIC, Keyboard, Mouse, Display

## 2. Linux Kernel

The kernel is the core of the operating system. It interfaces with hardware and manages system resources.

**Key functions:**
- Process scheduling
- Memory management
- Device drivers
- File systems
- Networking
- Security
- System calls (interface for user programs)

Layered view: User Space (Applications) ↔ Linux Kernel ↔ Hardware

## 3. System Libraries

Libraries provide standard APIs / functions that programs use to interact with the kernel.

- Applications usually do not access the kernel directly.
- Libraries wrap system calls in easy-to-use functions.

Examples: glibc, POSIX libraries, OpenSSL, zlib

## 4. System Utilities

Utilities are administrative and everyday command-line tools that help manage and configure the system.

Examples: `ls`, `cp`, `mv`, `ps`, `top`, `systemctl`, `ip`, `mount`, `df`, `dmesg`

## 5. Shell

The shell acts as the command interpreter between the user and the system.

- It reads user input, executes commands, and shows output.
- It can also run scripts.

**Common shells:** Bash, Zsh, Fish, Ksh

## 6. Applications

Applications run in user space and provide services to users.

- They use libraries and system calls to access kernel features.

**Examples:**
- Web Servers (Nginx, Apache)
- Databases (MySQL, PostgreSQL)
- Editors (Vim, VS Code)
- Browsers (Firefox, Chrome)
- Container Tools (Docker, Podman)
- DevOps Tools (Jenkins)

## 7. Linux Architecture Flow

1. Users
2. Applications (User Space)
3. Shell & System Utilities (Command Line)
4. System Libraries (glibc, POSIX, etc.)
5. System Call Interface (Converts requests to kernel calls)
6. Linux Kernel (Core of the OS)
7. Hardware (Physical Layer)

## 8. Kernel Space vs User Space

| Kernel Space (Privileged Mode) | User Space (Unprivileged Mode) |
|---|---|
| Runs the kernel and device drivers | Runs applications, shells, and utilities |
| Has direct access to hardware | No direct hardware access |
| Manages critical system resources | Limited access via system calls |
| Errors here can crash the whole system | Errors affect only the process |
| Examples: Kernel, Drivers, Modules | Examples: Apps, Shell, Libraries, Services |

**Visual View:** User Space (Apps/Libraries/Shells/Utilities) ↔ Kernel Space (Kernel/Drivers), connected via System Call Interface.

## 9. Kernel to Hardware Relationship

User Applications (Need a service) → System Call (Request) → Linux Kernel (Handles the request; Drivers, Scheduler, MM, FS, Network, Security...) → Device Driver (Translates request) → Hardware (Performs action) → Interrupt/Response back → System Call (Return)

## 10. Major Kernel Components

- **Process Management** – Creates, schedules, and terminates processes. Handles multitasking.
- **Memory Management** – Allocates and manages memory. Handles virtual memory, paging.
- **Virtual File System (VFS)** – Provides a unified interface for different file systems.
- **Device Management** – Manages device drivers and I/O operations. Handles device discovery and access.
- **Network Stack** – Implements protocols (TCP/IP, UDP, etc.). Manages sockets and routing.
- **Inter-process Communication (IPC)** – Allows processes to communicate securely (e.g., pipes, signals, message queues).
- **Security Modules** – Handles authentication, authorization, permissions, and access control.

## 12. Important Note

- Linux uses a **MONOLITHIC KERNEL** architecture.
- Kernel runs in kernel space with full privileges.
- It supports **LOADABLE KERNEL MODULES** to add features or drivers at runtime.
- Most services (daemons) run in user space.

**Takeaway:** Linux architecture provides performance, modularity, and efficient hardware control.

## Where Everything Runs?

- **User Space** (Less Privilege): Applications, Shells, Utilities, Libraries, Services
- **System Call Interface**
- **Kernel Space** (More Privilege): Kernel, Drivers, Modules
