using System;
using System.Collections.Generic;
using System.IO;

namespace SortAndSearch
{
    class Program
    {
        static List<string> students = new List<string>();
        static void Main(string[] args)
        {
           sortStudentandDisplay();
            searchStudentByName();
        }

        public static void sortStudentandDisplay()
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\SortAndSearch\\StudentData.txt";
          
            if (File.Exists(filename))
            {
                Console.WriteLine(filename + " exists");
                string[] lines = File.ReadAllLines(filename);
                foreach (string s in lines)
                {
                    students.Add(s);
                    Console.WriteLine(s);
                }
                students.Sort();
                Console.WriteLine("Sorted Student List:");
                foreach (string s in students)
                {
                   Console.WriteLine(s);
                }

            }
            else
                Console.WriteLine(filename + " does not exist");
        }

        public static void searchStudentByName()
        {
            Console.WriteLine(""); 
            Console.WriteLine("Enter Student Name to get More Info:");
            var name = Console.ReadLine();
            var student=students.Find(x => x.StartsWith(name));
            if (!String.IsNullOrEmpty(student))
            {
                var details = student.Split(',');
                Console.WriteLine($"Student Name is {details[0]}");
                Console.WriteLine($"Student Age is {details[1]}");

            }
            else
                Console.WriteLine("Sudent Not Found");

        }
    }
}

