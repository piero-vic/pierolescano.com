---
title: API Pagination
tags:
  - apis
  - sql
---

# API Pagination

A list of ways to add pagination to an API.

## Page based pagination

```http
GET http://localhost:3000/items?page=2&size=3
```

- `page` is the number of the page.
- `size` is the number of elements in the page.

## Offset based pagination

Mapping directly to SQL clauses. _OFFSET_ and _LIMIT_.

```http
GET http://localhost:3000/items?offset=20&limit=10
```

The previous request would map to the following SQL query.

```sql
SELECT * from items LIMIT 10 OFFSET 20;
```

Offset can cause performance issues when the data grows larger. This is because the database needs to scan all the
rows until the offset value.[^1]

[^1]: [OFFSET is bad for skipping previous rows](https://use-the-index-luke.com/sql/partial-results/fetch-next-page)

## Cursor based pagination

<!-- TODO: Review -->

- **Better for large and fast-changing datasets.**
- The cursor value can be hash for security.

### Keyset based pagination

It uses and index key like a primary key.

```sql
SELECT * from items WHERE id <= 1234 LIMIT 20;
```

### Time based pagination

It uses timestamps as cursors.
