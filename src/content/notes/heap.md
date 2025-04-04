---
title: Heap
tags:
  - data-structures
---

A binary [tree](tree) where every child is either smaller, or larger than the current node.

## Types of trees

- **Max Heap**
  - Every child is smaller than the current node.
  - The root is always the largest item in the heap.
- **Min Heap**
  - Every child is greater than the current node.
  - The root is always the smallest item in the heap.

## Using an array to represent a tree

`n` is any index in the array.

- Left child: `2n + 1`
- Right child: `2n + 2`

## Use cases

- Priority queues
