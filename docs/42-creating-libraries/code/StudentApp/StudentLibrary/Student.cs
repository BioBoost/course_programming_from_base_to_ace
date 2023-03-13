namespace StudentLibrary
{
    public class Student
    {
        public Student(string firstname, string lastname)
        {
            Firstname = firstname;
            Lastname = lastname;
        }

        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public string Email()
        {
            return $"{Firstname}.{Lastname}@student.vives.be";
        }
    }
}