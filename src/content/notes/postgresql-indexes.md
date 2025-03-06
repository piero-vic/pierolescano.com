---
title: PostgreSQL Indexes
tags:
  - databases
  - postgresql
---

# PostgreSQL Indexes

- Indexes take disk space. An alternative used to save some space is to create _partial indexes_.
- Each type of index supports a set of comparison operators.

## Index Types

- **B-Tree**
  - Used as the default.
- **Hash**:
  - It only supports the **equality** operator (`=`).
- **GiST** (Generalized Search Tree)
  - Used for complex data types.
  - Used for full text search.
- **GIN** (Generalized Inverted Index)
  - Used for composite values. Documents and arrays.
- **BRIN** (Block Range Index)
  - Used for columns that have some correlation with the physical location of the table.
  - Large sequential lineup datasets.

## Resources

- [PostgreSQL: Documentation: 17: Chapter 11. Indexes](https://www.postgresql.org/docs/current/indexes.html)
