class Stack {
    constructor() {
        this.items = [];
    }

    // Añadir un elemento al array
    push(element) {
        this.items.push(element);
    }

    // Devolver el último elemento ingresado al array
    peek() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Verificar si el array está vacío
    isEmpty() {
        return this.items.length === 0;
    }

    // Devolver el tamaño del array
    size() {
        return this.items.length;
    }

    // Vaciar el array
    clear() {
        this.items = [];
    }

    // Ver los elementos del array en orden LIFO
    printLIFO() {
        console.log("Contenido del array (LIFO):");
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }

    // Ver los elementos del array en orden de entrada
    printNormal() {
        console.log("Contenido del array entrada:");
        console.log(this.items.join(', '));
    }
}

// Ejemplo de uso con números
const numberStack = new Stack();
numberStack.push(13);
numberStack.push(7);
numberStack.push(90);
numberStack.push(3);
console.log("Array de Números:");
numberStack.printNormal();  
console.log("Último elemento:", numberStack.peek()); 
numberStack.printLIFO();  
console.log("Tamaño del array:", numberStack.size());

// Ejemplo de uso con nombres (strings)
const nameStack = new Stack();
nameStack.push("Sebas");
nameStack.push("Sandra");
nameStack.push("Alejandro");
nameStack.push("Johana");
console.log("\nArray de Nombres:");
nameStack.printNormal(); 
console.log("Último elemento:", nameStack.peek());  
nameStack.printLIFO();  
console.log("Tamaño del array:", nameStack.size());
