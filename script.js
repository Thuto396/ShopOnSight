const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartItems = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = parseFloat(button.getAttribute('data-price'));
    cartItems++;
    cartCount.textContent = cartItems;
  });
});
