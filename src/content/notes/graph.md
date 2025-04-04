---
title: Graph
tags:
  - data-structures
---

- You can conceptualize it as a [tree](tree) that doesn't have a root.
- You can also do **depth-first** and **breadth-first** traversals on a graph.
  - Depth-first traversals are useful for topological sorting on a directed graph.

## Concepts

- **Vertex**: A point in the graph. Also known as **node**.
- **Edge**: The connection between two nodes.
- **Cycle**: When you start at a specific node, follow some links and end back in the same node you started.

## Types of graphs

- **Acyclic**: A graph with no cycles.
- **Connected**: A node can reach every other node.
- **Directed**: The edges have a defined direction.
- **Undirected**: The edges don't have a direction.
- **Weighted**: The edges have weight associated with them.
- **DAG**: Directed Acyclic Graph

## Representing a graph

- Adjacency List
  - Not very good if you have a lot of connections.
- Adjacency Matrix
