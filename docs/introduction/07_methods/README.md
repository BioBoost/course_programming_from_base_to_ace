---
description: Defining custom methods is a daily job of any programmer. This chapter introduces the basics of methods.
title: 07 - Methods
---

# Chapter 07 - Methods

Methods allow us to **group blocks of code** together and **separate** them from the rest of our code. Using the name of the method we can then ask the compiler/interpreter to execute the code inside of it. This is also known as **calling the method**. Why would we want to do this? Several reasons:

* Methods allow us to split up complex tasks in simpler tasks. It **makes our code more clear** to the reader/developer of it, if we name the methods correctly and clearly.
* Methods also allow us to group blocks of code together as a single entity and name it so we can use from anywhere inside of our code. This also counteracts **code duplication** which is bad because it easily leads to bugs and what is called spaghetti code (a mess of code).

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
