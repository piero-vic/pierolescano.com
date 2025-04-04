---
title: Hash Table
tags:
  - data-structures
---

> Data structure that can map keys to values.

- Mainly used for the key-value lookup.
- Also known as map, dictionary, hash map, or associative array.
- Most languages already have a hast table implementation built-in.

## Concepts

- **Key**: A value that is hashable. It is used to look up the data we store in the hash table. There can only be one
  instance of the key in the hash table.
- **Value**: The data that we need to store. Usually stored in an array. There can be multiple instances of a value.
- **Hashing function**: A function that takes an input and returns a hash code. In this case the hash code would be the
  index of the array of values. This function should always return the same value if its input doesn't change. A good
  hashing function should be able to handle hash collisions.
- **Load factor**: Amount of data points vs the amount of storage available.
- **Collision**: When 2 keys map to the same cell.

## Constraints

- **One-Directional Lookups**: We can have constant time lookups only when we use the key to find its value, no the
  other way around.
