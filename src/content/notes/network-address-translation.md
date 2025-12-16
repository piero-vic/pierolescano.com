---
title: Network address translation
tags:
  - networking
---

- Translate **private** IPv4 addresses to **public** IPv4 addresses.
- NAT is designed to overcome the shortage of IPv4 addresses. It doesn't make much sense with IPv6.
- A NAT device like a router maintains a NAT table that maps private IP addresses to public IP addresses.

## Static NAT

- One private IP address is mapped to one public address.
- This is how the AWS Internet Gateway works.

## Dynamic NAT

- There is a share pool of public IP addresses. Many private addresses are mapped to the first available public address
  in this pool.
- The mapping of addresses is temporal.
- Multiple devices can have the same public IP as long as they use the IP at different times.
- Useful when there are many private IP addresses and a lower number of public IP addresses.

## Port Address Translation (PAT)

- Many private IP addresses are mapped to a single public address.
- This is likely what a home internet router does.
- This is how the NAT Gateway in AWS works.
- With PAT, [ports](ports) are also stored in the NAT table. A NAT device allocates public ports which are mapped to the
  private IP and port of the devices in its network. This is how multiple devices in a network can share a single public
  IP address.

## Further Reading

- [Network address translation - Wikipedia](https://en.wikipedia.org/wiki/Network_address_translation)
