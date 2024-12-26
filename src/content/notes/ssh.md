---
title: SSH
tags:
  - linux
  - networking
---

> Secure Shell Protocol

**SSH** is a cryptographic network protocol for operating network services securely over an unsecured network.
**OpenSSH** is a suite of secure networking utilities based on the Secure Shell Protocol.

## Usage

`ssh` - Connect to a remote server.

```bash
ssh user@ip_address
```

- Use the `-i` flag to specify the identity file.

**`ssh-add`** - Add keys to the ssh-agent.

- `-l` - Lists fingerprints of all identities currently represented by the agent.
- `-d` - Removes identities from the agent.

**`ssh-keygen`** - Generate new keys. **`ssh-copy-id`** - Copy keys to remote servers. It will prompt you for the
password.

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub user@ip_address
```

## Configuration

### Files

- `~/.ssh/config` - Main configuration file.
- `~/.ssh/known_hosts` - Stores the fingerprints of the servers we have connected to. Useful for preventing the
  man-in-the-middle attack.
- `~/.ssh/authorized_keys` - Stores the public keys of the identities that can connect to the server.

`chmod` these file with 600 permission.

### Examples

Host configuration. This allows you to run `ssh myserver` instead of `ssh user@ip_address`. We can also specify the ssh
key we want to use.

```
Host myserver
  Hostname ip_address
  Port 22
  User user
  IdentityFile ~/.ssh/id_ed25519
```

Add keys to the agent after the first use.

```
AddKeysToAgent yes
```

## Resources

- [OpenSSH Full Guide - Everything you need to get started!](https://youtu.be/YS5Zh7KExvE) #media/video
- [How Secure Shell Works (SSH) - Computerphile](https://youtu.be/ORcvSkgdA58) #media/video
- [SSH Kung Fu](https://blog.tjll.net/ssh-kung-fu/) #media/article
