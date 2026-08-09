---
title: "Linux File Permissions Explained"
---

# Linux File Permissions Explained

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785487549556.jpeg)

</details>


(Using Real-World Analogies)

## 1. What are Linux File Permissions?

Linux file permissions define who can access a file or directory and what actions they can perform.

## 2. Real-World Analogy

Think of a house:
- **Owner** = Homeowner
- **Group** = Family members
- **Others** = Visitors

Each can have different access levels.

## 3. Permission Types

| Permission | Symbol | Value | Real-World Analogy |
|---|---|---|---|
| Read | r | 4 | Read a book |
| Write | w | 2 | Edit the book |
| Execute | x | 1 | Start a machine or run a program |

**Memory Trick:** R = Read, W = Write, X = eXecute

## 4. Permission Categories

| Category | Symbol | Analogy |
|---|---|---|
| User (Owner) | u | House owner |
| Group | g | Family members |
| Others | o | Guests/Visitors |
| All | a | Everyone |

## 5. Example

```
-rwxr-xr--
```

**Breakdown:**
- Owner: rwx -> Can read, edit, and execute.
- Group: r-x -> Can read and execute, but cannot edit.
- Others: r-- -> Can only read.

**Analogy:** The homeowner has full control, family can enter and view, visitors can only look around.

## 6. Numeric (Octal) Permissions

| Number | Permission |
|---|---|
| 7 | rwx |
| 6 | rw- |
| 5 | r-x |
| 4 | r-- |
| 0 | --- |

**Memory Trick:** 4 + 2 + 1 = 7 (Full Access)

### Examples

- **777** -> Everyone has full access (not recommended)
- **755** -> Owner full; others read & execute (common for scripts/directories)
- **644** -> Owner can edit; others can only read (common for files)
- **600** -> Only owner has access (private files)

## 7. Common Commands

```bash
ls -l                # View permissions
chmod 755 file       # Change permissions
chmod +x file        # Make a file executable
chown user file      # Change owner
chgrp group file      # Change group
```

## 8. Interview Tips

- 644 -> Regular files
- 755 -> Executable scripts & directories
- 600 -> Sensitive files (SSH keys, passwords)
- Avoid 777 unless absolutely necessary.
- Directories need Execute (x) permission to enter (cd).

## 9. Quick Revision

- r -> View contents
- w -> Modify contents
- x -> Run program / Enter directory
- User -> Owner
- Group -> Team/Family
- Others -> Everyone else
- 755 -> Most common for directories
- 644 -> Most common for files
- 777 -> Full access for everyone (avoid)

## Key Takeaway

Understand permissions, secure your system!
