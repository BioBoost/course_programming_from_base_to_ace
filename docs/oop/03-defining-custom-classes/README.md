---
description: This chapter teaches how to create custom objects and classes.
title: 03 - Defining Custom Classes
---

# Chapter 03 - Defining Custom Classes

Creating custom classes is one of the main responsibilities of an object oriented programmer. As stated before, an application is a collection of objects that interact with each other. These objects are created based on a class developed by a programmer. If we wish to implement some functionality that is not yet available in the language or it is not exactly what we need, we are required to build it ourselves.

<!-- Luckily even if a class is not readily available for us, we will be able to reuse other classes which contain a partial functionality of the class we which to create. -->

It's natural to think of **objects as collections of other objects**. Think about a television which contains a tuner, a screen, a power supply, an embedded system, ... We say that a television object is **composed** of these other objects. Luckily this same concept is available to us in an object oriented programming language. We can also create objects by bundling other objects. This has the big advantage that we can use objects from classes that someone else made or are part of the language libraries. This saves us a lot of time and effort. This sort of code reuse is one of the major advantages of object oriented languages.

## UML Class Diagrams

When creating an application it can often be useful to put some diagrams on paper on how you are going to take on the problem. One of the most used diagrams in the world of object oriented programming is the UML (Unified Modeling Language) class diagram.

UML is a general-purpose, modeling language in the field of software engineering, that is intended to provide a standard way to visualize the design of a system.

A class diagram is a static diagram that describes the attributes and methods of a class and the also the relationships between the different classes in an application. Class diagrams are widely used in the modeling of object oriented systems because they are the only UML diagrams, which can be mapped directly with object-oriented languages.

While methods can be made private, often these are omitted from the UML diagram. This is often the case because most programmers find them cluttering the class diagram and they are often created as needed and not important for the outside user.

When modeling software it's normal that not all details are available from the start. For example the type of the attributes should also be documented in the UML diagram, as are the arguments and return types of the methods. However sometimes those details haven't been decided yet. In that case we just leave them out and add them later.

As an example take a look at the UML class diagram of a Hotel Management System below.

![UML Class Diagram of a Hotel Management System](./img/uml_class_diagram_hotel.png)

<!-- Another example would be nice. Maybe something with IoT -->

Even if your are not an experienced programmer yet, you should be able to understand the concept of the application (not the details, only the general idea) just by looking at the diagram. If that is the case, its usefulness has just been proven.

## Creating a Class

When creating custom classes in C# it is convention to place the whole class and nothing but the class inside its own `cs` file. In Visual Studio this can be achieved by right clicking on your project and selecting `Add => Class`.

Consider a class that represents a simple lightbulb in your house. The class is called `LightBulb` because the convention in C# for class names is that they should be named using **Pascal Case**.

```csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace Domotics
{
  class LightBulb
  {
  }
}
```

::: tip Pascal Case and camel Case
Pascal case is a subset of Camel Case where the first letter is capitalized. That is, userAccount is a camel case and UserAccount is a Pascal case. In C# the convention is that both method names and class names are Pascal cased. It is easy to remember. Pascal is a proper noun so capitalize the first letter, while camel is a common noun, so you do not capitalize the first letter.
:::

::: tip snake_case
Snake case (or snake_case) is the practice of writing compound words or phrases in which the elements are separated with one underscore character `_` and no spaces, with each element's initial letter usually lower cased within the compound and the first letter either upper or lower case - as in "foo_bar" and "Hello_world".
:::

The first three lines are stating which libraries we wish to be able to use. Basically at the moment we only need the `System` library but you can leave it as is.

```csharp{1-3}
using System;
using System.Collections.Generic;
using System.Text;

namespace Domotics
{
  class LightBulb
  {
  }
}
```

Next is the `namespace` to which the class belongs. A namespace is like a container that can contain all sorts of entities such as classes. `System` is actually also a namespace. By using these containers, collisions are avoided between class names. There can for example exist a class `Rectangle` in the namespace `Geometry` and a class `Rectangle` in the namespace `2DGraphics`. By placing classes in namespaces we don't have to invent unique names for our classes. Namespaces also allow developers to bundle classes together that logically belong together. Visual Studio will automatically add all your classes to a namespace with the same name as the application. You can change the names of these namespaces as you wish.

```csharp{5,6,10}
using System;
using System.Collections.Generic;
using System.Text;

namespace Domotics
{
  class LightBulb
  {
  }
}
```

Last but not least is the actual class definition. To define a class all you need is the keyword `class` followed by a name (in PascalCase) and curly braces for the body of the class.

```csharp{7-9}
using System;
using System.Collections.Generic;
using System.Text;

namespace Domotics
{
  class LightBulb
  {
  }
}
```

<!-- TODO: For a class in C#, Internal is the default if no access modifier is specified. -->

### UML Class Diagram of LightBulb

In its current state the `LightBulb` class can be visualized using the class diagram shown below.

![Start of a class diagram of LightBulb](./img/light_bulb_class.png)

The class shape in a class diagram consists of a rectangle with three rows. The top row contains the **name of the class**, the middle row contains the **attributes of the class** (the data of the objects), and the bottom section expresses the **methods and/or constructors** (the behavior) that the class has. In a class diagram, classes and subclasses are grouped together to show the relationship between objects of these classes.
