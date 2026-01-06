//Initialisera array för varukorgen och variabel för totalsumman
let cart = [];
let totalSum = document.querySelector("#total-sum");
// Fånga upp dialogelementet(modal för varukorgen)
const dialog = document.getElementById("cart-dialog");
// Funktion för att visa/stänga modalen
const showCartDialog = (show) => show ? dialog.show() : dialog.close();

//Funktion för att räkna ut totalsumman
function calculateTotalSum() {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

//Funktion för att lägga till produkt i varukorgen
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

//Funktion för att ta bort produkt från varukorgen
function removeFromCart(item) {
    item.quantity--;
    if (item.quantity === 0) {
        cart = cart.filter(i => i !== item);
    }
    renderCart();
    renderCartIcon();
    console.table(cart);
}

//Funktion för att rendera varukorgen
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


//Funktion för att uppdatera varukorgsikonen
function renderCartIcon() {
    let cartBanner = document.querySelector(".cart-banner");
    const headerCart = document.querySelector("#header-cart");
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBanner.textContent = totalQuantity;
}