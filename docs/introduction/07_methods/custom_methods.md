### Methods that do not return a value and take no input

The perfect example of a method that does not return a value and takes no input is a method that prints something to to the terminal. For example a welcome message or instructions on how to use the application.

```java
public class Demo {
  // Method without return value and no arguments
  public void printWelcome() {
    System.out.println("Hello and Welcome to this program.");
    System.out.println("Here we print a simple message stating the purpose of the program.");
    System.out.println("This application is made by none other than mister Java Himself.");
  }
}
```

Notice that the return type is set to `void` - because the method actually does not return anything. It just prints some text to the terminal. Also notice that no arguments are required as the method does not need any data from outside of the method.

Calling this method inside your main would result in the following code:

```java
public static void main(String[] args) {
  Demo demo = new Demo();
  demo.printWelcome();
}
```

First an object of the class `Demo` is created. After which the method can be called on the object.

#### Turning the LightBulb on and off

Returning to the `LightBulb` class, this can also be used to change the internal state of a class, in other words to turn the light on or off. More importantly, by adding `on()` and `off()` methods to the `LightBulb` class, the internal state of the class can be made `private`. This will make sure that we adhere to the data hiding principle.

So the previous implementation:

```java
public class LightBulb {
  // Attributes (instance variables) of the class
  public boolean state = false;
}
```

can be changed to:

```java
public class LightBulb {
  // The methods of our class
  public void on() {
    state = true;
  }

  public void off() {
    state = false;
  }

  // Attributes (instance variables) of the class
  private boolean state = false;
}
```

The attributes have been moved to the bottom of the class. It is common practice to place the things that the user of the requires first at the top of the class. Since the user of our `LightBulb` class should not interact with the internal `state` directly, it is placed at the bottom.

To use these methods, first an object needs to be instantiated upon which the methods can be called. The methods do not require any external data so they do not take any arguments. The parentheses can therefore be left empty.

An example application might be:

```java
public static void main(String[] args) {
  LightBulb kitchen = new LightBulb();
  kitchen.on();
  kitchen.off();
}
```

Now how can one check if the light is on or off. The `state` cannot be accessed directly from the main. The most elegant solution that can be provisioned at the moment is to add a method that prints the current state of the light to the terminal.

```java
public class LightBulb {
  // The methods of our class
  public void on() {
    state = true;
  }

  public void off() {
    state = false;
  }

  public void print() {
    if (state) {
      System.out.println("The light is turned on");
    } else {
      System.out.println("The light is turned off");
    }
  }

  // Attributes (instance variables) of the class
  private boolean state = false;
}
```

Take note on how the `state` attribute can be accessed inside the `print()` method. This is because the method is part of the class and can therefore access all the attributes of the `LightBulb`, even the private ones.

As a demo:

```java
public static void main(String[] args) {
  LightBulb kitchen = new LightBulb();
  kitchen.print();
  kitchen.on();
  kitchen.print();
  kitchen.off();
  kitchen.print();
}
```

Which outputs:

```text
The light is turned off
The light is turned on
The light is turned off
```

The `on()` and `off()` methods are an elegant way of letting us control the internal state of the `LightBulb`. The code in main is also much cleaner. All behavior of the LightBulb is now nicely available through the `on()` and `off()` methods.

At the moment the `LightBulb` class can be visualized in UML using the following class diagram:

![UML Class Diagram of LightBulb](img/lightbulb_on_off.png)

Notice how the attribute prefix has been changed to `-` to denote that the attribute has become `private.

### Methods that return a value but take no input

Most methods will have some sort of result that they want to share with the code that made the call to the method. It is stated that the method **returns a value**. This is achieved using the `return` keyword in Java followed by a value or the name of a variable or attribute.

Methods can return a value without taking arguments. The most simple example would be the previous `print()` method of the class `LightBulb`. However instead of printing the message to the screen we could return it as a value allowing the code that calls the method to decide what to do with it (you could for example write it to a file, send it to a printer or put it into an html file).

```java
public class LightBulb {
  // The methods of our class
  public void on() {
    state = true;
  }

  public void off() {
    state = false;
  }

  public String getString() {
    if (state) {
      return "The light is turned on";
    } else {
      return "The light is turned off";
    }
  }

  // Attributes (instance variables) of the class
  private boolean state = false;
}
```

Important to note is that the return type of the method needs to be changed from `void` to `String`.

Once the interpreter encounters a return statement it returns the result from the method and jumps back to the place where the method is originally called. This example also shows that it is perfectly legal to have multiple return statements.

The name of the method has also been changed from `print` to `getString`. This because the method does something else compared to the previous one, so it requires to be renamed.

Calling this method inside your main would result in the following code:

```java
public static void main(String[] args) {
  // With a variable to store the return value of the method
  LightBulb kitchen = new LightBulb();
  String result = kitchen.getString();
  System.out.println(result);

  // Or without a variable
  System.out.println(kitchen.getString());
}
```

Two ways to print the return value of the `getString()` are shown in the code above. A first stores the return value inside a variable and then prints the value of the variable. A second option consists of immediately passing the return value of `getString()` to the `println` method. Either way works. It is up to you as a developer to decide which of these two options to use.

> **WARNING** - **Don't print inside Classes**
>
> Unless you have a good reason, it's most of the time a bad idea to place `System.out.println()` statements inside your custom classes. This limits their use. What if the user of your class wanted to format the output differently. If you decide to send it to the terminal directly instead of returning the actual String, you are limiting the capabilities of your classes.

#### The toString method

In Java every object that is created automatically gets a number of methods that are provided by the Java language. One of these methods is the `toString()` method which is **implicitly called when an object reference is placed inside a String context** as for example:

```java
public static void main(String[] args) {
  LightBulb kitchen = new LightBulb();

  // Here an implicit call to kitchen.toString() is made by Java
  System.out.println(kitchen);

  // You can explicitly call the toString() method
  System.out.println(kitchen.toString());
}
```

The Java `toString()` method is used when we need a `String` representation of an object. It is defined in the special class `Object`.

For some classes that are part of the Java library, this method generates a sensible result. However custom classes created by ourselves return a cryptic text consisting of the name of the class and a hashed value of its internal state as shown below.

```text
exampleprogram.LightBulb@15db9742
exampleprogram.LightBulb@15db9742
```

The result should be a concise but informative representation that is easy for a person to read. It is recommended that all classes override this method and add their own implementation.

This can be achieved by adding the following method to your class (the method signature must be exact and the `override` annotation must also be present):

```java
@Override
public String toString() {
    return "Some String representation of your object";
}
```

Of course the return statement `return "Some String representation of your object";` must be changed according to the representation you wish to return.

For the `LightBulb` class we can actually refactor the `getString()` method to the `toString()` method. This will remove the need for the explicit method call in main.

For example:

```java
public class LightBulb {
  // The methods of our class
  public void on() {
    state = true;
  }

  public void off() {
    state = false;
  }

  @Override
  public String toString() {
    if (state) {
      return "The light is turned on";
    } else {
      return "The light is turned off";
    }
  }

  // Attributes (instance variables) of the class
  private boolean state = false;
}
```

This allows our main to be refactored to:

```java
public static void main(String[] args) {
    LightBulb kitchen = new LightBulb();
    System.out.println(kitchen);
    kitchen.on();         // Turn the light on
    System.out.println(kitchen);
    kitchen.off();         // Turn the light off
    System.out.println(kitchen);
}
```

Resulting in the following UML class diagram:

![Adding a toString method to LightBulb](img/lightbulb_tostring.png)

Notice how the return datatype of the `toString()` method is also specified in the UML diagram, in the same way as an attribute, by placing a colon `:` after the method and then stating the datatype (`String` in this case).

#### Getters

Methods that take no arguments and return a value are often used to provide read access to the internal state of objects. In this case these methods are often called **getters** while prefixed with `get....()`.

Take for example the class `Point`. If its internal coordinates are kept private, they are inaccessible from the main. The `toString()` method is handy to print its coordinates to the terminal, but not really for further processing.

It would be much more convenient if the coordinates were accessible via two methods: `getX()` and `getY()`. This is the common practice.

```java
class Point {

  public void print() {
    System.out.println("[" + x + ", " + y + "]");
  }

  public double getX() {
    return x;
  }

  public double getY() {
    return y;
  }

  // Both x and y are attributes of the class Point
  private double x = 0;
  private double y = 0;
}
```

While the implementation of these methods is simplistic at most, they do provide access to the private internal values.

### Methods that take arguments and return nothing

Almost all methods do some sort of processing based on data. This data can be the attributes encapsulated in the class itself or it can be external information that is **passed via arguments** to the method.

This type of methods are often used to change the internal state of objects. They can be used to safeguard the attributes for invalid values, while still allowing the user of the class to change them. In this context these methods are called **setters**. Their name most often starts with the prefix `set...()`, while not mandatory.

Take for example the `setName()` method shown below of the class `Teacher`. It takes two pieces of external information via arguments:

* the `firstname` of the teacher (as a String)
* the `lastname` of the teacher (as a String)

This information is then assigned to the internal attributes.

```java
public class Teacher {

  public void setName(String firstname, String lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  @Override
  public String toString() {
    return firstname + " " + lastname;
  }

  // Attributes
  private String firstname;
  private String lastname;
}
```

The implementation of the `setName()` method might look a bit strange in the beginning, but its less confusing than you think. The problem is that both the arguments and attributes have the same name. So to store the value of the arguments in the attributes one cannot simply write `firstname = firstname`. This would actually assign the argument to itself.

To make it clear to Java that you wish to assign the argument to the attribute, you need to explicitly select the attribute with `this.firstname`. `this` is a special keyword that is available inside a method of class and it holds a reference to the object on which the method is called.

One could give the arguments different names, but this is considered **bad practice**. It denotes the same information, so it should not be given a different name.

By adding a simple `toString()` method one can easily print the full name of a teacher.

Now the private attributes of the Teacher objects can be altered using the `setName()` method as shown below:

```java
public static void main(String[] args) {
  Teacher mark = new Teacher();
  mark.setName("Mark", "Hennep");
  System.out.println(mark);
}
```

As can be seen from the example code above, you can pass values to the method. Do note that you have to pass them in the **correct order** and make sure they are of the **correct type**, otherwise your program will not run.

Consider the following example where a private method is added to the `Teacher` class that generates a mail address for the teacher. Since the method is private it cannot be called from the main. However, it can be called from the `setName()` method. By automatically calling this method internally, we do not burden the user with the task.

```java
public class Teacher {

  public void setName(String firstname, String lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    generateEmail();
  }

  @Override
  public String toString() {
    return firstname + " " + lastname + " <" + email + ">";
  }

  // A private method can only be used inside the class
  private void generateEmail() {
    this.email = firstname + "." + lastname + "@vives.be";
  }

  // Attributes
  private String firstname;
  private String lastname;
  private String email;
}
```

Which would output:

```text
Mark Hennep <Mark.Hennep@vives.be>
```

Private methods are often omitted from UML class diagrams as they are cannot be used from outside of the class anyways. However, it's not wrong to include them if needed.

![A Teacher Class](./img/teacher_class.png)

Arguments of methods are placed between the parentheses following the same conventions of attributes, namely the *name* followed by a colon `:` and a *datatype*.

#### A Dimmable LedLight

Consider an advanced version of the previous `LightBulb` class, called `LedLight`. While still being a sort of light, this `LedLight` does not have an on/off state, but it has a brightness value.

The `LedLight` also has `on()` and `off()` methods which turn it full on or complete off respectively. To dim the light, the `dim()` method can be used. This method takes an integer value which represents the percentage used to determine the actual brightness.

```java
public class LedLight {

  public void on() {
    brightness = 100;
  }

  public void off() {
    brightness = 0;
  }

  public void dim(int percentage) {
    if (percentage < 0) {
      percentage = 0;
    } else if (percentage > 100) {
      percentage = 100;
    }

    brightness = percentage;
  }

  @Override
  public String toString() {
    if (brightness == 0) {
      return "Currently the light is turned off";
    } else if (brightness == 100) {
      return  "Currently the light is turned on";
    } else {
      return  "Currently the light is dimmed to a brightness of " + brightness;
    }
  }

  // Attributes (instance variables) of the class
  private int brightness = 0;
}
```

This is where the power of data hiding is shown again. Notice how we first check if the brightness percentage is contained within the valid range. If not we limit the brightness to its extreme's.

These safeguards can only be placed when access to internal state is regulated via methods. It makes the objects more resilient to errors and also more user-friendly.

Note that the names of the arguments have no relation with the variables in the code that calls the method. They are local to the method itself. `percentage` is a local variable (actually an argument) inside the `dim()` method. It only exists within the body of the dim method and can be changed and manipulated as required without actually changing the variable/value that was passed to the method in the calling code. This is because a copy of the actual value is made into the argument.
 
This only works as-is because percentage is of a primitive datatype. The same is not true when passing objects to methods. In this case the object is not copied but the reference to the original object is. That means that the method to which the object reference is passed, has access to the original object and not to a copy of it. More on this later.

Check out the following example which allows the `LedLight` to be dimmed:

```java
public static void main(String[] args) {
    LedLight lightLivingRoom = new LedLight();
    System.out.println(lightLivingRoom);
    lightLivingRoom.dim(50);          // Turn the light on for 50%
    System.out.println(lightLivingRoom);
    lightLivingRoom.dim(500);         // Turn the light on for 500% !!!!!
    System.out.println(lightLivingRoom);
    lightLivingRoom.off();            // Turn the light off
    System.out.println(lightLivingRoom);
}
```

Which would output:

```text
Currently the light is turned off
Currently the light is dimmed to a brightness of 50
Currently the light is turned on
Currently the light is turned off
```

When the percentage exceeds the valid range, the brightness is set to its legal maximum (100). This results in the output text stating that bulb is turned on.

### Methods that take arguments and return a result

Last but not least methods can take arguments and return a value. The example code below shows a method `square()` of a class `MathHelper` that calculates the square of a number.  The input data is a number of type `int` and the return value would be `number * number` also of type `int`.

```java
public class MathHelper {
  public int square(int number) {
    return number * number;
  }
}
```

Notice that no variable is created to hold the value of `number * number` inside the method. Instead, the value is immediately returned. While it would not have been wrong to create a temporary variable to hold the result, it would make the code longer than needed.

Calling this method inside your main would result in the following code:

```java
public static void main(String[] args) {
  MathHelper helper = new MathHelper();
  System.out.println("The square of 5 is " + helper.square(5));
}
```
