---
title: Plain text accounting
tags:
  - command-line
  - finances
  - snippets
---

I manage my finances using plain text files and the [ledger-cli](https://ledger-cli.org/) program. This solution has
proven to be simple yet powerful. It offers an interface I'm familiar with since I just have to open a text file inside
Neovim and edit the entries.

## Snippets

A list of some of the commands I usually run to generate reports with ledger-cli or [heldger](https://hledger.org/). If
I have a particular question about my finances, there's probably a command I can use to generate the report I need.

### How much have I spent this month?

```bash
ledger bal --period "this month" ^Expenses:
```

I can also specify other time periods, but I usually stick to a specific month.

### How much have I spent each month of this quarter?

```bash
hledger balance --period "this quarter" --monthly ^Expenses: | less
```

Sometimes the reports can be large. In this case I just pipe the output to `less`.

### What is the history of transactions in a particular account?

```bash
ledger reg --period "this month" Assets:Bank
```

To display transactions in reverse order I can use `--sort "-date"`

```bash
ledger reg --period "this month" --sort "-date" Assets:Bank
```

### What are my incomes in USD?

Income account are normally displayed with negative numbers, so I use `--invert` to get a nicer output.

```bash
hledger balance --monthly --invert cur:USD Income
```

## Resources

- [Plain Text Accounting](https://plaintextaccounting.org/)
- [Ledger by Travis Ormandy](https://lock.cmpxchg8b.com/ledger.html) #media/article

## Tools

- [Paisa](https://paisa.fyi/) #tools
- [Puffin](https://github.com/siddhantac/puffin) #tools
- [NanoLedger](https://github.com/chvp/NanoLedger) #tools
