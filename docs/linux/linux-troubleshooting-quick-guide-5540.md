---
title: "Linux Troubleshooting Quick Guide"
---

# Linux Troubleshooting Quick Guide

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1786245495540.jpeg)

</details>


## 1. What Is Linux Troubleshooting?

Linux troubleshooting is the process of identifying and fixing issues related to CPU, memory, disk, network, processes, services, permissions, and logs.

## 2. Essential Troubleshooting Commands

| Category | Commands | Purpose |
|---|---|---|
| System status | `uptime`, `top`, `htop` | Check load and resource usage |
| CPU | `top`, `ps aux`, `mpstat` | Find CPU-heavy processes |
| Memory | `free -h`, `vmstat`, `top` | Check RAM and swap usage |
| Disk space | `df -h`, `du -sh *` | Find full filesystems/directories |
| Disk I/O | `iostat`, `iotop` | Identify disk bottlenecks |
| Network | `ip addr`, `ping`, `ss -tulpn` | Diagnose connectivity and ports |
| DNS | `dig`, `nslookup`, `resolvectl` | Troubleshoot name resolution |
| Services | `systemctl status <service>` | Check service health |
| Logs | `journalctl`, `dmesg`, `/var/log/` | Find errors and system events |
| Permissions | `ls -l`, `chmod`, `chown` | Resolve access problems |
| Processes | `ps`, `pgrep`, `kill`, `pkill` | Investigate or stop processes |
| Packages | `rpm`, `dnf`, `apt`, `dpkg` | Diagnose package issues |

## 3. Troubleshooting Flow

1. Identify the problem
2. Check system health
3. Check the affected service
4. Check networking
5. Review logs
6. Check permissions

**Flow:** Observe → Check Logs → Isolate → Find Root Cause → Fix → Verify → Document

## 4. Useful Commands

```bash
uptime
top
free -h
df -h
systemctl status nginx
journalctl -u nginx
ip addr
ip route
ping 8.8.8.8
ss -tulpn
journalctl -xe
dmesg | tail
tail -f /var/log/syslog
ls -l /path/to/file
namei -l /path/to/file
```

## 5. Common Linux Problems

- **Disk 100% full** → `df -h`, `du -sh /*`, `find /var -type f -size +1G`
- **High CPU** → `top`, `ps aux --sort=-%cpu | head`
- **High memory** → `free -h`, `ps aux --sort=-%mem | head`
- **Service not starting** → `systemctl status <service>`, `journalctl -u <service>`
- **Port not listening** → `ss -tulpn`
- **Server unreachable** → `ip addr`, `ip route`, `ping <gateway>`, `ping 8.8.8.8`, `dig google.com`
