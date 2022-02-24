---
description: A tutorial on how to create a terminal selection menu
title: Terminal Selection Menu
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
* The currently selected option should be visually indicated as being currently selected.

Let's take a look at some examples. First of the general menu idea:

```
What option would you like to pick?

  > The first option <
    The second option
    The fourth option
    The last option

Press the up and down arrows to choose an option.
Hit ENTER to confirm and continue.
```

Pressing the down key should result in the selection moving to the new option:

```
What option would you like to pick?

    The first option
  > The second option <
    The fourth option
    The last option

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
  * By providing for example a method `GetSelected()`, the currently selected item can easily be requested from the object.
* The state of the menu should be representable as a `string`.
  * This allows for easy output to the terminal.
  * By adding a `ToString()` method to the class this can be easily achieved.

While this is already a serious list, it's not as complex as it seems.

Let's throw some of this information into a UML class diagram. That will probable give us a better overview.

![Menu Class](./img/menu_class.png)

How we will be controlling this menu using the arrow keys will be the next step. Let's first design this `Menu` class.

## Creating a Menu Class

Start by creating a new .NET Core console application and give it an appropriate name.

Next add a new class to the project called `Menu`:

```csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace TerminalSelectionMenu
{
    public class Menu
    {
    }
}
```

Note that the access modifier is set to `public` here as we will create a library at the end of this toturial.

### The Text

The easiest thing to do first is to add a `text` to the menu. This can be implemented as an attribute of type `string`. At the moment it should not be changeable  after its been initialized or it should not be accessed from the outside, so we can basically just add an attribute without a property.

```csharp{3}
public class Menu
{
  private string text = "";
}
```

To initialize the `text` attribute, we will provide a constructor that takes in this text when an object of the class `Menu` is instantiated.

```csharp{3-9}
public class Menu
{
  public Menu(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
}
```

Note that we added a safe-guard to make sure that the provided `text` is not `null`. If it is, the attribute is not altered and the `text` attribute will keep it's original value, an empty string `""`.

Looking at this code, it is a bit ugly to place this safe-guard inside the constructor. A better solution is to add a `private` setter for the `text` attribute.

```csharp{5,8-14}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
}
```

Note that a property with private setter and getter would also have been an option. You can pick the solution you find cleanest.

### ToString

To be able to test the `Menu` class, we can add an initial implementation of the `ToString()` method. That way we can instantiate an object in our `Main` and print out the result to the terminal.

```csharp{8-11}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  public override string ToString()
  {
    return text;
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
}
```

At this moment, all the `ToString()` method is required to do is return the `text` of the `Menu`.

To test if the `Menu` class is up to its task, a small application can be implemented in the `Main`:

```csharp
static void Main(string[] args)
{
  Console.WriteLine("Welcome to the Tutorial - Terminal Selection Menu\n");

  // Let's create an instance of the class menu with a certain text
  Menu menu = new Menu("Please select your favorite food from the options.");

  // Let's print the result to the terminal
  Console.WriteLine(menu);
}
```

The result should be

::: codeoutput
<pre>
Welcome to the Tutorial - Terminal Selection Menu

Please select your favorite food from the options.
</pre>
:::

Congratulations. We are of to a good start.

## Tracking the Items

To keep track of the menu items we need some sort of collection. Since we do not know beforehand how many items the menu will hold, it is not an option to use a plain array.

A perfect candidate is the `List<T>` class of C# found in `System.Collection.Generic`. It's a dynamic collection that represents a strongly typed list of objects that can be accessed by index - just like an array. It also provides methods to search, sort, and manipulate the items in the list.

::: hint List
Find more info and examples of `List<T>` at [https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0).
:::

Creating an object of this generic container class requires us to also specify the type of the data we will be putting inside the container. That is what the `T` stands for. Basically, the `List` acts as a dynamic array, and just as with a plain array we need to specify the type of the elements, we also need to do this with a `List`.

So to declare a variable and initialize it with a reference to a new object, we need to use the following statement:

```csharp
List<T> myList = new List<T>();
```

where `T` is the type of the objects/values we want to store. In the case of this menu application, it will be `string` objects.

So let us add an attribute `items` to the `Menu` class to hold the menu items:

```csharp{22}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  public override string ToString()
  {
    return text;
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
  private List<string> items = new List<string>();
}
```

## Adding Items to Menu

The next step is to allow menu items to be added to a menu. This can be achieved my implementing the `AddItem()` method which takes in a `string` argument.

All this method has to do is add the argument string to the list of `items` inside our `Menu`. Adding items to a `List` can be accomplished by calling the `Add()` method on the object and passing in the element.

So basically our `AddItem()` method just needs to call the `Add()` method on `items` and pass the argument value.

```csharp{8-11}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  public void AddItem(string item)
  {
    items.Add(item);
  }

  public override string ToString()
  {
    return text;
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
  private List<string> items = new List<string>();
}
```

To actually add items to our demo menu, we will also need to extend our `Main` and add some items to the menu:

```csharp
static void Main(string[] args)
{
  Console.WriteLine("Welcome to the Tutorial - Terminal Selection Menu\n");

  // Let's create an instance of the class menu with a certain text
  Menu menu = new Menu("Please select your favorite food from the options.");

  // Add possible options to the menu
  menu.AddItem("Spaghetti");
  menu.AddItem("Hamburgers");
  menu.AddItem("Fries");
  menu.AddItem("Pizza");

  // Let's print the result to the terminal
  Console.WriteLine(menu);
}
```

If you run the application in it's current state you will not see the items being printed to the terminal window. That is because we have not yet altered the `ToString()` method to take the list of items into account. That is our next step.

The `ToString()` method needs to return the `text` and all the items currently held by the menu as a string representation. We can achieve this using a for-loop construct to iterate over the `List` of items we are holding. The number of items held by the `List` object, can be retrieved via the property `Count`. By creating a local variable `output`, we can append the items and even add some extra formatting. This way we can already add some indentation to the items.

```csharp{15-22}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  public void AddItem(string item)
  {
    items.Add(item);
  }

  public override string ToString()
  {
    string output = text + "\n";

    for (int i = 0; i < items.Count; i++)
    {
      output += $"\n    {items[i]}";
    }

    return output;
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
  private List<string> items = new List<string>();
}
```

Note how we can access the elements of the `List` just as it were a basic array using the square brackets `[]`. This makes `List` very intuitive.

::: info Foreach
Why not use a foreach-loop construct here ? At this point we actually could. But looking a bit forward, we will need to be able to identify the selected item later on. Since this item will be tracked using an index, we will also require the item index while adding the items to the output. The item index is not available with a foreach-loop, therefore we use a for-loop construct here.
:::

When we run this, we should get the following output in the terminal:

::: codeoutput
<pre>
Welcome to the Tutorial - Terminal Selection Menu

Please select your favorite food from the options.

    Spaghetti
    Hamburgers
    Fries
    Pizza
</pre>
:::

One last thing to take into account is a safe-guard for the `AddItem()` method. Currently the method allows `null` references to be inserted into the menu, which might give problems later on. In the case of a menu, a `null` reference can be considered invalid, so we should handle this case and make sure no `null` references can be inserted into the `List`.

By adding a safe-guard in the `AddItem()` method that checks if the incoming `item` is not `null` we can filter them out an not add them to the `List`:

```csharp{10-13}
public class Menu
{
  public Menu(string text)
  {
    SetText(text);
  }

  public void AddItem(string item)
  {
    if (item == null)
    {
      return;
    }

    items.Add(item);
  }

  public override string ToString()
  {
    string output = text + "\n";

    for (int i = 0; i < items.Count; i++)
    {
      output += $"\n    {items[i]}";
    }

    return output;
  }

  private void SetText(string text)
  {
    if (text != null)
    {
      this.text = text;
    }
  }

  private string text = "";
  private List<string> items = new List<string>();
}
```

In practice we often first check validity of the incoming data and if it is invalid we generate an error or ignore the value. Here we can implement this by checking if `item` is `null` and if it is, we return from the method call, basically doing nothing and ignoring the `null` reference. If the arguments passes the check, we can safely add it to the `List`.

We can actually test this by adding some `null` references in `Main` and check if anything is outputted to the terminal. If the `null` references are still in the `List`, we should get extra empty lines in the item listing.

```csharp
static void Main(string[] args)
{
  Console.WriteLine("Welcome to the Tutorial - Terminal Selection Menu\n");

  // Let's create an instance of the class menu with a certain text
  Menu menu = new Menu("Please select your favorite food from the options.");

  // Add possible options to the menu
  menu.AddItem("Spaghetti");
  menu.AddItem("Hamburgers");
  menu.AddItem("Fries");
  menu.AddItem("Pizza");
  menu.AddItem(null);
  menu.AddItem(null);

  // Let's print the result to the terminal
  Console.WriteLine(menu);
}
```

It seems like everything is working as expected:

::: codeoutput
<pre>
Welcome to the Tutorial - Terminal Selection Menu

Please select your favorite food from the options.

    Spaghetti
    Hamburgers
    Fries
    Pizza
</pre>
:::
