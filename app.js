const product = [
    { name: 'Bully Stick', price: 8.75, brand: 'Pet-Shop' },
    { name: 'Dog-food', price: 54.68, brand: 'Wild-Blue' },
    { name: 'ball', price: 2, brand: 'Dollar-Store' },
    { name: 'Chicken-Sticks', price: 19.75, brand: 'Royal-Caninen' }

];

const detailedBill = [];
let quantity;
let total = 0;
let option;
let add;

function calculate(total, product, quantity) {
    return total + product + quantity
}


alert("Welcome to Charlies Shopping Cart!");

do {
    const productList = poduct.map((product, index) => `${index + 1}: ${product.name} price: ${product.price}`);

    option = pasrseInt(prompt(`What would you like to add \n ${productList.join('\n')}`));

    while (option <= 0 || option > 4) {
        option = parseInt(prompt(`Insert Valid Option pls!!! \n ${PRODUCT01.product} : ${PRODUCT01.price}\n ${PRODUCT02.product} : ${PRODUCT02.price}\n ${PRODUCT03.product} : ${PRODUCT03.price}\n ${PRODUCT04.product} : ${PRODUCT04.price}\n `));
    }

    quantity = parseInt(prompt('Add how much tou want:'));

    detailedBill.push({
        name: product[option - 1].name,
    })

}

    detailedFactura.push({
    nombre: productos[opcion - 1].nombre,
    precioUnitario: productos[opcion - 1].precio,
    cantidad,
    subtotal: productos[opcion - 1].precio * cantidad
});

agregar = prompt("Deseas agregar mas productos al carrito? si/no")
} while (agregar == "si")

    ///aca para mostrar el detalle de factura hacemos lo mismo que arriba (map y luego join); alert
    //alert();
    total = detalleFactura.reduce((acc, itemFactura) => acc + itemFactura.precioUnitario * itemFactura.cantidad, 0); ///te devuelve el total de la suma de todos los subtotales del detalle

alert("El total a pagar de su compra es de: $" + total)