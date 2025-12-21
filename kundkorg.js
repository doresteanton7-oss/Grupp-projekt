let cart = [];
let totalSum = document.querySelector("#total-sum");
// Fånga upp dialogelementet 
const dialog = document.getElementById("cart-dialog");
// Funktion för att visa/stänga dialog
const showCartDialog = (show) => show ? dialog.show() : dialog.close();


//Funktion för att räkna ut totalsumma
function calculateTotalSum() {
    return cart.reduce((sum, product) => sum + product.price, 0);
}

function updateTotalSum() {
    const total = calculateTotalSum();
    totalSum.textContent = `Totalt: ${total} kr`;
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
}

function renderCart() {
    const cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        totalSum.textContent = "Varukorgen är tom";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add("cart-row");

        const rowTotal = item.product.price * item.quantity;
        total += rowTotal;

        row.innerHTML = 
        `<p id="product-name">${item.product.name}</p>
        <span>${item.quantity}st x ${item.product.price} kr</span>`;

        cartItems.appendChild(row);

        totalSum.textContent = `Totalt: ${total} kr`;
    });
}