---
title: Command Line
tags:
  - command-line
  - snippets
---

## Snippets

### Match decimal numbers with `grep`

```bash
grep -Eo "[0-9]+\.[0-9]+" Nasa-1024-256.txt
```

### Find and replace with `grep` and `sed`

```bash
# Source: https://stackoverflow.com/a/15402821
grep -rl "matchstring" . | xargs sed -i "s/string1/string-2/g"
```

### Generate a random 64-character secret key

```bash
# Source: https://plausible.io/docs/self-hosting#2-add-required-configuration
openssl rand -base64 64 | tr -d '\n' ; echo
```

### Display file content in columns

```bash
column -t -s ":" /etc/passwd
column -t -s ":" -o " | " /etc/passwd
```

### Diff the output of two commands

```bash
# Source: https://askubuntu.com/a/229450
diff <(ls old) <(ls new)
```

### Get all files from a website with `wget`

```bash
# Source: https://apple.stackexchange.com/a/100573
wget -r -np -k http://www.ime.usp.br/~coelho/mac0122-2013/ep2/esqueleto/
```

### Generate QR code

```bash
qrencode -o - string | imv -    # Without creating a file using imv
qrencode -t ansiutf8 string     # Terminal output
```

### Count elements in an JSON array with `jq`

```bash
jq '. | length' file.json
```

### Filter an array of objects by the value of a key with `jq`

```bash
# Source: https://gist.github.com/ipbastola/2c955d8bf2e96f9b1077b15f995bdae3
jq 'map(select(.key=="value"))' file.json
```

### Get the size of a directory

```bash
du -sh ./directory
```

### Get website title from the command line

```bash
# Source: https://unix.stackexchange.com/a/103253

wget -qO- 'http://www.youtube.com/watch?v=Dd7dQh8u4Hc' | perl -l -0777 -ne 'print $1 if /<title.*?>\s*(.*?)\s*<\/title/si'

wget -qO- 'http://www.youtube.com/watch?v=Dd7dQh8u4Hc' | pup 'title text{}'

# If you need to use a pipe
xargs wget -qO- | pup 'meta[property=og:title] attr{content}'
```
