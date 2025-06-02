---
title: Trying out the Corne Keyboard
description: Some thoughts on my first time using a split keyboard.
image: ../../assets/images/corne.jpg
imageAlt: Corne Keyboard
pubDate: 2025-06-02
tags:
  - keyboards
---

I've been wanting to give ergonomic keyboards a try for while now. Last month I came across a good offer for a second
hand [Corne](https://github.com/foostan/crkbd), so I didn't hesitate to buy it. The experience with a split keyboard has
been interesting. It felt similar to learning vim for the first time. Strange, uncomfortable, but rewarding nonetheless.

## Learning

The first thing that felt weird about the keyboard was, well... the fact that it's split. The keys were also arranged in
straight columns instead of being at an angle. I already knew how to touch type, so it only took me a week or so to get
used to the shape of the Corne.

The keyboard I bought came with labelless keycaps. I don't mind labelless keycaps, however, the keycaps also lacked
those little bumps in the <kbd>F</kbd> and <kbd>J</kbd> keys which cause me to unintentionally shift the position of my
hands. I ended up swapping the keycaps for ones from a spare keyboard.

Other thing that bothered me a bit was the small number of keys this keyboard had compared to a regular one. To be able
to type numbers or symbols you need to use layers. Layers are similar to how the <kbd>Fn</kbd> is used to access media
controls in some keyboards. A layer is activated by holding one or more designated keys configured by the user. It seems
like layers are one of the things that scare people the most when it comes to trying an ergonomic keyboard.

Finally, as a consequence of the change in layout, the way I type the shortcuts of my most used programs changed
significantly. Using things like Sway, Neovim and tmux felt weird. It bothered me a lot at the beginning, but I'm now
capable of using the new layout without too much hassle.

## Configuration

The Corne is highly configurable. The version I have uses QMK, an open source firmware for custom keyboards. Before
diving into writing my own custom layout, I decided to try the QMK default. I got used to most of the layout. The only
thing that bothered me was having the <kbd>Esc</kbd> on the right side, so I decided to change that.

I also tried [VIAL](https://github.com/vial-kb/vial-qmk), a fork of QMK that comes with a GUI to configure the keyboard
in real time. It allowed me to configure the keyboard without having to flash it every time I wanted to change
something. I used it for couple days, but I had problems when trying to configure media keys, so I switch back to QMK.

<figure>
    <img alt="A keyboard layout" src="/images/keyboard-layout.png" />
    <figcaption>
        My current layout. Made with
        <a href="https://www.keyboard-layout-editor.com/">Keyboard Layout Editor</a>.
    </figcaption>
</figure>

## What's next?

I'll be exploring other layouts from time to time. I'm happy with my current setup, but I think I make improve my use of
layers. [KeymapDB](https://keymapdb.com/) seems like a good website to see how other people configure their QMK
keyboards.

I also want to learn how to configure the OLED displays. There are a lot of configuration examples on the internet. I
might take some inspiration and see what can I do. It might also be a good opportunity to learn a bit of C.

Building my own keyboard is definitely in the backlog. It's not unusual to see people in the custom keyboard space
crafting their own keyboards. I think that I miss the special part of the process by buying it.
