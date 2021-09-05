using System;

namespace сишарп
{
    internal enum Направление
    {
        Север,
        Восток,
        Юг,
        Запад,
    }

    internal enum Команда
    {
        Назад = -2,
        Влево,
        Вправо = 1,
    }

    internal static class Программа
    {
        private static void Main()
        {
            var старНаправление =
                Вход<Направление>("Введите текущее направление корабля: ");
            var команда = Вход<Команда>("Введите команду: ");
            var новНаправление = ИзменитьНаправление(старНаправление, команда);
            Console.WriteLine($"Новое направление: {новНаправление}");
        }

        private static T Вход<T>(string сообщение) where T : struct
        {
            Console.Write(сообщение);
            var успех = false;
            while (!успех)
            {
                успех = Enum.TryParse(Console.ReadLine(), true, out T значение);
                if (успех) return значение;
            }

            throw new InvalidOperationException("да хз");
        }

        private static Направление ИзменитьНаправление(Направление старНаправление, Команда команда)
        {
            return (Направление)(((int)старНаправление + (int)команда + 4) % 4);
        }
    }
}