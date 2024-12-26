---
title: Changing default applications on Linux
tags:
  - guide
  - linux
---

Get the MIME type of a file.

```bash
file --mime-type file.png -bL
```

Get the default applications of a MIME type.

```bash
xdg-mime query default image/png
```

Change the default applications of a MIME type.

```bash
xdg-mime default imv.desktop image/png
```

_Note: `xdg-mime` will modify `~/.config/mimeapps.list`. You can also edit this file manually._

## Resources

- [Linux: How To Change Your Default Applications In XDG MIME](https://youtu.be/z3F0hTigMvU) #media/video
