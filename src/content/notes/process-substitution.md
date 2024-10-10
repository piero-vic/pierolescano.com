---
title: Process substitution
tags:
  - bash
---

Process substitution allows you to use the output of a command as if it were a file. It is useful when a command expects
a file, but you want to use the output of another command instead.

```bash
diff <(command1) <(command2)
```
