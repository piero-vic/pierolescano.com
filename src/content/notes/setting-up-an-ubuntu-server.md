---
title: Setting up an Ubuntu Server
tags:
  - guide
  - linux
---

Here are some of the things I do to set up an Ubuntu [VPS](vps).

## Initial setup

```bash
# Access your new server
ssh root@your_server_ip

# Add new user and enable root privileges
adduser new_user
usermod -aG sudo new_user

# Add public key to your new user’s ~/.ssh/authorized_keys file
rsync --archive --chown=new_user:new_user /root/.ssh /home/new_user

# Log in as new_user
su - new_user

# Update
sudo apt update && sudo apt upgrade
```

## Tailscale

Download Tailscale following [Download Tailcale](https://tailscale.com/download).

```bash
# Authenticate and connect the machine
sudo tailscale up

# Find and copy the machine's Tailscale IP
tailscale ip -4

# Allow access over Tailscale
sudo ufw allow in on tailscale0

# Restrict all other traffic
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Enable firewall
sudo ufw enable
```

## Resources

- [Initial Server Setup with Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)
- [Use UFW to lock down an Ubuntu server](https://tailscale.com/kb/1077/secure-server-ubuntu-18-04/)
