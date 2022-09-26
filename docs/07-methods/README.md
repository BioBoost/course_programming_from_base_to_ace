---
description: Defining custom methods is a daily job of any programmer. This chapter introduces the basics of methods.
title: 07 - Methods
---

# Chapter 07 - Methods

A method (or function in that matter) is a **named block of code** that **performs a single specific task**.

Methods allow us to **group blocks of code** together and **separate** them from the rest of our code. Using the name of the method we can then ask the compiler/interpreter to execute the code inside of it. This is also known as **calling the method**. Why would we want to do this? Several reasons:

* Abstract away functionality inside of a named construct. This makes code more readable and maintainable, that is if we name the methods correctly and clearly. Methods also allow us to split up complex tasks in simpler tasks.
* Methods also allow us to group blocks of code together as a single entity and name it so we can use from anywhere inside of our code. This also counteracts **code duplication** which is bad because it easily leads to bugs and what is called spaghetti code (a mess of code).

::: tip Method
A method (or function in that matter) is a **named block of code** that **performs a single specific task**.
:::

Ideally a method should **do only one thing** (it has  a **single responsibility**), for example:

* calculate the square from a number
* display an array
* calculate the area of a shape
* determine the minimal of two numbers
* make the sum of an array of numbers
* ...

In other words, methods allow us to give more meaning to a block of coherent code that performs a single task - **single responsibility** - and it allows us to call it from different places in our code, **reducing code duplication**.

A method can be though of as a building block of your application that performs some sort of processing.

* It can take input data to use inside the method **via arguments**
* It can produce an output value which the caller of the method can use

![Method as a Building Block](./img/method_processing.png)

::: tip Functions, Procedures and Methods
Some programmers also talk about functions and procedures. Functions are blocks of named code that can be called on their own, without an object. Functions and procedures are part of functional programming languages such as C. In those languages a procedure is a function that does not return a result value. In object oriented programming this distinction is not made and they are all called methods. Of course some object oriented languages allow you to define methods that are not part of a class, in which case the name function can be considered correct.
:::

Almost every programming language out there has built-in methods and functions provided by the language itself. Luckily as a programmer, one can also write their own methods. This chapter will introduce the basics for creating your own methods. Later on in this course we'll come back to the subject in more detail.

## Calling methods

Calling a method is not that hard. Actually you have already called a couple of methods without realizing it. To call a method you need to state it's name, supply the correct arguments and place parentheses `()` around those arguments. Last but not least you need to place a semicolon `;` at the end.

The next sections take a closer look at some of the method calls that you already performed.

### The WriteLine method of Console

Let us take a look at the `WriteLine` method you have been calling for some time.

```csharp
Console.WriteLine("Hello and welcome to C#.");
```

The actual **name of the method** here is `WriteLine`. The use of `Console` is less important for the moment.

The `WriteLine` method takes a single **argument** (data it takes from outside of the method), namely a `String` that will be printed to the terminal. This is information is passed to the method when it is called. To be able to print something to the terminal, the `WriteLine` must know what to print. It cannot know that beforehand, so it allows the user of the method to pass in that information. You can think of an argument as information you pass from the outside into the method so it can be used inside of the method.

### The ReadLine method of Console

Another example is the `Console` method `ReadLine()` that allows us to grab the input from the user. An example is shown below.

```csharp
Console.Write("Please enter your name: ");
string name = Console.ReadLine();
```

The `ReadLine()` method **does not take any arguments**. It does however return a value of type `string`. This can be assigned to a variable so it can be used later in our code.

Do note that while the method requires no arguments, it is mandatory to place empty parentheses behind its name. This makes it clear that it is a method that is called.

### The ToInt32() method of Convert

An example of a method that combines both input data via arguments and outputting a result is the `ToInt32()` method of `Convert`. This methods requires the caller to supply a `string` containing a text representation of a number and it return an integer value representing the value inside of the string.

```csharp
string ageText = "12";
int age = Convert.ToInt32(ageText);
```

## General Form of a Method

Before one can create custom methods, one needs to know the syntax of a method definition. The general structure of a method in C# looks as follows

```csharp
<access_modifier> [static] <return_data_type> NameOfMethod(<parameters>) {
   // Code inside method (this is called the body)

   // return <value> or do not return a value
   // in which case the <return_data_type> is void
}
```

* **access_modifier** - The access modifier defines from where the method is visible and therefore from what parts of your code it can be called.
  
  * `public`: a public method can be called from anywhere in your application
  * `private`: a private method can only be called in the class where it is defined. Later we'll come back to the subject of classes. For the moment you can keep in mind that a private method is only available in the file you defined it in.
  * If no access modifier is specified, C# defaults to `private`.

* `[static]`: a method can be defined as being `static` or not. In case it is defined as being `static`, it can be called without the need for creating an object from the class it belongs to. For the moment you should make your methods `static`, otherwise you will not be able to call them from your `Main()` method.

::: warning Main()
Note that the `Main()`method also has the `static` keyword applied to itself.
:::

* **return_data_type** - A method **may or may not return a value** (a single result value of the method). This can be any of the data types used for variables (`int`, `double`, `char`, string and any other type available). If no value is returned, the *return_data_type* should be set to `void`.

* **NameOfMethod** - This is the name of the method. Make it **clear and informative**. In C# methods are always named using **Pascal case** - each word always starts with an uppercase letter.

* **parameters** - Arguments (also called parameters) are **similar to the variables** we have been using.
  * They allow the code that is calling the method to pass data to the method. The arguments can then be used as variables and their usage is **contained to the method itself**.
  * The different arguments in the parameter list are separated from each other using a comma `,`. Both a type and a name need to be specified **for every parameter**.
  * Arguments are optional, methods may require zero arguments.
  * The argument variables only exist within the scope of the method itself (between the curly braces of the method).

* The parenthesis `()` **are mandatory** even if no arguments are defined.

* **The method body** - The part from the starting curly brace `{` till the closing curly brace `}` is called the body of the method. You should place the code statements that execute the task of the method between these two curly braces.

* The name of the method and the parameter list are together called the **signature** of the method.

Remember the `Main()` method where most of our code is placed. Let us take a look at it.

```csharp
class Program
{
  static void Main(string[] args)
  {
    Console.WriteLine("Hello World!");
  }
}
```

First of all note the placement of the method inside of the curly braces of the class `Program`.

The name of this method is `Main` and it is `private` (because it is not explicitly set as `public`). It also takes an array of strings named `args` as argument - but more on arrays later. These are actually parameters that you can pass to the method when you start your application. Notice that the main method does not return a value and therefore has its return type set to `void`. The main method is also declared `static`.

The main method is what is called the **entry point** of your application. It is the first method that is executed when you start your application.

## Creating Custom Methods

A method should be kept **as small as possible** to **do a single task**. Often it is stated that a perfect method has no more than 5 lines of code. The shorter the method, the easier it will be to understand what it is doing. However, as a beginning programmer this will be hard to achieve.

A method will most often use some sort of input data, do some processing on it and return a result based on it's findings. The input data is often supplied using arguments passed to the method when it is called.

![Methods](./img/method_processing.png)

As stated before, arguments are very similar to a variable you create inside your main. They require both a **type** and a **name**. If you wish your method to take multiple arguments, you can separate them using a comma `,`. Important to note is that every argument needs a type, even if multiple arguments have the same type.

### Where to place your own methods

For the moment there is only one place you can place custom methods and that is inside the class `Program`, where the `Main()` method is also defined.

All methods need to be placed between the curly braces `{}` of the class itself, at the same level as the `Main()` method. Make sure not to place methods inside the body of other methods.

The following code snippets show some examples of basic custom methods and how to call them.

```csharp{8-11,15}
using System;

namespace HelloWorld
{
  class Program
  {
    // Our own custom method SayHello()
    static void SayHello()
    {
      Console.WriteLine("Hello there.");
    }

    static void Main(string[] args)
    {
      SayHello();
    }
  }
}
```

`SayHello()` is a simple method that prints a welcome text to the terminal. It can be called inside of the main by specifiying its name followed by empty parentheses `()`.

Is does not matter if you place methods before or after the `Main()` method. The order of the methods has no influence. You can place them in any order inside the class body.

Let's add another method to this that says farewell to the user.

```csharp{16,20-23}
using System;

namespace HelloWorld
{
  class Program
  {
    // Our own custom method SayHello()
    static void SayHello()
    {
      Console.WriteLine("Hello there.");
    }

    static void Main(string[] args)
    {
      SayHello();
      SayBye();
    }

    // Another custom method SayBye()
    static void SayBye()
    {
      Console.WriteLine("ByeBye. See u next time.");
    }
  }
}
```

The next **example is wrong**, the method is inside the body of another method.

```csharp{9-12}
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      static void WrongPlace()
      {
        Console.WriteLine("Where not to place methods ...");
      }
    }
  }
}
```

### Naming your Methods

Giving your methods a **clear name** is very important. Methods that have names like *doSomething*, *process*, *count*, ... have no meaning at all. A method should always have a name that **says exactly what it is doing**. Do not be afraid of longer method names (do however be sensible about it).

There are some rules that are followed by all C# programmers concerning naming things. For methods the **rules** are:

* use **Pascal casing** - each word starts with an uppercase letter
* don't place spaces, underscores or other special characters between words

Some good examples are (each is preceded with a variable containing a reference to an object):

* `Sum()`
* `IsPlayerAlive()`
* `OutputResults()`
* `RequestUserName()`
* `DetermineCircleRadius()`
* ...

Method names should also **reflect the result that they generate**. For example `IsPlayerAlive()` suggests that it returns a `boolean`, `DetermineCircleRadius()` suggests that it returns a `double`. That does however not mean that you should name methods as `GetRadiusAsDouble()`. Bad idea.

## Methods without arguments or return value

The perfect example of a method that does not return a value and takes no input is a method that prints something to to the terminal. For example a welcome message or instructions on how to use the application.

```csharp
using System;

namespace MessageOfTheDay
{
  class Program
  {
    // Method without return value and no arguments
    static void PrintWelcome()
    {
      Console.WriteLine("Hello and Welcome to Message of the Day.");
      Console.WriteLine("Everytime you run this program");
      Console.WriteLine("I will output a funny message to the terminal.");
      Console.WriteLine("Ready? Here we go ...");
    }

    static void Main(string[] args)
    {
      PrintWelcome();
    }
  }
}
```

Notice that the return type is set to `void` - because the method actually does not return anything. It just prints some text to the terminal. Also notice that no arguments are required as the method does not need any data from outside of the method.

Calling this method is as simple as stating its name followed by empty parenthese `()`.

## Methods without arguments that return a value

Most methods will have some sort of result that they want to share with the code that made the call to the method. It is stated that the method **returns a value**. This is achieved using the `return` keyword in C# followed by a value or the name of a variable or even attribute.

Methods can return a value without taking arguments. A simple example might be a method that requests input from the user, for example his/her age.

::: tip Why put this inside a method
There are several reasons why we would put even these two lines of code in a method. First of all is the fact that it makes our Main() code cleaner and more understandable. Second of all is the fact that this will probable expand with some checks for validity. This will turn the method into a nice piece of code that has a single responsibility: *Request the age of the user*.
:::

There are three things that need to be taken into here:

1. The method should return the age of the user. For this it can use the `return` keyword.
2. The return type in the signature of the method needs to be `int` and not `void` since the method is returning a value of type `int`.
3. When the method is called, the return value can be caught by the calling code for further processing. In this case it can be stored inside a new variable (called `userAge` in case of the following code example).

```csharp{9,15,20}
using System;

namespace AgeApp
{
  class Program
  {
    // Method without arguments
    // Method does return int - age of user
    static int RequestAgeFromUser()
    {
      Console.Write("Please enter your age: ");
      int age = Convert.ToInt32(Console.ReadLine());

      // Return the age of the user
      return age;
    }

    static void Main(string[] args)
    {
      int userAge = RequestAgeFromUser();

      // ....
    }
  }
}
```

If the method is called, the code inside of is executed. Once the return statement in a method is encountered, the result is returned from the method and control jumps back to the place where the method is originally called.

## Methods that take arguments and return nothing

Almost all methods do some sort of processing based on data. This data can come from different places as we'll see later in this course. One option is to provide a method with external data **by passing arguments/parameters to the method**. Arguments are variables that are initialized with values when the method is called from somewhere else. The data is passed inside these arguments and made available for use inside the method.

Arguments can be defined between the parentheses of the method signature. For each required argument a datatype and name for the argument is required. Multiple arguments can be seperated by placing a comma between them.

Take for example the method `CalculateSum()` in the following code snippet that calculates the sum of two values: `first` and `second`. Both are arguments and of the type `int`. The result in this case is printed to the terminal.

```csharp
using System;

namespace SumApp
{
  class Program
  {
    // Method prints sum to the terminal of two numbers
    // Numbers are provided as arguments
    // Nothing is returned
    static void CalculateSum(int first, int second)
    {
      int sum = first + second;
      Console.WriteLine($"The sum of {first} and" +
        $" {second} is {sum}.");
    }

    static void Main(string[] args)
    {
      // Calculate sum of literals
      CalculateSum(5, 12);

      // Calculate sum of variables
      int number1 = 55;
      int number2 = 66;
      CalculateSum(number1, number2);
    }
  }
}
```

::: codeoutput
```
The sum of 5 and 12 is 17.
The sum of 55 and 66 is 121.
```
:::

As can be seen from the source code, one can pass both literal values as well as other variables to a method. Do note that you have to pass them in the **correct order** and make sure they are of the **correct type**, otherwise your program will not run.

## Methods that take arguments and return a result

Last but not least methods can take arguments and return a value. The example snippet that follows shows a method `Square()` that calculates the square of a number. The input data is a number of type `int` and the return value would be `number * number` also of type `int`.

```csharp
using System;

namespace MathApp
{
    class Program
    {
        // Method squares the given number
        // and returns the result
        static int Square(int value)
        {
            return value * value;
        }

        static void Main(string[] args)
        {
            // Call the method Square to square the number
            int number = 12;
            int square = Square(number);

            Console.WriteLine($"The result of {number} squared is {square}");
        }
    }
}

```

Notice that no variable is created to hold the value of `number * number` inside the method. Instead, the value is immediately returned. While it would not have been wrong to create a temporary variable to hold the result, it would make the code longer than needed.

::: codeoutput
```
The result of 12 squared is 144
```
:::
