using System;
using System.Collections.Generic;
using System.Linq;

namespace SchoolData
{
    public class Person
    {
        public string Name { get; set; }
        public string Classs { get; set; }
        public string Section { get; set; }

        public Person(string name, string classs, string section)
        {
            Name = name;
            Classs = classs;
            Section = section;

        }

    }

    public class Student : Person
    {
        public Student(string name, string classs, string section):base(name, classs, section)
        {}
    }


    public class Teacher : Person
    {

        public Teacher(string name, string classs, string section) : base(name, classs, section)
        {}
    }

    public class Subject
    {
        public string name { get; set; }
        public string subjectCode { get; set; }
        public Teacher teacher { get; set; }

        public Subject(string name, string subjectCode, Teacher teacher)
        {
            this.name = name;
            this.subjectCode = subjectCode;
            this.teacher = teacher;
        }
  

    }

    public static class SchoolInfo
    {
        public static List<Student> populate_students()
        {
            List<Student> studentList = new List<Student> { new Student("Olivia John", "KG", "A"),
                                                            new Student("Latha K", "1", "B"),
                                                            new Student("Kim Carter", "2", "A"),
                                                            new Student("SriLa Ker", "1", "B"),
                                                            new Student("Deep Chopr", "2", "A"),
                                                            new Student("Hayet Ter", "1", "B"),
                                                            new Student("Sari CC", "2", "A")};

            return studentList;
        }

        public static void displayStudents(string classs)
        {
            List<Student> studentList = populate_students();
            var filteredStudents = studentList.Where(x => x.Classs.Equals(classs)).ToList();
            foreach (Student s in filteredStudents)
            {
                Console.WriteLine(s.Name + " studies in class:" + s.Classs + " and section is" + s.Section);
            }
        }

        public static List<Teacher> populate_teachers()
        {
            List<Teacher> teacherList = new List<Teacher> { new Teacher("Alexa Robb", "KG", "A"),
                                                            new Teacher("Qually Ken", "1", "B"),
                                                            new Teacher("Saran Shiv", "2", "A") };

            return teacherList;
        }

        public static List<Subject> populate_Subjects()
        {
            List<Subject> subjectList = new List<Subject>();
            subjectList.Add(new Subject("Math", "MAT", new Teacher("Alexa Robb", "KG", "A")));
            subjectList.Add(new Subject("Engligh", "ENG", new Teacher("Qually Ken", "1", "B")));
            subjectList.Add(new Subject("Science", "SCI", new Teacher("Alexa Robb", "KG", "A")));
            return subjectList;
        }

        public static void displaySubjects(string teacher)
        {
            List<Subject> subjectList = populate_Subjects();
            var filteredsubjects = subjectList.Where(x => x.teacher.Name.Equals(teacher)).ToList();
            foreach (Subject s in filteredsubjects)
            {
                Console.WriteLine("Subject "+s.name + " With Code:" + s.subjectCode + " is taught by" + s.teacher.Name);
            }

        }

    }

    class Program
    {
        
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Grade to get students details:");
            var grade = Console.ReadLine();
            SchoolInfo.displayStudents(grade);


            Console.WriteLine("Enter teacher name to dispaly subjects that he/she handles:");
            var teacher = Console.ReadLine();
            SchoolInfo.displaySubjects(teacher);


        }
    }

    
}
