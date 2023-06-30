const product = [
    { name: 'Lincoln', price: 120 },
    { name: 'Rumba', price: 178 },
    { name: 'Anillitos', price: 190 }
];

let cart = [];

let select = prompt('Wish to buy some cookies? yes/no');

while (select != 'yes' && select != 'no') {
    alert('Please insert yes or no');
    select = prompt('Wish to buy some cookies? yes/no');
}

if (select == 'yes') {
    alert('Here is our list of cookies');

    let allProduct = product.map((product) => product.name + '  $' + product.price)

    alert(allProduct.join(' - '));
} else if (select == 'no') {
    alert('Thanks for trying!!\n Please come again ')
}

while (select != 'no') {
    let product = prompt('Add some cookies to your Cart! ');
    let price = 0;

    if (product === 'Lincoln' || product === 'Rumba' || product === 'Anillitos') {
        switch (product) {
            case 'Lincoln':
                price = 120;
                break;
            case 'Rumba':
                price = 178;
                break;
            case 'Anillitos':
                price = 190;
                break;
            default:
                break;

        }

        let quantity = parseInt(prompt('How many would you like to take?'))

        cart.push({ product, price, quantity })

    } else {

        alert('Cookie is not available, sorry for the inconvenience..')

    }

    select = prompt('Wish to continue?')

    while (select === 'no') {
        alert('Thanks for the shoppimg with us!')
        cart.forEach((cartFinal) => {
            alert(`product: ${cartFinal.product}, quantity: ${cartFinal.quantity}, total to pay ${cartFinal.quantity * cartFinal.price} `)
        })
    }

}

const total = cart.reduce((acc, the) => acc + the.price * the.quantity, 0)

alert(`The total bill or your cart is: $ ${total}`)

