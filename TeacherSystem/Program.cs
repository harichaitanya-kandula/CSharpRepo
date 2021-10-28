using System;
using System.Collections.Generic;
using System.IO;

namespace TeacherSystem
{
    public class Teacher
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Classs { get; set; }
        public string Section { get; set; }

        public Teacher(int id,string name, string classs, string section)
        {
            ID = id;
            Name = name;
            Classs = classs;
            Section = section;

        }
       
    }


    public static class TeacherSystem
    {
        public static void AddTeacher(Teacher teacher)
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";
            TextWriter tw = new StreamWriter(filename,true);
            // write a line of text to the file
            tw.WriteLine(teacher.ID+","+teacher.Name+","+teacher.Classs+","+teacher.Section);
            // close the stream
            tw.Close();
        }

        public static void FindTeacher(int id)
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";

            if (File.Exists(filename))
            {
                string[] teachers = File.ReadAllLines(filename);
                foreach (string teacher in teachers)
                {
                    if (teacher.Contains(id.ToString()))
                    {
                        Console.WriteLine(teacher);
                    }
                }

            }

        }

        public static void UpdateTeacher(int id)
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";

            if (File.Exists(filename))
            {
                string[] teachers = File.ReadAllLines(filename);
                foreach (string teacher in teachers)
                {
                    if (teacher.Contains(id.ToString()))
                    {
                        TeacherSystem.deleteTeacher(id);
                        TextWriter tw = new StreamWriter(filename, true);
                        // write a line of text to the file
                        tw.WriteLine(id + "," + "Tim Newman" + "," + "5" + "," + "C");
                        // close the stream
                        tw.Close();
                    }
                }
                Console.WriteLine("Uodated TeacherDetails with Id: " + id.ToString());

            }

        }

        public static void deleteTeacher(int id)
        {
            string fileIN = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";
            string fileOUT = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherDataTemp.txt";
            if (File.Exists(fileIN))
            {
                string[] data = File.ReadAllLines(fileIN);
                foreach (string line in data)
                {
                    if (!line.Contains(id.ToString()))
                    {
                        File.AppendAllText(fileOUT, line);
                        File.AppendAllText(fileOUT, "\n");
                    }
                    }
                File.Delete(fileIN);
                File.Move(fileOUT, fileIN);
                Console.WriteLine("Deleted TeacherDetails with Id: "+ id.ToString());
              
            }
                       
        }


        public static void GetAllTeachers()
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";

            if (File.Exists(filename))
            {
                string[] teachers = File.ReadAllLines(filename);
                foreach (string teacher in teachers)
                {
                   Console.WriteLine(teacher);
                }

            }

        }

        public static void SortTeachers()
        {
            string filename = "C:\\FSDTraining\\CSharpRepo\\TeacherSystem\\TeacherData.txt";

            if (File.Exists(filename))
            {
                string[] teachers = File.ReadAllLines(filename);
                List<string> newlist = new List<string>();
                foreach (string teacher in teachers)
                {
                    newlist.Add(teacher);
                }
                newlist.Sort();

                Console.WriteLine("\nSorted List");
                foreach (string teacher in newlist)
                {
                    Console.WriteLine(teacher);
                }

            }

        }


    }

    class Program
    {
        static void Main(string[] args)
        {
            //Adding Teacher Data
            TeacherSystem.AddTeacher(new Teacher(101, "Kelly Tom", "1", "B"));
            TeacherSystem.AddTeacher(new Teacher(102, "Tara Seth", "2", "B"));
            TeacherSystem.AddTeacher(new Teacher(103, "Hisha L", "3", "B"));
            TeacherSystem.AddTeacher(new Teacher(104, "Sharan TT", "4", "B"));
            TeacherSystem.AddTeacher(new Teacher(105, "Tim Tuck", "5", "B"));
            TeacherSystem.AddTeacher(new Teacher(106, "Kim Se", "6", "B"));
            TeacherSystem.AddTeacher(new Teacher(107, "Sherley Shah", "7", "B"));
            TeacherSystem.AddTeacher(new Teacher(108, "Harika T", "8", "B"));

            Console.WriteLine("\n\n ************TEACHERS SYSTEMS**************\n\n");
            //Find Teacher Data
            Console.WriteLine("Enter ID to get TeacherDetails:");
            var id = Console.ReadLine();
            TeacherSystem.FindTeacher(Convert.ToInt32(id));

            //Update Teacher Data
            Console.WriteLine("Enter ID to update TeacherDetails:");
            id = Console.ReadLine();
            TeacherSystem.UpdateTeacher(Convert.ToInt32(id));
            Console.WriteLine("Find TeacherDetails with After Update");
            TeacherSystem.FindTeacher(Convert.ToInt32(id));

            //Delete Teacher Data
            Console.WriteLine("Enter ID to delete TeacherDetails:");
            id = Console.ReadLine();
            TeacherSystem.deleteTeacher(Convert.ToInt32(id));

            //Display Teacher Data
            Console.WriteLine("\nAll Teachers Data");
            TeacherSystem.GetAllTeachers();

            TeacherSystem.SortTeachers();

           

        }
    }
}
