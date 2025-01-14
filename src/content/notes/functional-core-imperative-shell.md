---
title: Functional Core, Imperative Shell
tags: []
---

- As the name suggest the **core** domain logic of the software should be **functional**. It must rely on immutable
  values and pure functions.
- The **shell** can be programmed in an **imperative** style. It will take care of all the side effects like making and
  responding to network requests.
- The **shell** can call the **core** but not the other way around.

## Resources

- [Functional Core, Imperative Shell - Destroy All Software](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) #media/video
- [The Functional Core, Imperative Shell Pattern – Kenneth Lange](https://kennethlange.com/functional-core-imperative-shell/) #media/article
