'use strict';
class Node{
  constructor(){
    this.value = 0;
    this.children = new Array(26);
  } 
}

class Trie{
  constructor(){
    this.root = new Node('');
  }
  add(word){
    let currentNode = this.root;
    word = word.toLowerCase();
    let length = word.length;
    let position;
    for(let i = 0; i < length; i++){
      position = word.charCodeAt(i) - 97;
      if(currentNode[position] === undefined){
        currentNode[position] = new Node();
      }
      currentNode = currentNode[position];
    }
    currentNode.value++;
  }

  _incrementLevel(level){
    level += 1;
    return level;
  }

  print(root, word, level){
    let value = root.value;
    while(value > 0){
      console.log(word);
      value--;
    }
    for(let i = 0; i < 26; i++){
      if(root[i]){
        word = word.slice(0,level) + String.fromCharCode(97 + i);
        this.print(root[i], word, this._incrementLevel(level));
      }
    }
  }
}

const trie = new Trie();
trie.add('testing');
trie.add('testing');
trie.add('potato');
trie.add('one');
trie.add('book');
trie.add('bookcase');
trie.print(trie.root, '', 0);
