﻿using System;
using System.Collections;
using System.Collections.Generic;

public class Program
{
    public static int[] JosephusProblem(int n, int m, int first)
    {
        var circle = new List<int>();
        var order = new int[n];

        var k = 0;

        for (var i = 0; first + i < n; ++i)
        {
            circle.Add(first + i);
            k++;

        }

        for (var i = 0; i < n - k; i++)
        {
            circle.Add(i);
        }

        var l = 0;
        var j = 0;
        k = 0;

        while (circle.Count != 0)
        {
            j++;
            if (j == m)
            {
                order[k] = circle[l];
                circle.RemoveAt(l);

                k++;
                l--;
                j = 0;
            }

            if (k == n - 1)
            {
                order[k] = circle[0];
                circle.RemoveAt(0);
            }

            if (l == circle.Count - 1)
            {
                l = 0;
            }
            else
            {
                l++;
            }
        }

        return order;
    }

    static void Main(string[] args)
    {
        try
        {
            

            Console.Write("Введите кол-во солдат: ");
            var n = Int32.Parse(Console.ReadLine());
            Console.Write("Введите шаг: ");
            var m = Int32.Parse(Console.ReadLine());
            Console.Write("Введите номер первого солдата: ");
            var first = Int32.Parse(Console.ReadLine());

            var result = JosephusProblem(n, m, first - 1);
            Console.Write("Ответ: ");
            for (var i = 0; i < result.Length; i++)
            {
                Console.Write($"{result[i] + 1} ");//1 3 5 0 4 2 6
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
        finally
        {
            Console.ReadLine();
        }
    }

}