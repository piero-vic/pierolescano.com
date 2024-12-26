---
title: Status update, March 2024
description: Updates from the previous month.
pubDate: 2024-04-07
tags: []
---

For this status update, I'd like to focus primarily on my personal projects. Unfortunately, there isn't much new to
share about my job, as most of my tasks have been repetitive over the past few weeks. However, I've continued to learn
new things during my free time. Given that this year's theme for me has been hosting services for personal use, the
projects I've been working on during this month revolved around this topic.

To start off, I deployed [Ollama](https://ollama.com/) on [Fly.io](https://fly.io/) after I came across
[this article](https://fly.io/blog/scaling-llm-ollama/). Previously, I had been running Ollama locally but found that
even the smaller models were extremely slow due to the limited hardware on my machine. I decided to use Fly because of
its support for GPUs and the feature that allows machines to be stopped when they’re not being used. With Fly LLMs run
smoothly and I only get charged for the amount computation I actually use.

On to other things, I'm now hosting most of my services on a Raspberry Pi 3B. Previously, I had been running them on a
cloud VPS. However, after getting a power supply and case for the Pi, I decided to set it up to work as a mini home
server. I moved all the data to the Pi and set up a basic backup strategy using [Restic](https://restic.net/). I'm also
using [Tailscale](https://tailscale.com/) to access the services when I'm not at home.

Finally, the highlight of the last month was the deployment of a messaging service for personal use. I started hosting
my own services because I wanted to have full control over my data. Given that online communication is such an integral
part of my digital life, it makes sense for me to host my own private messaging service. To accomplish this, I decided
to use [ejabberd](https://www.ejabberd.im/), an open-source instant messaging solution based on the
[XMPP](https://xmpp.org/) protocol.

I was initially reluctant to host a messaging server. Moving to a privacy-focused platform can be hard. Most people are
content using well-known platforms and may not be interested in privacy-focused alternatives. In most cases, asking them
to try another platform could result in a negative response. That wasn't my case though. I found that close relatives
and friends were willing to give the server a try if they know it was something I was running.

I'll continue to explore self-hosted solutions for most of my needs. I'm currently looking for an inventory management
tool and a fitness tracker. In addition, I'm eager to delve deeper into XMPP. I want to gain deeper understanding of the
protocol and its potential use cases for real-time applications. Stay tuned for further updates.
