---
title: "Linux Shell Script — Line-by-Line Explanation"
---

# Linux Shell Script — Line-by-Line Explanation

<details>
<summary>View original cheat sheet image</summary>

![Original cheat sheet](/img/screenshots/1785313101142.jpeg)

</details>


## Intro

A shell script is a text file containing Linux commands that run sequentially.

## Example Script

```bash
#!/bin/bash
# Store the user's name
name="Jyothi"
echo "Hello, $name!"
read -p "Enter a directory path: " directory
if [ -d "$directory" ]; then
    echo "Directory exists."
    file_count=$(find "$directory" -maxdepth 1 -type f | wc -l)
    echo "Number of files: $file_count"
else
    echo "Directory does not exist."
    exit 1
fi
echo "Script completed successfully."
```

## Explanation

1. `#!/bin/bash` — **Shebang**; tells Linux to run the script using Bash.
2. `# Store the user's name` — **Comment**; comments are not executed.
3. `name="Jyothi"` — **Variable assignment**; no spaces around `=`.
4. `echo "Hello, $name!"` — **Prints text**; `$name` gets the variable value.
5. `read -p ... directory` — **Reads user input** into the variable "directory".
6. `if [ -d "$directory" ]; then` — **Checks** whether the path is an existing directory.
7. `echo "Directory exists."` — **Prints** confirmation.
8. `file_count=$(find ... | wc -l)` — **Counts** files in the directory using command substitution, find, pipe, and `wc -l`.
9. `echo "Number of files: $file_count"` — **Displays** the file count.
10. `else` — **Runs** when the condition is false.
11. `echo "Directory does not exist."` — **Error message**.
12. `exit 1` — **Ends** the script with an error status.
13. `fi` — **Ends** the if block.
14. `echo "Script completed successfully."` — **Final** success message.

## Script Flow

```
Start -> Directory Exists? --Yes--> Count Files and Display -> Success Message
                    |
                    --No--> Error Message and Exit
```

## Correct vs Incorrect Syntax

- Correct: `name="Jyothi"`
- Incorrect: `name = "Jyothi"`

## How to Run

1. Save as: `directory_check.sh`
2. `chmod +x directory_check.sh`
3. `./directory_check.sh`
