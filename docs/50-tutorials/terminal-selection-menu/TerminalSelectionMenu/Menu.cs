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

        public override string ToString()
        {
            return text;
        }

        private void SetText(string text)
        {
            if (text != null)
            {
                this.text = text;
            }
        }

        private string text = "";
    }
}
