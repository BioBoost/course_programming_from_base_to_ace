---
description: A tutorial on how to create a terminal selection menu
title: Tuto - Terminal Selection Menu
---

<!-- TODO: Turn it into a library that we can use in other apps -->

::: danger ☠️ First draft
Please note that this is a very early first draft. It may contain errors, typos, irregularities and even unfinished sections.
:::

# Tutorial - Terminal Selection Menu

This tutorial will guide you through the process of making a dynamic selection menu for a terminal application that can be controlled using the arrow-keys.

<!-- TODO: Add GIF example here of the end result -->

## First Things First

First of we'll need to think about what the application should do and how we will tackle this problem.

* The idea is to show a menu to the user that consists of a couple of options and a title or question.
* The user should be able to use the arrow keys to select one of the options and hit `ENTER` to confirm.
* The currently selected option should be visually indicated as being currently select.

Let's take a look at some examples. First of the general menu idea:

```
What option would you like to pick?

  [X] The first option
  [ ] The second option
  [ ] The fourth option
  [ ] The last option

Press the up and down arrows to choose an option.
Hit ENTER to confirm and continue.
```

Pressing the down key should result in the `X` moving to the new option:

```
What option would you like to pick?

  [ ] The first option
  [X] The second option
  [ ] The fourth option
  [ ] The last option

Press the up and down arrows to choose an option.
Hit ENTER to confirm and continue.
```

Once the user has made a choice we should be able to identify the selected item:

```
Thank you for choosing "The second option".
```

This is basically what the menu should be able to do.

## Object Oriented Design

The first step into designing a solution for this problem is to identify some classes and determine a starting point on what to work first.

Basically we are building a **Menu** here, so the most logical thing to do is provide a `Menu` class.

Let's try to identify what information the objects should hold and what functionality the `Menu` class should provide:

* It should have a text/title/question. This is part of the state of the class so we can store it as an attribute of type `string`.
  * We can take this information in via the constructor as a menu without a text does not have much use.
* It should allow us to add items to the menu.
  * This can be achieved by providing a method for it, for example `AddItem()`.
  * The type of the items can be kept simple for the time being and can be of type `string`
  * The items themselves should most likely best be stored in a container like for example a `List`. Not a good idea to use an array here as we actually do not know how many items will be stored in the menu beforehand.
* It should have methods for changing the selected item
  * Changing the selected item should be requestable from the outside of the class. It's not good design to bind to the terminal and arrow-keys internally in this class.
  * This can be achieved by adding for example a `Next()` and `Previous()` method.
  * This also implies that the currently selected item should be tracked. An index attribute is probable most appropriate here.
* It should allow the currently selected item to be retrieved
  * By providing for example a methode `GetSelected()`, the currently selected item can easily be requested from the object.
* The state of the menu should be representable as a `string`.
  * This allows for easy output to the terminal.
  * By adding a `ToString()` method to the class this can be easily achieved.

While this is already a serious list, it's not as complex as it seems.

Let's throw some of this information into a UML class diagram. That will probable give us a better overview.

![Menu Class](./img/menu_class.png)

How we will be controlling this menu using the arrow keys will be the next step. Let's first design this `Menu` class.






## Start

Start by creating a new .NET Core console application and give it an appropriate name.