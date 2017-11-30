var Node = function(value, next) {
    this.value = value;
    this.next = null;
}

var List = function() {
    this.listLength = 0;
    this.head = null;
}

Node.prototype = {
    isNull: function() {
        if((this.next) == null)
            return true;
        else 
            return false; 
    }
} 

List.prototype = {
    addNode: function(value) {
        var node = new Node(value), currentNode = this.head;
        
        if(!currentNode) { // the list is empty
            this.head = node;
            this.listLength++;
            return node;
        }
        
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.listLength++;
        return node;
    },
    getLength: function() {
        return this.listLength;
    },
    printList: function() {
        var currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    },
    findElement: function(value) {
        var currentNode = this.head;
        var position = 0;
        while(currentNode) {
            if(currentNode.value == value)
                return position;
            else {
                position++;
                currentNode = currentNode.next
            }
        }
    },
    pop: function() {
        var currentNode = this.head;
        while(currentNode) {
            if(currentNode.next.next == null) {
                var temp = currentNode.next.value;
                delete currentNode.next;
                console.log(temp);
                this.listLength = this.getLength() - 1
                return;
            } else 
                currentNode = currentNode.next;
        }
    }/*,push: function(value) {
        var tail = this.head;
        var pushedNode = new Node(value);
        pushedNode.next = tail;
        this.listLength = this.getLength() + 1;
        return pushedNode;
        //console.log(tail);
    }*/
}


var list = new List();
list.addNode(5);
list.addNode(7);
list.addNode(8);
list.addNode(10);
list.addNode(11);
list.addNode(13);
list.addNode(14);


