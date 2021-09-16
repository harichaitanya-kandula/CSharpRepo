using System;
using System.IO;

namespace Phase1Section3._14
{
    class Program
    {
        static void Main(string[] args)
        {
            readStudentInfo();
        }

        public static void readStudentInfo()
        {
          
            string filename = "C:\\FSDTraining\\CSharpRepo\\Phase1Section3.14\\StudentData.txt";

            if (File.Exists(filename))
            {
                Console.WriteLine(filename + " exists");
                string[] lines = File.ReadAllLines(filename);
                foreach (string s in lines)
                {
                    Console.WriteLine(s);
                }

            }
            else
                Console.WriteLine(filename + " does not exist");
        }
    }

}
