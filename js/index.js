// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!'); 
  const price = Number(product.querySelector('.price span').innerHTML)   
  const quantity = Number(product.querySelector('.quantity input').value)  
  const subtotal =price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal 
  return subtotal

  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.getElementsByClassName('product')
  const allProducts = [...multipleProducts]
  for (let i=0; i<allProducts.length; i++){
    updateSubtotal(allProducts[i]) 
  } 

  // ITERATION 3
  let totalPrice = 0
  for(let i=0; i<allProducts.length; i++){
    totalPrice += Number(allProducts[i].querySelector('.subtotal span').innerHTML)
  }
  document.querySelector('h2 span').innerHTML = totalPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target); 
  const parent = event.currentTarget.parentNode.parentNode.parentNode
  parent.removeChild(event.currentTarget.parentNode.parentNode)  
  event.currentTarget.parentNode.parentNode.querySelector('.subtotal span').value=0
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const newProduct = document.getElementsByClassName('create-product')[0]
  const newProductTitle = newProduct.getElementsByTagName('input')[0].value 
  const newProductPrice = Number(newProduct.getElementsByTagName('input')[1].value) 
  const duplicateProduct = document.getElementsByClassName('product')[0]
  duplicateProduct.querySelector('.name span').innerHTML =  newProductTitle
  duplicateProduct.querySelector('.price span').innerHTML =  newProductPrice 
  document.querySelector('tbody').appendChild(duplicateProduct)

  newProduct.getElementsByTagName('input')[0].value="0"
  newProduct.getElementsByTagName('input')[1].value=0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.getElementsByClassName('btn btn-remove')
  for (let i=0; i<allRemoveButtons.length ; i++){
    allRemoveButtons[i].addEventListener('click', removeProduct)
  }

  const createProductButton = document.getElementById('create') 
  createProductButton.addEventListener('click', createProduct )
});
