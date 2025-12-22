let cart = [];
let totalSum = document.querySelector("#total-sum");
// Fånga upp dialogelementet 
const dialog = document.getElementById("cart-dialog");
// Funktion för att visa/stänga dialog
const showCartDialog = (show) => show ? dialog.show() : dialog.close();



//Funktion för att räkna ut totalsumma
function calculateTotalSum() {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

//Lägg till produkt i varukorgen
function addToCart(product) {
    const existingItem = cart.find(item=> item.product.name === product.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product: product, quantity: 1 });
        }
    renderCart();
    renderCartIcon();
    console.table(cart);
}

function removeFromCart(item) {
    item.quantity--;
    if (item.quantity === 0) {
        cart = cart.filter(i => i !== item);
    }
    renderCart();
    renderCartIcon();
    console.table(cart);
}

function renderCart() {
    const cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        totalSum.textContent = "Varukorgen är tom";
        return;
    }

    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add("cart-row");

        row.innerHTML = `
            <p>${item.product.name}</p>
            <span>${item.quantity} st x ${item.product.price} kr</span>
            <button class="remove-btn">-</button>
        `;

        row.querySelector('.remove-btn').addEventListener('click', () => {
            removeFromCart(item);
        });

        cartItems.appendChild(row);
    });

    totalSum.textContent = `Totalt: ${calculateTotalSum()} kr`;
}



function renderCartIcon() {
    let cartBanner = document.querySelector(".cart-banner");
    const headerCart = document.querySelector("#header-cart");
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBanner.textContent = totalQuantity;
}
    