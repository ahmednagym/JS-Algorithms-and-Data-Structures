class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //pushing into the list 
    push(val){
        let newNode = new Node(val);
        //checking if the list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
    //remove elemnt form the end of the list
    pop(){
        //checking if the list is empty and there's nothing to remove
        if(!this.head) return null;
        let temp = this.head //to keep track of the current value
        let newTail = temp; 
        while(temp.next){
            newTail = temp;
            temp = temp.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //checking when the list is empty
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //removing the head and reintializing it
    shift(){
        if(!this.head) return null;
        let removeHead = this.head;
        this.head = removeHead.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return removeHead;
    }
    //adding an element to beginning of the list
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode.next;
        } 
        this.length++;
        return this;
    }
    //returns a specified element
    getElement(index){
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let currentHead = this.head;
        while(count !== index){
            currentHead = currentHead.next;
            count++;
        }
        return currentHead;
    }
    //changing the value of a node denpending on its index
    change(index,val){
        let foundNode = this.getElement(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //add element to the list to a specific position
    addElement(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }

        let newNode = new Node(val);
        //get the previuos node of this specific position
        let prev = this.getElement(index - 1); 
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    //remove node from list at a specific position
    removeElement(index){
        if(index < 0 || index > this.length) return null;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        //get the previuos node of this specific position
        let prev = this.getElement(index - 1);
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.length--;
        return removeNode;
    }
    //reverse a list
    reverse(){
        //swap the head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node; 
            node = next;
        }
        return this;
    }
}

let list = new SingleLinkedList();