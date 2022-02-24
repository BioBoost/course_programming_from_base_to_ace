using System;
using System.Collections.Generic;
using System.Text;

namespace TerminalSelectionMenu
{
    public class Menu
    {
        public Menu(string text)
        {
            SetText(text);
        }

        public void AddItem(string item)
        {
            if (item == null)
            {
                return;
            }

            items.Add(item);
        }

        public override string ToString()
        {
            string output = text + "\n";

            for (int i = 0; i < items.Count; i++)
            {
                output += $"\n    {items[i]}";
            }

            return output;
        }

        private void SetText(string text)
        {
            if (text != null)
            {
                this.text = text;
            }
        }

        private string text = "";
        private List<string> items = new List<string>();
    }
}
