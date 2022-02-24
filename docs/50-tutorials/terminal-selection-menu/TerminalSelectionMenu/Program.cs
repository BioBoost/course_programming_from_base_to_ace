using System;

namespace TerminalSelectionMenu
{
    class Program
    {
        static void Main(string[] args)
        {
            // Let's create an instance of the class menu with a certain text
            Menu menu = new Menu("Please select your favorite food from the options.");

            // Add possible options to the menu
            menu.AddItem("Spaghetti");
            menu.AddItem("Hamburgers");
            menu.AddItem("Fries");
            menu.AddItem("Pizza");

            Console.WriteLine(menu);        // Make sure to show menu

            ConsoleKey key;
            do
            {
                key = Console.ReadKey().Key;

                if (key == ConsoleKey.UpArrow)
                {
                    menu.Previous();
                    Console.Clear();
                    Console.WriteLine(menu);
                }
                else if (key == ConsoleKey.DownArrow)
                {
                    menu.Next();
                    Console.Clear();
                    Console.WriteLine(menu);
                }

            } while (key != ConsoleKey.Enter);

            Console.WriteLine($"\nMmmm {menu.GetSelectedItem()}, a very good choice!");
        }
    }
}
