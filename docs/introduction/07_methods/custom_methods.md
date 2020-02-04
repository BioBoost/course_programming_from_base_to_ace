


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
