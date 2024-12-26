---
title: TCP
tags:
  - networking
---

> Transport Control Protocol

Is a transport-layer protocol exposes a reliable communication channel between two processes on top of IP.

- TCP creates segments that are sequentially numbered.
- The segments are sequentially numbered, which allows the receiver to detect holes and duplicates. The receiver needs
  to acknowledge that it got the segment. If not the sender will send it again after some time.
- The receiver uses a checksum to verify the integrity of the data.
- A three-way handshake is used to establish a TCP connection. A full round-trip that doesn't send any application data.
