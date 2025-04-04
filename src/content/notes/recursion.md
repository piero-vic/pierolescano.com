---
title: Recursion
tags:
  - algorithms
---

- A function that call itself until a problem is solved. The point at which the problem is solved is called **base
  case**.
- It's good to think about function calls as a [stack](stack). Even the segment of memory that is used for function
  calls is also called stack.
- **Always have well-defined base case.**
- Keep in mind that some recursive problems can be implemented as iterations.
- Recursion can be broken down into three steps:
  - Pre: Operations before recursion.
  - Recursion: The function call.
  - Post: Operations after recursion.
- Tail Call Optimization:
  - The compiler or interpreter transforms a recursive function into a loop in order to avoid getting a stack overflow.
    You'll get n infinite loop if you mess up though.
