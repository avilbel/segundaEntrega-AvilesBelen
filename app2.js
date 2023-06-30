alert('.....Charlies Shopping List.....');

do {
    opcion = parseInt(prompt('Welcome to Cahrlies Shopping List!!! \n What items would you like to add?'));
    const listProducts = product.map((product, index) => `${index}: ${product.name} price: ${product.price}`)
    while (option <= 0 || option > 4) {
        option = parseInt(prompt(`Insert Valid Option pls!!! \n ${PRODUCT01.product} : ${PRODUCT01.price}\n ${PRODUCT02.product} : ${PRODUCT02.price}\n ${PRODUCT03.product} : ${PRODUCT03.price}\n ${PRODUCT04.product} : ${PRODUCT04.price}\n `));
    }

    quantity = parseInt(prompt('Add how much tou want:'));
    total = sum(total, PRODUCT01.quantity);



}