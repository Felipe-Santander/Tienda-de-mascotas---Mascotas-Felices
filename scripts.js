document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-list');
    const cartContainer = document.getElementById('cart');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cartItems = [];

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
            cartList.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function addToCart(name, price) {
        cartItems.push({ name, price });
        updateCart();
    }

    productContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const product = event.target.closest('.product');
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);
            addToCart(productName, productPrice);
        }
    });

    checkoutBtn.addEventListener('click', function () {
        alert(`Compra realizada por $${parseFloat(cartTotal.textContent).toFixed(2)}`);
        cartItems = [];
        updateCart();
    });
});


/*funcionalidad del boton iniciar sesion o registarse*/
function abrirVentana() {
    window.open("login.html", "_blank", "width=400,height=400");
  }