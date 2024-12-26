---
title: Running cron jobs for Sway
tags:
  - guide
  - linux
---

Use [cron](cron) to schedule scripts that interact with Sway using `swaymsg`.

```bash
#!/bin/sh

set -eu

uid="$(id -u)"

for sock in /run/user/"${uid}"/sway-ipc.*.*.sock; do
    [ -S "${sock}" ] || continue
    swaymsg -s "${sock}" exec -- "$@"
done
```

Useful for when you run a script that interacts with D-Bus. An example could be using `notify-send`.

```
* * * * * $HOME/.local/bin/sway-exec /bin/notify-send 'Hello'
```

## Resources

- [Original source for the script](https://pastebin.com/Dak1jqNB)
- [D-Bus cronjobs](https://coldfix.de/2018/10/09/dbus-cronjob/)
