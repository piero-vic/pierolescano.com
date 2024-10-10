---
title: Unix file permissions
tags:
  - linux
---

Every Unix file has a set of _permissions_ that determine if a user can read, write, or execute the file.

## Permission flags

```
┌──────────── Type of file
│ ┌────────── User permissions
│ │  ┌─────── Group permissions
│ │  │  ┌──── Other permissions
│ │  │  │
-rwxr-xr-x  1 user group 7041 Sep 26 18:06 file.txt
```

| Value | Meaning                                                                    |
| ----- | -------------------------------------------------------------------------- |
| `-`   | Permission has not been granted.                                           |
| `r`   | File is readable.                                                          |
| `w`   | File is writable. For directories, files may be created or removed.        |
| `x`   | File is executable. For directories, you can access it and list its files. |

## Modifying permissions

- [`chmod`](https://linux.die.net/man/1/chmod) can be used to change the permissions of a file.
- A common way to set up permissions is to use octal values.

| Octal | Binary | Flags |
| ----- | ------ | ----- |
| 0     | 000    | `---` |
| 1     | 001    | `--x` |
| 2     | 010    | `-w-` |
| 3     | 011    | `-wx` |
| 4     | 100    | `r--` |
| 5     | 101    | `r-x` |
| 6     | 110    | `rw-` |
| 7     | 111    | `rwx` |

## Resources

- [Unix File Permissions](https://docs.nersc.gov/filesystems/unix-file-permissions/)
