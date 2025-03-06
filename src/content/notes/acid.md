---
title: ACID
tags:
  - algorithms
---

- **Atomicity**: There are no partial updates.
- **Consistency**: A transaction cannot mutate the data into an incorrect state. This happens at the application level
  an is responsibility of the application developer.
- **Isolation**: Transactions run as if no other transactions are executing. They must be concurrent-safe.
- **Durability**: Once changes are committed they are also persisted in disk to ensure that the database doesn't lose
  changes if it crashes.
