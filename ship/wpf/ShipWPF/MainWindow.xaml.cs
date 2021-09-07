using System.Windows;

namespace ShipWPF
{
    internal enum Direction
    {
        North,
        East,
        South,
        West
    }

    internal enum Command
    {
        Right = 1,
        Back,
        Left
    }

    public partial class MainWindow : Window
    {
        private Direction direction;

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
                _ => "?"
            };

            finalLabel.Content = $"Текущий курс корабля: {russian_label}";
        }

        private Direction ChangeCourse(int a)
        {
            return (Direction)((int)(direction + a) % 4);
        }

        private void NorthClick(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.North);
        }

        private void EastClick(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.East);
        }

        private void SouthClick(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.South);
        }

        private void WestClick(object sender, RoutedEventArgs e)
        {
            LabelChange(Direction.West);
        }

        private void LeftClick(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Left));
        }

        private void RightClick(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Right));
        }

        private void BackClick(object sender, RoutedEventArgs e)
        {
            LabelChange(ChangeCourse((int)Command.Back));
        }
    }
}
