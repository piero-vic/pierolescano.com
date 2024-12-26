---
title: Array
tags:
  - data-structures
---

> Collection of items stored in a contiguous set of memory.

## How an array works?

```pseudocode
a = int[3]
a[0]
```

What's happening underneath the hood?

- Go to the memory address of `a`
- Add the offset of 0 multiplied by the size of the `int` type.

## Limitations

- **It is just a simple contiguous memory space.**
- **Its items have the same type.**
  - To read the values in an array we need to skip certain amount of memory. If elements were of different types, this
    wouldn't be consistent.
- **It has a fixed size.**
  - Items are stored consecutively. If we try to add elements to the array the next block might not available.
  - Inserting an element implies that you're overwritting something.
- **How we access an element in an array?**
  - We use the index as an offset, multiply it by the length of the type to get the position we want, go to that
    position and read the value.
- **Deletion**
  - You can't really delete an element. You can set it to null.

_Note: Arrays in high-level languages like JavaScript and Ruby don't have these limitations. There's a lot going on
under the hood._

## Operations

| Operation                     | Big O |
| ----------------------------- | ----- |
| Accessing an element at index | O(1)  |
| Inserting an element at index | O(n)  |
| Deleting an element at index  | O(n)  |
| Updating an element at index  | O(1)  |
| Traversing an array           | O(n)  |

## Algorithms

- Linear Search
- Binary Search: For this to work the array must be sorted.
- Bubble Sort
- Selection Sort
- Insertion Sort
