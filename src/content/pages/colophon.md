---
title: Colophon
description: How this website is made.
---

<blockquote>
  <p>A <strong>colophon</strong> is a page or section (typically in a footer) of a site that describes how the site is
  made, with what tools, supporting what technologies, and often published on personal sites at a top level
  <code>/colophon</code> page.</p>
  <cite><a href="https://indieweb.org/colophon">Colophon - IndieWeb</a></cite>
</blockquote>

## General

This website is build with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/). The font is
[JetBrains Mono](https://www.jetbrains.com/lp/mono/) and the theme is based on colors from
[kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim).

The site is currently hosted on [Cloudflare Workers](https://workers.cloudflare.com/). The
[code repository](https://github.com/piero-vic/pierolescano.com) is hosted on GitHub. I have a simple deployment
pipeline to build the site every time new commits are added to the main branch.

## Content

Most content on the site is written in Markdown and managed using Astro Content Collections. I've also used Astro
Islands for interactive components in one blog posts, but I plan to migrate to web components when it comes to content.
Mainly to increase portability in case I need to change frameworks in the future.

Publication and update dates for are generated based on the git history and include links to the corresponding commit on
GitHub.

I use [Mermaid](https://mermaid.js.org/) for diagramming in some of my [notes](/notes). SVGs with the diagrams are
generated during the build process using Playwright.

I provide an [RSS feed](/rss.xml) for blog posts. Feeds for other content on the site are coming soon.

I use [giscus](https://github.com/giscus/giscus) for blog posts comments.
