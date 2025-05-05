
let countProducts = 1

function addProduct(){
    const indexProduct = countProducts
   
    const newProduct = document.createElement('div');
    newProduct.className = 'product';
    newProduct.id = `productContainer${indexProduct}`;

    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.id = `product${indexProduct}`;
    newInput.className = 'productInput';

    const newLabel = document.createElement('label');
    newLabel.textContent = `Enter Grocery ${indexProduct} Amount`;
    newLabel.htmlFor = `product${indexProduct}`;

    const productsListElement = document.getElementById('productsList');
    newProduct.appendChild(newLabel);
    newProduct.appendChild(newInput);

    productsListElement.appendChild(newProduct)
    countProducts++;
    
    document.getElementById('removeButton').style.display = 'block'
}

function removeLastProduct(){
    const products = document.getElementsByClassName('product');
    const lastProduct = products[products.length-1]
    lastProduct.remove()
    countProducts--;
    if(countProducts <= 1) document.getElementById('removeButton').style.display = 'none';
}

function calculateTotalAmount(){
    const products = document.getElementsByClassName('productInput');
    let totalAmount = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        totalAmount += parseFloat(product.value)
    }

    document.getElementById('result').innerText = `The Total Amout is: $ ${totalAmount}`;
}