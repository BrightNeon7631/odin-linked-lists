class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        let currentNode = this.head;

        if (this.head === null) {
            this.head = newNode;
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    prepend(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            size = size + 1;
        }
        return size;
    }

    headd() {
        return this.head;
    }

    tail() {
        let currentNode = this.head;

        if (currentNode === null) {
            return currentNode;
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    at(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (currentNode === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    pop() {
        if (this.head === null) {
            return;
        } else if (this.head.next === null) {
            this.head = null;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data == value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.data == value) {
                return index;
            }
            currentNode = currentNode.next;
            index = index + 1;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let outputArray = [];
        while (currentNode) {
            outputArray.push(`( ${currentNode.data} ) -> `);
            currentNode = currentNode.next;
        }
        outputArray.push('null');
        console.log(...outputArray);
    }

    insertAt(value, index) {
        // gets the size of the linked list
        let size = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            size = size + 1;
        }

        if (index < 0 || index >= size) {
            return;
        }

        let newNode = new Node(value);

        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            currentNode = this.head;
            // gets the node before the index we want to insert at
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }

    removeAt(index) {
        let size = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            size = size + 1;
        }
    
        if (index < 0 || index >= size) {
            return;
        }

        if (index == 0) {
            this.head = this.head.next;
        } else {
            currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
        }
    }
}

let linkedList = new LinkedList;

console.log(`let linkedList = new LinkedList;`);
console.log(`linkedList.append(2)`)
linkedList.append(2);
linkedList.toString();
console.log('\n');
console.log(`linkedList.append(3);`)
linkedList.append(3);
linkedList.toString();
console.log('\n');
console.log(`linkedList.prepend(1);`)
linkedList.prepend(1);
linkedList.toString();
console.log('\n');
console.log(`linkedList.append(4);`)
linkedList.append(4);
linkedList.toString();

console.log('\n');
console.log(`linkedList.pop();`)
linkedList.pop();
linkedList.toString();

console.log('\n');
console.log(`linkedList.insertAt(4, 2);`)
linkedList.insertAt(4, 2);
linkedList.toString();

console.log('\n');
console.log(`linkedList.removeAt(3);`)
linkedList.removeAt(3);
linkedList.toString();

console.log('\n');
console.log(`console.log(linkedList.headd());`)
console.log(linkedList.headd());
console.log('\n');
console.log(`console.log(linkedList.tail());`)
console.log(linkedList.tail());
console.log('\n');
console.log(`console.log(linkedList.size());`)
console.log(linkedList.size());
console.log('\n');
console.log(`console.log(linkedList.at(1));`)
console.log(linkedList.at(1));
console.log('\n');
console.log(`console.log(linkedList.contains(10));`)
console.log(linkedList.contains(10));
console.log('\n');
console.log(`console.log(linkedList.find(4));`)
console.log(linkedList.find(4));
