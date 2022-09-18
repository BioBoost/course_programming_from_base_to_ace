using System;
using StudentLibrary;

namespace RegisterApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to VIVES registration app.");

            Console.Write("Please enter your firstname: ");
            string firstname = Console.ReadLine();

            Console.Write("Please enter your lastname: ");
            string lastname = Console.ReadLine();

            Student newStudent = new Student(firstname, lastname);

            Console.WriteLine("Welcome VIVES University College of Applied Sciences");
            Console.WriteLine($"Your personal email address is {newStudent.Email()}");
        }
    }
}