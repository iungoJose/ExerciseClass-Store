class Item {
    // Creating constructor.
    constructor(name, price, quantity) {
        this.name = name,
            this.price = price,
            this.quantity = quantity
    }
}

// Create class Store
class Store {
    // constructor
    constructor(name) {
        this.name = name,
            this.inventory = {}
    }

    // methods
    addItem(product) {
        if (product instanceof Item) {
            this.inventory[product.name] = product
        } else {
            console.log("error")
        }
    }

    deleteItem(product) {
        if (product in this.inventory) {
            delete this.inventory[product]
        } else {
            console.log('There is no product to delete')
        }
    }

    updateQuantity(product, newQuantity) {
        if (product in this.inventory) {
            this.inventory[product].quantity = newQuantity
        } else {
            console.log('There is no product to update')
        }
    }
}

// Create three object => instance of Item class
let apples = new Item('apple', 24, 150)
let grapes = new Item('grape', 12, 125)
let oranges = new Item('orange', 18, 250)
console.log(apples)
console.log(grapes)
console.log(oranges)

// Create store
let jose = new Store('Jose shop')
console.log(jose)

jose.addItem(apples)
console.log(jose)
jose.addItem(grapes)
jose.addItem(oranges)
console.log(jose)

jose.deleteItem('banana') //output: There is no product to delete
jose.deleteItem('apple')
console.log(jose)

jose.updateQuantity('orange', 1)
console.log(jose)

/*
inventory = {
// property apple => values is an object
    apple:{       delete object.key of the property
        name: 'appple',
        price: 24,
        quantity: 150
    },
    grape : {
        name: 'grape',
        price: 12,
        quantity: 125
    }


}



*/