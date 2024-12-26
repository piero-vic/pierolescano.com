---
title: cron
tags:
  - linux
---

Job scheduler for Unix-like operating systems.

## Usage

Run `crontab -e` to edit your jobs. This is an example of the configuration.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
│ │ │ │ │
* * * * * <command to execute>
```

Use the `-u` flag to specify the user that's going to run the commands.

## Resources

- [Crontab.guru](https://crontab.guru/) #tools
- [Cron Job Run Time Predictor](https://cronjob.xyz/) #tools
