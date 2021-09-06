using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace ShipWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 

    enum Direction
    {
        North,
        East,
        South,
        West
    }

    enum Command
    {
        Right = 1,
        Back,
        Left
    }

    public partial class MainWindow : Window
    {
        
        Direction direction;

        public MainWindow()
        {
            
            InitializeComponent();
            LabelChange(Direction.North);
        }

        private void LabelChange(Direction d)
        {
            direction = d;
            string russian_label = d switch
            {
                Direction.North => "Север",
                Direction.East => "Восток",
                Direction.South => "Юг",
                Direction.West => "Запад",
                _ => "А как?"
            };
            
            final_label.Content = $"Текущий курс корабля: {russian_label}";
        }

        private Direction ChangeCourse(int a)
        {
            return (Direction)((int)(direction + a) % 4);
        }

        private void North_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.North);
        }

        private void East_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.East);
        }

        private void South_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.South);
        }

        private void West_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.West);
        }

        private void Left_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Left));
        }

        private void Right_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Right));
        }

        private void Back_Click(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Back));
        }
    }
}
