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

namespace LedSeriesResistorCalculator
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void solve_Click(object sender, RoutedEventArgs e)
        {
            double vcc = Convert.ToDouble(supplyVoltage.Text);
            double forward = Convert.ToDouble(ledVoltage.Text);
            double iCurrent = Convert.ToDouble(current.Text);

            double rForward = 1000 * (vcc - forward) / iCurrent;

            resistorVoltage.Text = (vcc - forward).ToString();
            resistance.Text = rForward.ToString();
        }
    }
}
