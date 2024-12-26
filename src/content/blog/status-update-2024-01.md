---
title: Status update, January 2024
description: Updates from the previous month.
pubDate: 2024-01-31
tags: []
---

I've been wanting to establish a writing habit for quite some time now. So this year I'm committed to publishing at
least once a month. Inspired by the likes of [Tom MacWright](https://macwright.com/) and
[マリウス](https://xn--gckvb8fzb.com/), I'll be sharing monthly updates on some of my professional and personal project.
I'll also be sharing things that caught my eye during this period.

---

## Personal

Let's start with some of the changes I'm making to my setup. I got a new laptop, a second hand Thinkpad T480S. It will
be replacing my old 2012 MacBook as my main workstation. I broke the MacBook last year and now the lid cannot be closed,
making it unportable. Everything else still works, so I'll see if I can get it fixed and keep it as a backup machine.

In other news, I've been getting into self-hosting. This month, I managed to deploy some services on a VPS using Docker
Compose. Here's a list of the things I'm currently running:

- [Baikal](https://sabre.io/baikal/), a CalDAV and CardDAV server.
- [Linkding](https://github.com/sissbruecker/linkding/), a bookmark manager.
- [Miniflux](https://miniflux.app/), a feed reader.
- [Nginx Proxy Manager](https://nginxproxymanager.com/), a tool for easily expose the services with SSL certificates.

The current setup is still experimental, so there's room for improvements. I want to add [restic](https://restic.net/)
to handle backups, and maybe deploy a few more services. I think I'll be able to get everything done within the next few
weeks.

Regarding the things I'm consuming, I started off the year reading The Road by Cormac McCarthy. It was a pretty good
read. I'm eager to see how the movie adapts the book. Right after finishing it, I moved on to One Hundred Years of
Solitude by Gabriel García Márquez. I've been wanting to read this book for months and so far it's keeping me hooked.

Reading is one of the activities I put away when I started working full time. I didn't read much last year so I'm glad I
was able to find the time to get back to it during the last few weeks.

---

## Professional

My job's been tough lately. I'm working on a project built with Angular. I'm not loving it, but I have to admit there
are some features and patterns that do appeal to me. Built-in dependency injection makes components and services more
reusable and easier to test. RxJS has also captured my interest because of how different it is from what I'm used to.

I'm also curious about the framework's new features. SSR support, signals, and the new template syntax might change my
feelings about Angular, but I haven't tried them yet. I also want to give [Analog](https://github.com/analogjs/analog) a
try. It seems like it could drastically improve the experience of building web apps with Angular.

On to other things, I recently made a [small contribution](https://github.com/charmbracelet/gum/pull/483) to the
open-source project [gum](https://github.com/charmbracelet/gum), a small tool within the [Charm](https://charm.sh/)
ecosystem that aims to enhance shell scripts. Charm was the reason why I started to learn Go. I specifically wanted to
use the [Bubble Tea](https://github.com/charmbracelet/bubbletea) framework to build terminal applications. I already
have a couple of these apps in the pipeline, and I'll be sharing them next month. Stay tuned for updates!
