using System.Text;
using System.Text.RegularExpressions;

namespace MyApp // Note: actual namespace depends on the project name.
{
    public class Program
    {
        static void Main(string[] args)
        {
            string inFix, postFix = string.Empty;
            while (true)
            {
                Console.Write("Введите инфиксную форму: ");
                inFix = Console.ReadLine().Replace(" ", string.Empty);
                // TODO: не работает, пофиксить
                //if (IsValid(inFix)) //Проверка инфиксной формы
                //{
                //    Console.WriteLine("\nПостфиксная: {0}", ConvertToPostFix(inFix));
                //    break;
                //}
                //Console.WriteLine("\nИнфиксная форма написана не правильно!\n");
                Console.WriteLine("\nПостфиксная: {0}", ConvertToPostFix(inFix));
                break;
            }

            Console.ReadKey();
        }


        // TODO: исправить работу при буквенных выражениях
        private static string ConvertToPostFix(string inFix)
        {
            StringBuilder postFix = new StringBuilder();
            char arrival;
            Stack<char> oprerator = new Stack<char>(); //создаём новый стак
            foreach (char c in inFix.ToCharArray())//Перебираем символы в inFix
            {
                if (Char.IsNumber(c))
                    postFix.Append(c);
                else if (c == '(')
                    oprerator.Push(c);
                else if (c == ')')//Удаляем все предыдущие элементы со стака и вставляем
                                  //в начало PostFix.  
                {
                    arrival = oprerator.Pop();
                    while (arrival != '(')
                    {
                        postFix.Append(arrival);
                        arrival = oprerator.Pop();
                    }
                }
                else
                {
                    if (oprerator.Count != 0 && Predecessor(oprerator.Peek(), c))// если находим оператор 
                    {
                        arrival = oprerator.Pop();
                        while (Predecessor(arrival, c))
                        {
                            postFix.Append(arrival);

                            if (oprerator.Count == 0)
                                break;

                            arrival = oprerator.Pop();
                        }
                        oprerator.Push(c);
                    }
                    else
                        oprerator.Push(c);//Если стек пуст и оператор имеет приоритет
                }
            }
            while (oprerator.Count > 0)
            {
                arrival = oprerator.Pop();
                postFix.Append(arrival);
            }
            return postFix.ToString();
        }


        // Сравниваем приоритеты
        private static bool Predecessor(char firstOperator, char secondOperator)
        {
            string opString = "(+-*/%";

            int firstPoint, secondPoint;

            int[] precedence = { 0, 12, 12, 13, 13, 13 };// "(" должен всегда предшествовать всем

            firstPoint = opString.IndexOf(firstOperator);
            secondPoint = opString.IndexOf(secondOperator);

            return (precedence[firstPoint] >= precedence[secondPoint]) ? true : false;
        }

        private static bool IsValid(string input)
        {
            Regex operators = new Regex(@"[\-+*/%]", RegexOptions.IgnorePatternWhitespace | RegexOptions.Compiled);
            if (string.IsNullOrEmpty(input))
                return false;

            if (input.ToCharArray().Select(c => c == '(').Count() != input.ToCharArray().Select(c => c == ')').Count())
                return false;

            string tempString = operators.Replace(input, ".");

            if (tempString.EndsWith("."))
                return false;

            string[] contains = new string[] { "(.)", "()", "..", ".)" };

            foreach (string s in contains)
            {
                if (tempString.Contains(s))
                    return false;
            }

            operators = new Regex(@"[().]", RegexOptions.IgnorePatternWhitespace | RegexOptions.Compiled);
            tempString = operators.Replace(tempString, string.Empty);

            foreach (char c in tempString.ToCharArray())
            {
                if (!Char.IsNumber(c))
                    return false;
            }

            if (input.Contains("."))
                return false;

            tempString = input;

            operators = new Regex(@"[1234567890]", RegexOptions.IgnorePatternWhitespace | RegexOptions.Compiled);
            tempString = operators.Replace(tempString, ".");

            if (tempString.Contains(".."))
                return false;
            if (input.StartsWith("*") || input.StartsWith("/") || input.StartsWith("%")
                                                      || input.StartsWith("+") || input.StartsWith("-"))
                return false;

            contains = new string[] { "(%", "(/", "(*", "*", "(+", "(-" };
            foreach (string s in contains)
            {
                if (input.Contains(s))
                    return false;
            }

            int begin = 0, end = 0;
            foreach (char c in input)
            {
                if (c == '(')
                    begin++;
                if (c == ')')
                    end++;
                if (end > begin)
                    return false;
            }
            return true;
        }
    }
}


