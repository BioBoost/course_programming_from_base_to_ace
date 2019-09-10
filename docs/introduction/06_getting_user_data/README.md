---
description: Applications are all about processing data. This data has to be generated or retrieved from somewhere. Often data needs to be requested from the user.
title: 06 - Getting User Data
---

# Chapter 06 - Getting User Data

![User Input](./img/user_input.png)

The main **goal of an application is to process data**. This data can be requested from the user, read from a file, retrieved from the Internet, be randomly generated, ...

## Requesting User Input

If requesting input from the application user, the application can be made more user-friendly and dynamic.

Requesting user input is not that hard. All one has to do is output a message to the user stating what is expected if him/her and allow the user to input the actual data.

Basically when a user enters something via the terminal, it is considered to be a `string`. If we wish to approach the data as an integer or another type of value, it needs to be **parsed** (converted). C# makes this really simple by providing some methods to convert these strings to integral of floating-point numbers.

### Requesting a String

Requesting a piece of text from the user is very simple. While the `Console.WriteLine()` method provides a way to easily write a string to the terminal, the method `Console.ReadLine()` does the opposite. It lets the user input a string which can then be programmatically be stored in a variable of type string.

The following code snippet requests the user to input his/her name. Next the input is used to output a personalized greeting to the user.

```csharp
Console.Write("Please enter your name: ");
string name = Console.ReadLine();

Console.WriteLine("Hello " + name + ". Very nice to meet you.");
```

Some remarks are needed about this code example:

* Instead of `Console.WriteLine()` the snippet makes use of `Console.Write()`, allowing the user to type after the question. Nothing wrong if `Console.WriteLine()` would of been used, it just feels more natural this way.
* The variable `name` is declared when needed, not beforehand. Some people that come from the world of C-programming may have the habit to declare all variables at the top of `main()`, but this is not needed and even discouraged.
* The method `Console.ReadLine()` is called and it returns a result (a string with the text that the user typed). By assigning the result to the variable `name` of the type `string`, it can be used later in the code.
