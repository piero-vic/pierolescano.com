---
title: Package management on Arch Linux
tags:
  - linux
---

These are some of the commands I use to manage the software on my main machine.

## `pacman`

### Installing packages

```bash
pacman -S package   # Install a package
pacman -Syu         # Upgrade packages
```

### Listing packages

```bash
pacman -Q           # all packages
pacman -Qe          # explicited installed
pacman -Qm          # extra packages. e.g. packages installed from the aur
pacman -Qdt         # orphans
pacman -Qk          # number of files per package
pacman -Qo file     # packages that own a file
```

### Removing packages

```bash
pacman -R package                   # Remove a package
pacman -Qdtq | sudo pacman -R -     # Remove all orphans
```

### Cleaning the `pacman` cache

```bash
pacman -Sc      # remove only packages that are not currently installed
pacman -Scc     # remove also currently installed packages
```

### Searching for packages

```bash
pacman -Ss package
```

## `aura`

### Installing packages

```bash
pacman -A package   # Install a package from the AUR
pacman -Ayu         # Upgrade packages from the AUR
```

### Inspecting `PKGBUILD` scripts

```bash
aura -Ap package                  # Print a PKGBUILD
aura -Ap package | bat -l=bash    # Add syntax highlighting using bat
```

## Resources

- [pacman - ArchWiki](https://wiki.archlinux.org/title/pacman)
- [The Aura User Guide](https://fosskers.github.io/aura/)
