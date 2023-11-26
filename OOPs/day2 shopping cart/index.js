class Product {
	constructor(name, price, stock) {
		this.name = name
		this.price = price
		this.stock = stock
	}
}

class Person {

	constructor(name, email, cart) {
		this.name = name
		this.email = email
		this.cart = cart
	}
}

class Cart {

	constructor() {
		this.products = []
		this.total = 0
	}

	addProduct(product) {
		this.products.push(product)

		product.stock--
		this.getTotal()
	}


	removeProduct(product) {
		const index = this.products.indexOf(product)
		if (index > -1) {
			this.products.splice(index, 1)
		}

		product.stock++
		this.getTotal()
	}

	getTotal() {
		let total = 0
		for (let i = 0; i < this.products.length; i++) {
			total += this.products[i].price
		}

		this.total = total
	}

	checkout() {
		this.products = []
		this.total = 0
	}
}

const phone = new Product('phone', 70000, 50)
const earphone = new Product('earphone', 20000, 100)
const laptop = new Product('laptop', 200000, 10)

console.log('Product list \n', phone, '\n', earphone, '\n', laptop)
console.log('-------------------')

const DSS = new Person('srivats', 'vatsa@sri', new Cart())

console.log('Current user: \n', DSS)
console.log('-------------------')

DSS.cart.addProduct(phone)
DSS.cart.addProduct(earphone)
DSS.cart.addProduct(laptop)
// nirzon.cart.getTotal()

console.log('Users cart: \n', DSS.cart)
console.log('-------------------')

DSS.cart.removeProduct(earphone)
console.log('**Removed earphone** \n', DSS.cart)
console.log('-------------------')

console.log('Product list \n', phone, '\n', earphone, '\n', laptop)
console.log('-------------------')

console.log('Total: ', DSS.cart.total)
console.log('-------------------')

console.log('Checking out.......')
nirzon.cart.checkout()

console.log('Updated cart: \n', DSS.cart)