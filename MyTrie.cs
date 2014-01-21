using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace pa2
{
    public class MyTrie
    {
        private MyTrieNode root;
        public MyTrie()
        {
            //process the wiki dump
            //use currentNode.addKid(newNode);
            this.root = new MyTrieNode("test");
        }
    }
}