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

Before one can create custom methods, its required to know the syntax of a method definition. The general structure of a method in C# looks as follows

```csharp
<access_modifier> [static] <return_data_type> NameOfTheMethod(<list_of_parameters>) {
   // Code inside method (this is called the body)
   // return <value> or do not return a value in which case the <return_data_type> is void
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

* **nameOfTheMethod** - This is the name of the method. Make it **clear and informative**. In C# methods are always named using **Pascal case** - each word always starts with an uppercase letter.

* **list_of_parameters** - Arguments (also called parameters) are **similar to the variables** we have been using.
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
