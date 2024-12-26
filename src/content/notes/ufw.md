---
title: ufw
tags:
  - linux
  - networking
---

> Uncomplicated firewall.

A program for managing a netfilter firewall. It runs on top of `iptables` and provides an easy-to-use interface. With
`ufw`, you can set up rules based on services or [ports](ports).

## Usage

Check firewall status.

```bash
sudo ufw status
```

Allow a service or port.

```bash
sudo ufw allow ssh
sudo ufw allow 22
```

Enable firewall.

```bash
sudo ufw enable
```

### Subcommands

- `allow` - Enables the connection to the provided service.
- `deny` - It black-holes the requests. Doesn't respond. Used most of the time.
- `reject` - Notifies that the port is closed.

## Limitations

> [!WARNING]
> Be careful when using `ufw` and Docker. For more information check
> [`chaifeng/ufw-docker`](https://github.com/chaifeng/ufw-docker).

## Resources

- [Uncomplicated Firewall](https://wiki.archlinux.org/title/Uncomplicated_Firewall) #media/article
