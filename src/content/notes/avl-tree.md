---
title: AVL Tree
tags:
  - data-structures
---

A BST that rotates the tree every time there is a violation of the order.

## Concepts

- Balance factor: -1, 0, 1
  - right node height - left node height
  - You cannot have a balance factor greater than 1 or lesser than -1

## Rotations

### RR rotation

- Right leaning tree
- Balance factor is 2

### LL rotation

- Left leaning tree
- Balance factor is -2

### LR rotation

- Left leaning tree where the left child is a right leaning subtree.
- Balance factor is -2

### RL rotation

- Right leaning tree where the left child is a left leaning subtree.
- Balance factor is 2
