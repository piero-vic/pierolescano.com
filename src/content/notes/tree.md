---
title: Tree
tags:
  - data-structures
---

It's a hierarchical data structure. Used to represent things like organizational hierarchy, the file system directory
structure, or database indexes.

- **Nodes**: Element of a tree.
- **Edge**: The path connecting two nodes.
- **Leaf node**: A node that doesn't have any children.
- **Root node**: First node in the tree.
- **Parent nodes**: Node above any other node.
- **Height**: Maximum number of edges from the root to a leaf node.
- **Branching factor**: The amount of children a tree has.

## Types of trees

- **Binary tree**
  - A tree where the maximum number of children a node can have is 2.
- **Balanced tree**
  - A tree is _perfectly_ balanced when any nodes' left and right children have the same height.
- **Binary search tree (BST)**
  - A type of binary tree with sorted nodes.
  - The value in the left node is smaller than the value in the parent.
  - The value in the right node is greater than the value in the parent.
- [AVL Tree](avl-tree): A BST that rotates the tree every time there is a violation of the order.
- **Red-black Tree**
  - It is a BST.
  - The root and nil nodes are black.
  - All nodes are either red or black.
  - You cannot have a red parent with a red child.
  - All paths have the same number of black children.
- [B-Tree](b-tree)
- Minimum Spanning Tree:
  - Minimum amount of edges required to have a connection to every single node in a [graph](graph).
  - Prim's Algorithm
  - Kruskal's Algorithm

## Traversals

### Depth-first

We use a [stack](stack). Easier to implement with recursion. It preserves the shape of the tree.

```mermaid
flowchart TD
7 --- 23 --- 5
      23 --- 4
7 --- 3 --- 18
      3 --- 21
```

#### Pre-order

- Root at the beginning.
- **Visit node**, recurse left, recurse right.
- **7**, 23, 5, 4, 3, 18, 21

#### In-order

- Root at the middle.
- Recurse left, **visit node**, recurse right.
- 5, 23, 4, **7**, 18, 3, 21

#### Post-order

- Root at the end.
- Recurse left, recurse right, **visit node**.
- 5, 4 23, 18, 21, 3, **7**

### Breadth-first

We use a [queue](queue). It does NOT preserve the shape of the tree. Useful for nearness and pathfinding.

```mermaid
flowchart TD
7 --- 23 --- 5
      23 --- 4
7 --- 8 --- 21
      8 --- 15
```

Given the previous tree, we would traverse in the following order: 7, 23, 8, 5, 4, 21, 15

## Deletions on a BST

### 1. Node with no children

No special handling required. Simply delete the node.

### 2. Node with one child

The node parent must now point to the child.

**Initial tree**

I want to delete A.

```mermaid
flowchart TD
X --- Y
X --- A --- B
            B --- Bl
            B --- Br
```

**Operations**

```mermaid
flowchart TD
X --- Y
X ---|New| B
           B --- Bl
           B --- Br
X ---|Delete| A ---|Delete| B
```

**Resulting tree**

```mermaid
flowchart TD
X --- Y
X --- B
      B --- Bl
      B --- Br
```

### 3. Node with two children

- Concepts:
  - **In-order successor:** Go to the right node and find the smallest child in the subtree.
  - **In-order predecessor:** Go to the left node and find the greatest child in the subtree.
- You need to find the **in-order successor** or the **in-order predecessor** and swap it with the node you want to
  delete.
- After the swap delete the node. Apply one of the previous methods.
  - The node might have one child. In this case apply the second method.
