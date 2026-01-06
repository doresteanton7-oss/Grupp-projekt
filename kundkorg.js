// Initialisera array för varukorgen 
let cart = [];
// Fånga upp elementet för totalsumman
let totalSum = document.querySelector("#total-sum");
// Fånga upp dialogelementet(modal för varukorgen)
const dialog = document.getElementById("cart-dialog");
// Funktion för att visa/stänga modalen beroende på boolean-värde
const showCartDialog = (show) => show ? dialog.show() : dialog.close();

// Funktion för att räkna ut och returnera totalsumman för varukorgen
function calculateTotalSum() {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

// Funktion för att lägga till en produkt i varukorgen
// Om produkten redan finns i varukorgen ökas dess kvantitet med 1
function addToCart(product) {
    const existingItem = cart.find(item=> item.product.name === product.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product: product, quantity: 1 });
        }
    // Updatera varukorgen och ikonen vid ändring    
    renderCart();
    renderCartIcon();
}

// Funktion för att ta bort en produkt från varukorgen
// Minskar kvantiteten med 1 och tar bort den helt om kvantiteten når 0
function removeFromCart(item) {
    item.quantity--;
    if (item.quantity === 0) {
        cart = cart.filter(i => i !== item);
    }
    // Updatera varukorgen och ikonen vid ändring
    renderCart();
    renderCartIcon();
}

// Funktion för att rendera produkter i varukorgen
function renderCart() {
    const cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        totalSum.textContent = "Varukorgen är tom";
        return;
    }
    // Loopa igenom varukorgsobjekten och skapa rader för varje produkt
    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add("cart-row");

        row.innerHTML = `
            <p>${item.product.name}</p>
            <span>${item.quantity} st x ${item.product.price} kr</span>
            <button class="remove-btn">-</button>
        `;
        // Koppla ta-bort-funktionen till ta-bort-knappen
        row.querySelector('.remove-btn').addEventListener('click', () => {
            removeFromCart(item);
        });

        cartItems.appendChild(row);
    });
    // Uppdatera totalsumman
    totalSum.textContent = `Totalt: ${calculateTotalSum()} kr`;
}


// Funktion som uppdaterar varukorgsikonen (antalet produkter i varukorgen)
function renderCartIcon() {
    let cartBanner = document.querySelector(".cart-banner");
    const headerCart = document.querySelector("#header-cart");
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBanner.textContent = totalQuantity;
}