---
title: A picker for bullet journal style checkboxes in Neovim
description: A walkthrough of a simple checkbox picker for Neovim.
pubDate: 2025-02-14
tags:
  - neovim
---

Ever since I discovered [Obsidian](https://obsidian.md/) a few years ago, I've been using with the
[Minimal theme](https://minimal.guide/). The only reason being that this theme supports
[alternate checkboxes](https://minimal.guide/checklists#Alternate+checkboxes) which provide a bunch of icons similar to
the ones you would have in a bullet journal.

Obsidian is great, but in the last few months, I've been moving most of my note-taking to the terminal. After
discovering [render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim), a Neovim plugin which
also renders alternate checkboxes, I decided to move my note-taking workflow to Neovim. And since I already commit to
only use Neovim, why not write some Lua to make it easier to work with checkboxes?

I wanted to create a simple automation to easily change between checkboxes. First, I created a table containing the all
the custom checkboxes I use. For my use case, I'm sticking with a few similar to the ones that come with the minimal
theme.

```lua
-- This is using nerd fonts, so you might not be able to see the icons.
local checkboxes = {
  { char = ' ', icon = '', label = 'to-do' },
  { char = '/', icon = '', label = 'incomplete' },
  { char = 'x', icon = '', label = 'done' },
  { char = '>', icon = '󰒊', label = 'forwarded' },
  { char = '<', icon = '󰃭', label = 'scheduling' },
  { char = 'l', icon = '', label = 'location' },
  { char = 'b', icon = '', label = 'bookmark' },
  { char = 'u', icon = '󰔵', label = 'up' },
  { char = 'd', icon = '󰔳', label = 'down' },
}
```

Then I wrote a function. The logic is pretty simply. First, I'm running a couple of checks to make sure I'm in a
markdown file and that the current line contains a checkbox. Then, I'm using
[`vim.ui.select`](<https://neovim.io/doc/user/lua.html#vim.ui.select()>) with the table of checkboxes as the options.
Finally, if there is a selection, I'm changing the checkbox in the current line using
[`string.gsub`](https://www.lua.org/manual/5.3/manual.html#pdf-string.gsub). That's it. Not a lot of code.

```lua
local function select_checkbox()
  if vim.bo.filetype ~= 'markdown' then
    return
  end

  local pattern = '%- %[.-%] '

  local line = vim.api.nvim_get_current_line()
  if not line:match(pattern) then
    return
  end

  vim.ui.select(checkboxes, {
    prompt = 'Checkboxes:',
    format_item = function(item)
      return string.format('%s %s', item.icon, item.label)
    end,
  }, function(choice)
    if not choice then
      return
    end

    local checkbox = string.format('- [%s] ', choice.char)
    local modified_line = line:gsub(pattern, checkbox, 1)
    vim.api.nvim_set_current_line(modified_line)
  end)
end
```

I think this can be improved by making use of tree-sitter, but this is more than enough for me at the moment. Now all we
need to do is to create a keybinding.

```lua
vim.keymap.set('n', '<leader>tt', select_checkbox)
```
