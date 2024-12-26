---
title: Archiving files from the command line
description: A collection of snippets for archiving files from the command line.
tags:
  - command-line
  - snippets
---

## How to use `tar`

Archive a bunch of files or a directory.

```bash
tar cfv archive.tar file1 file2 file3
tar cfv archive.tar directory/
```

Extract files.

```bash
tar xfv archive.tar
```

## How to use `zip` and `unzip`

Here's the basic usage.

```bash
zip archive.zip file1 file2 file3
```

The `-r` option allows you to traverse a directory recursively.

```bash
zip -r archivename.zip directory
```

You can encrypt the archive using the `-e` option.

```bash
zip -e archive.zip directory
```

Extract files.

```bash
unzip archive.zip
```
