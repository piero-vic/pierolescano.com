---
title: My computing setup for 2026
description: A deep dive of my computing setup for 2026.
image: ../../assets/images/desktop-2026.png
imageAlt: Desktop screenshot
pubDate: 2026-01-18
tags:
  - linux
---

This is a walkthrough of my current setup. I have a [`/uses`](/uses) page where I keep a list of some of the tools I
use. However, I thought doing a deep dive of my current setup would be a good thing to do as my first post for the year.

## Basics

Let's start with the basics. My main computer is a
[ThinkPad T480s](https://wiki.archlinux.org/title/Lenovo_ThinkPad_T480s) running Arch Linux. I've been using Arch for
almost 4 years. My current installation is almost 2 years since I changed my laptop at the start of 2024.

Arch meets all my needs. I have a system that is almost always up-to-date. The
[documentation](https://wiki.archlinux.org/) is second to none. If a package is not available in the official
repositories I will probably find it in the [AUR](https://aur.archlinux.org/). I wouldn't want to use another
distribution for the time being.

## Window manager

Instead of using a full desktop environment like GNOME or KDE Plasma, I use [Sway](https://swaywm.org/), a
[tiling window manager](https://en.wikipedia.org/wiki/Tiling_window_manager) and Wayland compositor. It has been
my window manager of choice since I switched from GNOME. I've tried other compositors like Hyperland, but Sway works
well, so I haven't had the need to switch.

I don't do much [ricing](https://www.reddit.com/r/unixporn/) but when I stated using Sway I did tinker with a bunch of
configurations until I settle on what I have now. Likewise, I try to stick to the default keybindings most of the time.
I might change this in the future in order to make the setup easier to use with my
[Corne keyboard](/blog/trying-out-the-corne-keyboard).

## Status Bar

I use [Waybar](https://github.com/Alexays/Waybar) for the status bar. I've tried to keep my
[configuration](https://github.com/piero-vic/dotfiles/blob/main/.config/waybar/config.jsonc) as simple as possible. I
only have one custom module used to display if [`wlsunset`](https://sr.ht/~kennylevinsen/wlsunset/) is running. More on
this tool later.

## Launcher

I use [`rofi`](https://github.com/davatorium/rofi) as a launcher. When making custom
[scripts](https://github.com/piero-vic/dotfiles/tree/main/.local/bin) I stick with the `dmenu` mode. I do this just in
case I want to try another launcher since most of them have a mode compatible with `dmenu`.

I use [networkmanager-dmenu](https://github.com/firecat53/networkmanager-dmenu) and
[dmenu-bluetooth](https://github.com/Layerex/dmenu-bluetooth) for easy access to Wi-Fi and Bluetooth configurations.

So far, I haven't had the need to switch launchers. However, [Vicinae](https://github.com/vicinaehq/vicinae) looks
like something I would like to try. 

## Audio 

I've been using PipeWire and WirePlumber since I started using Linux. Volume levels for both audio inputs and outputs
are controlled by keybindings configured in Sway. I have also built
[volume-notify](https://github.com/piero-vic/volume-notify), a small program to display notifications whenever volume
levels change.

Whenever I need more control I use [wiremix](https://github.com/tsowell/wiremix) and
[qpwgraph](https://gitlab.freedesktop.org/rncbc/qpwgraph).

## Power

I use [TLP](https://github.com/linrunner/TLP) to optimize battery usage. I also wrote a custom program called
[battery-notify](https://github.com/piero-vic/battery-notify) to remind me to plug in my laptop when the battery is
running out.

## Browsers

[Firefox](https://www.firefox.com/) is my main browser. Mainly out of habit although I really like
[multi-account containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers). I use it to
compartmentalize how I browse the web. The only extensions I currently use are
[uBlock Origin](https://ublockorigin.com/) and [Surfingkeys](https://github.com/brookhong/Surfingkeys).

I keep Chromium and Brave installed for web development. They are nice to have if I want to try features that are not
yet available in Firefox.

## Terminal

Most of my work is done in the terminal. I use [Alacritty](https://github.com/alacritty/alacritty) alongside
[tmux](https://github.com/tmux/tmux).

When it comes to tmux, I mostly stick to the default keybindings. I've set my prefix to <kbd>Ctrl</kbd> +
<kbd>Space</kbd> because it feels better on the hands.

## Shell

I use [zsh](https://www.zsh.org/). I don't use any framework like [Oh My Zsh](https://ohmyz.sh/). I only use
[starship](https://github.com/starship/starship) as my prompt and rely on tools like
[fzf](https://github.com/junegunn/fzf) and [zoxide](https://github.com/ajeetdsouza/zoxide) for easy navigation.

## Text editor

My text editor of choice is [Neovim](https://github.com/neovim/neovim). I use it for everything that involves editing
files. That includes writing code, taking notes, doing some [plain text accounting](/notes/plain-text-accounting),
among other things.

I use a moderate amount of plugins, my setup is pretty stable, and I can do productive work in many programming
languages. One thing I haven't added is any AI integration. That's something I might try in the following months.

When it comes to other options, I've tried Emacs. However, it never stuck with me. I would like to give it a try again
but the effort to configure and learn a new editor is not something I'll like to spend my time on at the moment. Maybe
in a few months I can get some free time to try Emacs again. I do like [orgmode](https://orgmode.org/) though. I'm
currently trying out a [port](https://github.com/nvim-orgmode/orgmode) for Neovim.

## Screen ergonomics

I used to use dark mode exclusively. However, I work outdoors from time to time and dark mode is a pain for these
situations, so I use [`darkman`](https://gitlab.com/WhyNotHugo/darkman) to switch between light and dark mode.

I also use [`wlsunset`](https://sr.ht/~kennylevinsen/wlsunset/) to adjust the screen temperature. It works automatically
depending on the time of the day, and it's almost always on when I'm using dark mode.

## Everything else

I'll try to do some more writing for specific parts of my setup and how they relate to my work as a developer. If you
find any of this interesting feel free to browse my [dotfiles](github.com/piero-vic/dotfiles) repo. Everything I didn't
mention here can probably be found there.
