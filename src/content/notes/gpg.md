---
title: GPG
tags:
  - encryption
---

Encrypt files for confidentiality, sign files for integrity and authenticity.

## Usage

### Export keys

```bash
gpg --export --armor <UID>
```

### Clear passphrase from cache

```bash
gpg-connect-agent reloadagent /bye
```

## Customize pinentry program

To specify the pinentry program you want to use, edit the `~/.gnupg/gpg-agent.conf` file.

```
pinentry-program /usr/bin/pinentry-curses
```

## Resources

- [How to encrypt, sign and decrypt messages using GnuPG on macOS](https://sunknudsen.com/privacy-guides/how-to-encrypt-sign-and-decrypt-messages-using-gnupg-on-macos) #media/article
- [Creating and Managing a GPG Key Pair](https://nickjanetakis.com/blog/creating-and-managing-a-gpg-key-pair) #media/article
