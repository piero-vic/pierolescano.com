---
title: Full-text search with SQLite.
description: A short introduction to full-text search with SQLite.
pubDate: 2025-04-15
tags:
  - sqlite
---

I recently discovered that SQLite has support for [full-text search](https://en.wikipedia.org/wiki/Full-text_search). We
just need to use the [FTS5](https://sqlite.org/fts5.html) extension to create a virtual table. All full-text search
queries are run against this new table.

Let's see an example. I've been playing around with some food datasets, so I'll use a table called `food` for the
example.

```sql
CREATE TABLE food (
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    category TEXT,
    carbohydrate REAL,
    cholesterol INTEGER,
    protein REAL,
    monosaturated_fat REAL,
    polysaturated_fat REAL,
    saturated_fat REAL
)
```

I want to be able to search the records using the `name`, `description` or `category` columns. To accomplish this I can
create a new virtual table called `food_fts` containing these columns.

```sql
CREATE VIRTUAL TABLE food_fts
USING fts5 (
    name, description, category, content = 'food', content_rowid = 'id'
);
```

I'm creating another table to handle full-text search because I don't want to use columns like `carbohydrate` or
`protein` when searching the collection. Notice that I'm also declaring two additional options, `content` and
`content_rowid`. This is to make sure that the `food_fts` table only stores indexes. The actual content lives in the
`food` table.

Then we need to populate the new table.

```sql
INSERT INTO food_fts (rowid, name, category, description)
SELECT id, name, category, description FROM food;
```

After that I only need a query like this to search for records in the `food` table.

```sql
SELECT
    food.*
FROM
    food_fts
    JOIN food ON food_fts.rowid = food.id
WHERE
    food_fts MATCH 'The thing I am searching for';
```

I'm doing a `JOIN` operation, so I can also get the other columns in the `food` table. The `MATCH` keyword is the thing
what that does the magic. This allows me to use the `foods_fts` table to search the records.

## Further reading

- [SQLite FTS5 Extension](https://sqlite.org/fts5.html)
