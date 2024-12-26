---
title: Big O
tags:
  - algorithms
---

A standardize way to measure how an algorithm's performance changes as the amount of data it receives increases.

1. It measures **growth** with respect to the **input**. If algorithm receives N elements, as input how many steps will
   it take to finish?
2. **Constants are dropped** because they are not concerned with the size of the input.
3. It generally refers to the **worst-case scenario**.

## Time complexities

| Notation | Name        | Description                                                      |
| -------- | ----------- | ---------------------------------------------------------------- |
| O(1)     | Constant    | Doesn't increase when the amount of data changes                 |
| O(n)     | Linear      | Increases one step each time the data has one additional element |
| O(log n) | Logarithmic | Increases one step each time the data is doubled                 |
| O(n^2)   | Quadratic   |                                                                  |

## Resources

- [Big O myths busted! (Time complexity is complicated)](https://youtu.be/7VHG6Y2QmtM) #media/video
