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

## Requesting a String

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

## Requesting an Integer

When requesting an other type of data from the user, the input first needs to be parsed to the correct data type. Csharp cannot know from itself what kind of data the user provided.

Below is a code snippet that shows how to use the `Int32` struct to **parse the input from the user as an integer** by using the `Parse()` method to parse the provided string as an integer. Do take note that if the user inputted anything else than an integer, the application will crash. Feel free to test this. For the moment, fixing this is too complex. This course will return to this later.

```csharp
Console.Write("Please enter your age: ");
string ageText = Console.ReadLine();
int age = Int32.Parse(ageText);

Console.WriteLine("How interesting that you are " + age + " years young.");
```

Take note on how the `ageText` variable is passed to the `Parse()` method. Again the `Parse()` method returns a resulting value. If we wish to save this for later processing, it needs to be stored in a variable (`age` in this case).

This example can actually be written a bit more compact. The value that is returned by the `Console.ReadLine()` can actually be passed to the `Int32.Parse()` method directly. This makes the code shorter and it is perfectly possible as the string value is not required anymore after the conversion.

```csharp{2}
Console.Write("Please enter your age: ");
int age = Int32.Parse(Console.ReadLine());

Console.WriteLine("How interesting that you are " + age + " years young.");
```

Make sure you understand the previous code example before continueing. If not, read it a couple of times or execute it in debug in Visual Studio.

## Requesting a Double

Requesting floating-point numbers from the user is very similar to requesting integral values. Instead of using the `Parse` method of `Int32`, one can use the `Parse` method of `Double`.

```csharp
Console.Write("Please enter your height in meters: ");
double height = Double.Parse(Console.ReadLine());

Console.WriteLine("You are quitte tall with a height of " + height + "m.");
```

::: warning 🚫 Double and double
Note that `double` is the syntax for creating a simple data type that is used to declare variables of a floating-point type. `Double` (actually `System.Double`) is a complexer struct type. However, `double` is actually an alias for `System.Double`, so it would actually be legal to use `double.Parse()` but almost no developer does this. More on this later.
:::
