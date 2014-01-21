using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pa2
{
    public class MyTrieNode
    {
        private string current;
        private Dictionary<string, MyTrieNode> kids;
        private string word;

        public MyTrieNode(string current)
        {
            this.current = current;
            this.kids = new Dictionary<string, MyTrieNode>();
        }

        public void addKid(MyTrieNode newKid)
        {
            this.kids.Add(newKid.getString(), newKid);
        }

        public string getString()
        {
            return this.current;
        }
        public string setWord(string word){
            this.word = word;
            this.kids = null;
        }
    }
}