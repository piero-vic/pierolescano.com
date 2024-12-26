---
title: Linked List
tags:
  - data-structures
---

> Linear collection of elements where each element points to the next.

A linked list doesn't have the same limitations as an [array](array).

- Items don't have to be stored consecutively in memory.
- Its size is dynamic.
- Its elements don't have to be of the same type.

## Node

A linked list is sometimes called a node based data structure. This is because an element in a linked list is called a
**node**. A node has two parts. The first is the **data** and the second is the **memory address of the next node**.

The second part of the last node (also called tail node) is null because there are no more nodes in the linked list.

The first node in the list is called the **head**.

## Operations

| Operation                | Time complexity |
| ------------------------ | --------------- |
| Inserting a element      | O(1)            |
| Deleting a element       | O(1)            |
| Traversing a linked list | O(n)            |
| Accessing an element     | O(n)            |

Deleting and inserting element at the middle of a liked list requires two operations, the traversal and the deletion or
insertion itself. The running time will be O(n).

## Types of linked lists

- **Singly linked list** Each node has two parts. The data and a pointer to the next node.
- **Doubly linked list** Each node also has a reference to the previous node.
- **Circular linked list** The tail node points to the head node.
- **Doubly circular linked list** Each node also has a reference to the previous node and the tail node points to the
  head node.
