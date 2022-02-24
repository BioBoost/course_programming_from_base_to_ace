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

            if (items.Count == 1)
            {
                iSelectedItem = 0;
            }
        }

        public void Next()
        {
            if (iSelectedItem == -1)
            {
                return;
            }

            iSelectedItem++;
            if (iSelectedItem >= items.Count)
            {
                iSelectedItem = 0;
            }
        }

        public void Previous()
        {
            if (iSelectedItem == -1)
            {
                return;
            }

            iSelectedItem--;
            if (iSelectedItem < 0)
            {
                iSelectedItem = items.Count - 1;
            }
        }

        public string GetSelectedItem()
        {
            if (iSelectedItem == -1)
            {
                return "";
            }

            return items[iSelectedItem];
        }

        public override string ToString()
        {
            string output = text + "\n";

            for (int i = 0; i < items.Count; i++)
            {
                if (i == iSelectedItem)
                {
                    output += $"\n  > {items[i]} <";
                }
                else
                {
                    output += $"\n    {items[i]}";
                }
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
        private int iSelectedItem = -1;
    }
}
