---
title: Status update, February 2025
description: Updates from the previous month.
pubDate: 2025-03-06
tags: []
---

## Personal

There's not much to share when it comes to personal stuff. One thing worth mentioning is the fact that I build my own
desk. I don't really do woodworking, but I took a course last year and I thought it would be nice to make something on
my own instead of buying it.

## Writing

I definitely need to write a more. Last month I wrote
[one blog post](/blog/a-picker-for-bullet-journal-style-checkboxes-for-neovim) talking about a picker I wrote for
Neovim.

## Reading

I'm about to finish reading _One Hundred Years of Solitude_. I was reading it last year but sadly dropped it due to
other obligations. That's why I think I'm feeling a bit pressured to finish it as soon as possible. However, that
doesn't mean I'm not enjoying it. It's a fantastic book.

[The Art of PostgreSQL](https://theartofpostgresql.com/) is another book I've been checking out this month. I like to
always have a technical books I can reach to. They provide a bunch of new ideas or patters I can try out. Some of the
things that have caught my interest are:

- The use of materialized views for caching.
- Listen/Notify to have simple PubSub implementation.
- A bunch of patterns for writing queries using [CTEs](https://www.postgresql.org/docs/17/queries-with.html) and
  [window functions](https://www.postgresql.org/docs/17/tutorial-window.html).

## Coding

I wrote [battery-notify](https://github.com/piero-vic/battery-notify), a small daemon that sends a desktop notification
when the battery of my laptop is running out. I want to make some improvements, but it fulfills my current needs, so
it's not a priority.

The project that takes most of my time is a web app I'm building to track my workouts. I've been trying to use Go for
all my personal projects, so instead of reaching for a full-stack JavaScript framework as I often do, I decided to take
a [hypermedia-driven](https://htmx.org/essays/hypermedia-driven-applications/) approach with this application. The
current tech stack is as follows.

- [Go](https://go.dev/) and [PostgreSQL](https://www.postgresql.org/) in the backend.
- [temple](https://templ.guide/) to render HTML.
- [Alpine.js](https://alpinejs.dev/) to add client-side interactivity.
- [HTMX](https://htmx.org/) for client-server communication.

I've come across a few difficulties, but I think they are just due my lack of familiarity with the tech stack. I still
have a lot of work to do but once the application reaches a usable state (i.e. I can use it myself at the gym without
any issues), I'll be open sourcing it.
