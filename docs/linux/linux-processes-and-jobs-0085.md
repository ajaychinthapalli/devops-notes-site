---
title: "Linux Processes and Jobs"
---

# Linux Processes and Jobs

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785861620085.jpeg)

</details>


## 1. Process IDs and process states

- Every process has a unique PID.
- PID 1 is the first process (init/systemd).
- **Common states:**
  - **R** Running – actively using CPU
  - **S** Sleeping – waiting for an event
  - **T** Stopped – paused by a signal
  - **Z** Zombie – finished but not reaped by parent

Example process tree: `PID 1 (init/systemd)` → `325 (sshd)`, `512 (bash)`, `640 (cron)`; `512 (bash)` → `1024 (vim)`, `2048 (gcc)`

## 2. ps, top, htop, pgrep

- **ps** → snapshot of processes
- **ps aux** → all users, detailed
- **top** → live process monitoring
- **htop** → interactive process viewer
- **pgrep** → find PID by process name (e.g. `pgrep nginx`)

```bash
ps aux
# USER  PID  %CPU %MEM  CMD
# root  1    0.0  0.1   systemd
# root  325  0.1  0.2   sshd
# user  512  0.3  0.4   bash
# user  1024 2.1  1.0   vim
# user  2048 2.6  1.3   gcc
```

```
top - 12:45:01 up 5:23, 2 users, load average: 0.42, 0.38, 0.35
Tasks: 189 total, 2 running, 187 sleeping, 0 stopped, 0 zombie
PID   USER  %CPU  %MEM  COMMAND
1024  user  2.1   1.0   vim
2048  user  2.6   1.3   gcc
512   user  0.3   0.4   bash
325   root  0.1   0.2   sshd
```

```
htop (visual)
CPU [|||            ] 12.5%
Mem [|||||||        ] 1.2G/7.8G
Swp [||             ] 0.1G/2.0G
PID  USER  %CPU  %MEM  TIME+    Command
1024 user  2.1   1.0   0:02.31  vim
2048 user  2.6   1.3   0:05.67  gcc
512  user  0.3   0.4   0:01.14  bash
325  root  0.1   0.2   0:00.21  sshd
F1 Help  F2 Setup  F3 Search  F10 Quit
```

**Tip:** `ps` shows a moment in time, `top`/`htop` update continuously. Use `q` to quit top/htop.

## 3. kill, pkill, killall

- `kill <PID>` → send signal to a process
- `pkill <name>` → kill by process name
- `killall <name>` → kill all matching processes
- `kill -l` → list all available signals

Example: `PID 1234` → `kill 1234` → process terminated

**Common signals:**
- 1 SIGHUP – hangup
- 2 SIGINT – interrupt (Ctrl+C)
- 15 SIGTERM – graceful stop (default)
- 9 SIGKILL – force kill (cannot be caught)

`kill -9 <PID>` → immediate kill

## 4. Foreground and background jobs

- **Foreground**: runs in current terminal (has control)
- **Background**: runs behind the scenes (does not block the terminal)
- Add `&` at the end to run in background
- **Ctrl+Z** → pause a foreground job (stop)
- **Ctrl+C** → terminate a foreground job

```bash
$ long_task.sh        # foreground (running, terminal busy until it finishes)
$ long_task.sh &      # background ([1] 2456, terminal free to run other commands)
```

Examples:
```bash
sleep 100        # foreground
sleep 100 &       # background
find / -name log &
```

## 5. jobs, bg, fg, nohup

- `jobs` → list current shell jobs
- `bg %n` → resume job n in background
- `fg %n` → bring job n to foreground
- `nohup cmd &` → run immune to hangup (SIGHUP), output goes to nohup.out

```bash
$ jobs
[1]  Running    sleep 100 &
[2]- Stopped    vim file.txt
[3]+ Running    find / -name log &
```

```bash
$ vim file.txt
^Z (Ctrl+Z)
[2]+ Stopped   vim file.txt
$ bg %2
[2]+ vim file.txt &   # Running (in background)
$ fg %2
vim file.txt          # Running (in foreground)
```

```bash
$ nohup long_task.sh > out.log 2>&1 &
[1] 3456
# output saved in out.log
```

**Tip:** Use `nohup` or `screen`/`tmux` for long running jobs that survive logout!

## 6. Signals such as SIGTERM and SIGKILL

Signals are used to control processes.

- **SIGTERM (15)**: polite request to stop. Process can clean up and exit.
- **SIGKILL (9)**: force stop immediately. Process cannot clean up.

Process (PID 4321):
- SIGTERM (15) → Graceful stop (cleanup, close files, exit normally)
- SIGKILL (9) → Force stop NOW! (no cleanup)

**Other useful signals:**
- SIGHUP (1) – terminal closed
- SIGINT (2) – interrupt (Ctrl+C)
- SIGSTOP (19) – stop (cannot be caught)
- SIGCONT (18) – continue if stopped
