---
title: Hash Table
tags:
  - data-structures
---

> Data structure that can map keys to values.

- Mainly used for the key-value lookup.
- Also known as map, dictionary, hash map, or associative array.
- Most languages already have a hast table implementation built-in.

## Parts of a Hash Table

- **Key**: Against which we store the values. There can only be one instance of the key in the hash table.
- **Value**: The data that we need to store. Usually stored in an array. There can be multiple instances of a value.
- **Hashing function**: A function that takes an input and returns a hash code. In this case the hash code would be the
  index of the array of values. This function should always return the same value if its input doesn't change. A good
  hashing function should be able to handle hash collisions. This happens were two or more inputs return the same hash
  code.

## Constraints

- **One-Directional Lookups**: We can have constant time lookups only when we use the key to find its value, no the
  other way around.
